<?php
/**
 * The server-side rendering of the dynamic archive block.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @package JCORE\DynamicArchive
 */

use Timber\FunctionWrapper;
use Timber\URLHelper;
use function Jcore\DynamicArchive\Helpers\build_pagination_url;
use function Jcore\DynamicArchive\Helpers\build_param_name;
use function Jcore\DynamicArchive\Helpers\build_taxonomies_filter;
use function Jcore\DynamicArchive\Helpers\get_parameter;
use function Jcore\DynamicArchive\Helpers\handle_dynamic_args;
use function Jcore\DynamicArchive\Helpers\is_post_type;

$context          = Timber::context();
$context['block'] = $block;

$current_url = URLHelper::get_current_url();
$parsed_url  = wp_parse_url( $current_url, PHP_URL_PATH );
if ( $parsed_url === false ) {
	$parsed_url = $current_url;
}
$context['current_path'] = $parsed_url;

if ( ! is_post_type( $attributes['postType'] ?? '' ) ) {
	$attributes['postType'] = 'post';
}

$context['block_wrapper_attributes'] = new FunctionWrapper( 'get_block_wrapper_attributes' );
$context['attributes']               = $attributes;
$context['taxonomies_filter']        = build_taxonomies_filter( $attributes );

$block_per_page = $attributes['perPage'] ?? get_site_option( 'posts_per_page', 10 );
$args           = array(
	'post_type'      => $attributes['postType'],
	'post__not_in'   => array( get_the_ID() ),
	'posts_per_page' => $block_per_page,
);

if ( isset( $attributes['sticky'] ) ) {
	$args_to_add = match( $attributes['sticky'] ) {
		'exclude' => array(
			'post__not_in' => get_option( 'sticky_posts' ),
		),
		'only' => array(
			'post__in' => get_option( 'sticky_posts' ),
			'ignore_sticky_posts' => true, // This might seem redundant, but all it does is improve performance. See https://wordpress.stackexchange.com/questions/260941/why-ignore-sticky-posts-argument-is-in-sticky-post-query#:~:text=Explanation%20of%20the%20codex%20example%3A
		),
		default => array(),
	};
	$args = array_merge( $args, $args_to_add );
}

$args = handle_dynamic_args( $args, $attributes );
$args = apply_filters( 'jcore_dynamic_archive_args', $args, $attributes );

$timber_posts = Timber::get_posts(
	$args
);

$current_page            = get_parameter( build_param_name( 'paged', $attributes['instanceId'] ?? '' ), 1 );
$context['current_page'] = $current_page;

$total_pages = ceil( $timber_posts->found_posts / $block_per_page );
// If pagination is enabled and not "load more", we need to subtract 1 from the posts per page, as we do not need to check for more posts.
if ( ( $attributes['showPagination'] ?? false ) && ! ( $attributes['infiniteScroll'] ?? false ) ) {
	$pagination = array();
	for ( $i = 1; $i <= $total_pages; $i++ ) {
		$pagination[] = array(
			'number' => $i,
			'title' => $i,
			'current' => $i === absint($current_page),
			'href' => build_pagination_url( $attributes, $i ),
		);
	}
	$context['pagination'] = $pagination;
	$context["first_page_link"] = build_pagination_url( $attributes, 1 );
	$context["last_page_link"] = build_pagination_url( $attributes, $total_pages );
	$context["previous_page_link"] = build_pagination_url( $attributes, ($current_page > 1) ? $current_page - 1 : 1 );
	$context["next_page_link"] = build_pagination_url( $attributes, ($current_page < $total_pages) ? $current_page + 1 : $total_pages );
	$context["total_pages"] = $total_pages;
}
if ( ($attributes['showPagination'] ?? false) && ($attributes['infiniteScroll'] ?? false) ) {
	$context['has_more']     = $current_page < $total_pages;
	$context['next_page_link'] = build_pagination_url( $attributes, ($current_page < $total_pages) ? $current_page + 1 : $total_pages );
}

// If pagination is enabled and "load more", we need to slice the posts array to remove the last post, as we do not need to check for more posts.
if ( ! is_null( $timber_posts ) && ( $attributes['showPagination'] ?? false ) && ( $attributes['infiniteScroll'] ?? false ) && $has_more ) {
	$final_posts = array_slice( $timber_posts->to_array(), 0, - 1 );
}
$context['posts'] = $final_posts ?? $timber_posts;

$taxonomy_key = build_param_name( 'taxonomy', $attributes['instanceId'] ?? '' );

$interactivity_context = array(
	'currentPage' => $current_page ?? 1,
	'isInfiniteScroll' => $attributes['infiniteScroll'] ?? false,
	'filters'     => array(
		$taxonomy_key => get_parameter( $taxonomy_key, array() ),
	),
	'blockId'     => $attributes['instanceId'],
);

wp_interactivity_state(
	'jcore/dynamic-archive',
	array()
);

$context['interactivity_context_attribute'] = wp_interactivity_data_wp_context( $interactivity_context, 'jcore/dynamic-archive' );

$rendered = Timber::compile( 'dynamic-archive/archive.twig', $context );

echo wp_interactivity_process_directives( $rendered ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
