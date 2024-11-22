(()=>{var e,t={954:(e,t,n)=>{"use strict";const r=window.wp.blocks;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=window.wp.i18n,s=window.wp.element,c=window.wp.compose,l=window.wp.blockEditor,u=window.wp.primitives,d=window.ReactJSXRuntime,p=(0,d.jsxs)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,d.jsx)(u.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,d.jsx)(u.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})]}),h=(0,d.jsx)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(u.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),m=(0,d.jsx)(u.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)(u.Path,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})});var f=n(833),g=n.n(f);const y=window.wp.serverSideRender;var v=n.n(y);const C=window.wp.components;function b({attributeName:e,checked:t,setAttributes:n,children:r,label:o}){return(0,d.jsxs)("div",{className:"jcore-toggle-component",children:[(0,d.jsx)(C.ToggleControl,{checked:t,onChange:t=>n({[e]:t}),label:o,__nextHasNoMarginBottom:!0}),t&&r]})}const x=window.wp.hooks,_=window.wp.coreData;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F({taxonomySlug:e,onChange:t,value:n}){const[r,o]=(0,s.useState)([]),[a,c]=(0,s.useState)({}),[l,u]=(0,s.useState)(1),{taxonomy:p,loading:h}=function(e){const{record:t,isResolving:n}=(0,_.useEntityRecord)("root","taxonomy",e);return{taxonomy:t,loading:n}}(e),{taxonomyRecords:m,loading:f}=function(e,t={}){const n=(r=t,w(w({},{per_page:100}),r));var r;const{records:o,isResolving:a}=(0,_.useEntityRecords)("taxonomy",e,n);return{taxonomyRecords:o,loading:a}}(e,{per_page:100,page:l});return(0,s.useEffect)((()=>{if(m){const e=m.map((e=>e.id)),t={};m.forEach((e=>{t[e.id]={slug:e.slug,name:e.name}})),o(e),c(t)}}),[m]),(0,d.jsxs)(C.Flex,{children:[(0,d.jsx)(C.FlexBlock,{children:(0,d.jsx)(C.FormTokenField,{__experimentalExpandOnFocus:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,displayTransform:e=>a[e]?a[e].name:e,saveTransform:e=>e+"",suggestions:r,value:n,onChange:t,label:`${(0,i.sprintf)((0,i._x)("Show only items with selected: %s","Taxonomy","jcore-dynamic-archive"),p.name)}`})}),(h||f)&&(0,d.jsx)(C.FlexItem,{children:(0,d.jsx)(C.Spinner,{})})]})}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}g()("dynamic-archive:Edit");const P=JSON.parse('{"UU":"jcore/dynamic-archive"}');(0,r.registerBlockType)(P.UU,{edit:function e({attributes:t,setAttributes:n}){const{postType:r,perPage:o,columns:a,masonryGrid:u,showPagination:f,infiniteScroll:g,sticky:y,filterTypes:j,filterTypesChild:w,forcedCategories:S,taxonomies:P,hierarchicalFilter:k}=t,E=(0,c.useInstanceId)(e);n({instanceId:E.toString()});const{postTypes:M,loading:N}=function(e={per_page:100}){const{isResolving:t,records:n}=(0,_.useEntityRecords)("root","postType",e),[r,o]=(0,s.useState)([]),a=(0,x.applyFilters)("dynamicArchive.forbiddenPostTypes",["attachment"]);return(0,s.useEffect)((()=>{n&&o(n.filter((e=>e.viewable&&!a.includes(e.slug))))}),[n]),{postTypes:r,loading:t}}(),B=function(){const[e,t]=(0,s.useState)(5),[n]=(0,_.useEntityProp)("root","site","posts_per_page");return(0,s.useEffect)((()=>{void 0!==n&&t(n)}),[n]),e}();(0,s.useEffect)((()=>{t.perPage||n({perPage:B})}),[B]);const{order:D,orderBy:T}=t,H=[{label:(0,i.__)("Ascending","jcore-dynamic-archive"),value:"ASC"},{label:(0,i.__)("Descending","jcore-dynamic-archive"),value:"DESC"}],I=[{label:(0,i.__)("Date","jcore-dynamic-archive"),value:"date"},{label:(0,i.__)("Title","jcore-dynamic-archive"),value:"title"},{label:(0,i.__)("Modified","jcore-dynamic-archive"),value:"modified"},{label:(0,i.__)("Author","jcore-dynamic-archive"),value:"author"},{label:(0,i.__)("ID","jcore-dynamic-archive"),value:"ID"},{label:(0,i.__)("Menu order","jcore-dynamic-archive"),value:"menu_order"}],[z,A]=(0,s.useState)([]),{taxonomies:R,loading:V}=function(e){const t={per_page:-1};e&&(t.type=e);const{records:n,isResolving:r}=(0,_.useEntityRecords)("root","taxonomy",t);return{taxonomies:n,loading:r}}(r);(0,s.useEffect)((()=>{if(R){const e=R.map((e=>({label:e.name,value:e.slug,id:e.slug,hierarchical:e.hierarchical})));A(null!=e?e:[]);const t=P.filter((t=>e.map((e=>e.value)).includes(t)));n({taxonomies:t})}else A([])}),[R]);const G=[{label:(0,i.__)("Checkbox","jcore-dynamic-archive"),value:"checkbox"},{label:(0,i.__)("Radio","jcore-dynamic-archive"),value:"radio"},{label:(0,i.__)("Dropdown","jcore-dynamic-archive"),value:"dropdown"}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(l.InspectorControls,{children:[(0,d.jsxs)(C.PanelBody,{title:(0,i.__)("Settings","jcore-dynamic-archive"),icon:N?(0,d.jsx)(C.Spinner,{size:5}):p,children:[(0,d.jsxs)(C.Flex,{children:[(0,d.jsx)(C.FlexBlock,{children:(0,d.jsx)(C.SelectControl,{label:(0,i.__)("Post Type","jcore-dynamic-archive"),value:r,options:M.map((e=>({label:e.name,value:e.slug}))),onChange:e=>{n({postType:e,taxonomies:[],filterTypes:{},filterTypesChild:{},hierarchicalFilter:{},forcedCategories:{}})},__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})}),(0,d.jsx)(C.FlexItem,{children:N&&(0,d.jsx)(C.Spinner,{})})]}),(0,d.jsx)(b,{label:(0,i.__)("Show pagination","jcore-dynamic-archive"),checked:f,setAttributes:n,attributeName:"showPagination",children:(0,d.jsx)(C.ToggleControl,{label:(0,i.__)("Infinite scroll","jcore-dynamic-archive"),checked:g,onChange:e=>n({infiniteScroll:e}),__nextHasNoMarginBottom:!0})}),(0,d.jsx)(C.SelectControl,{label:(0,i.__)("Order","jcore-dynamic-archive"),value:D,options:H,onChange:e=>n({order:e}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),(0,d.jsx)(C.SelectControl,{label:(0,i.__)("Order by","jcore-dynamic-archive"),value:T,options:I,onChange:e=>n({orderBy:e}),__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),"post"===r&&(0,d.jsx)(C.SelectControl,{label:(0,i.__)("Sticky post behavior","jcore-dynamic-archive"),options:[{label:(0,i.__)("Include","jcore-dynamic-archive"),value:"include"},{label:(0,i.__)("Exclude","jcore-dynamic-archive"),value:"exclude"},{label:(0,i.__)("Only","jcore-dynamic-archive"),value:"only"}],onChange:e=>n({sticky:e}),value:y,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]}),(0,d.jsxs)(C.PanelBody,{title:(0,i.__)("Layout","jcore-dynamic-archive"),icon:h,children:[(0,d.jsx)(C.ToggleControl,{label:(0,i.__)("Masonry Grid","jcore-dynamic-archive"),checked:u,onChange:e=>n({masonryGrid:e}),__nextHasNoMarginBottom:!0}),(0,d.jsx)(C.RangeControl,{label:(0,i.__)("Columns","jcore-dynamic-archive"),value:a||3,onChange:e=>{isNaN(parseInt(e))||n({columns:parseInt(e)})},min:1,max:4,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),(0,d.jsx)(C.TextControl,{label:(0,i.__)("Posts per Page","jcore-dynamic-archive"),value:o||B,onChange:e=>{isNaN(parseInt(e))||n({perPage:parseInt(e)})},type:"number",min:1,max:100,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]}),(0,d.jsx)(C.PanelBody,{title:(0,i.__)("Filters","jcore-dynamic-archive"),icon:V?(0,d.jsx)(C.Spinner,{size:5}):m,children:!V&&(0,d.jsxs)(d.Fragment,{children:[z.length>0&&(0,d.jsx)("p",{children:"Filters to show"}),0===z.length&&(0,d.jsx)("p",{children:"No filters available for selected post type"}),(0,d.jsx)(C.__experimentalVStack,{children:z.map((e=>{var t;return(0,d.jsxs)(C.FlexItem,{className:"jcore-taxonomy-item",children:[(0,d.jsx)(C.CheckboxControl,{label:(0,i.__)(e.label,"jcore-dynamic-archive"),checked:P.includes(e.value),onChange:t=>n({taxonomies:P.includes(e.value)?P.filter((t=>t!==e.value)):[...P,e.value]}),__nextHasNoMarginBottom:!0}),P.includes(e.value)&&(0,d.jsxs)(d.Fragment,{children:[e.hierarchical&&(0,d.jsx)(C.ToggleControl,{label:(0,i.__)("Hierarchical filter","jcore-dynamic-archive"),help:(0,i.__)("If enabled, child categories will be hidden until parent category is selected","jcore-dynamic-archive"),checked:null!==(t=k[e.value])&&void 0!==t&&t,onChange:t=>n({hierarchicalFilter:O(O({},k),{},{[e.value]:t})}),__nextHasNoMarginBottom:!0}),(0,d.jsx)(C.SelectControl,{label:k[e.value]?(0,i.__)("Filter type (Parent categories)","jcore-dynamic-archive"):(0,i.__)("Filter type","jcore-dynamic-archive"),value:j[e.value],options:G,onChange:t=>{n({filterTypes:O(O({},j),{},{[e.value]:t})})},__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),k[e.value]&&(0,d.jsx)(C.SelectControl,{label:(0,i.__)("Filter type (Child categories)","jcore-dynamic-archive"),value:w[e.value],options:G,onChange:t=>{n({filterTypesChild:O(O({},w),{},{[e.value]:t})})},__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0}),(0,d.jsx)(F,{taxonomySlug:e.value,onChange:t=>n({forcedCategories:O(O({},S),{},{[e.value]:t})}),value:S[e.value]})]})]},e.id)}))})]})})]}),(0,d.jsx)("div",O(O({},(0,l.useBlockProps)()),{},{children:(0,d.jsx)(v(),{block:"jcore/dynamic-archive",attributes:t,httpMethod:"POST"})}))]})},save:()=>null})},833:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(736)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},736:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,a,i=null;function s(...e){if(!s.enabled)return;const r=s,o=Number(new Date),a=o-(n||o);r.diff=a,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";i++;const a=t.formatters[o];if("function"==typeof a){const t=e[i];n=a.call(r,t),e.splice(i,1),i--}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e)}return s.namespace=e,s.useColors=t.useColors(),s.color=t.selectColor(e),s.extend=r,s.destroy=t.destroy,Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(o!==t.namespaces&&(o=t.namespaces,a=t.enabled(e)),a),set:e=>{i=e}}),"function"==typeof t.init&&t.init(s),s}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(585),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},585:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,a=7*o;function i(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,s){s=s||{};var c,l,u=typeof e;if("string"===u&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(i){var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"weeks":case"week":case"w":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}(e);if("number"===u&&isFinite(e))return s.long?(c=e,(l=Math.abs(c))>=o?i(c,l,o,"day"):l>=r?i(c,l,r,"hour"):l>=n?i(c,l,n,"minute"):l>=t?i(c,l,t,"second"):c+" ms"):function(e){var a=Math.abs(e);return a>=o?Math.round(e/o)+"d":a>=r?Math.round(e/r)+"h":a>=n?Math.round(e/n)+"m":a>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={818:0,854:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkdynamic_archive=self.webpackChunkdynamic_archive||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[854],(()=>r(954)));o=r.O(o)})();