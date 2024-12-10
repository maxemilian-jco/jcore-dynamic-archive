(()=>{var e,t={636:(e,t,n)=>{"use strict";const r=window.wp.blocks;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t,n){return(t=function(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=window.wp.blockEditor,i=window.wp.i18n,c=window.wp.hooks,l=window.wp.element,u=window.wp.coreData,d=window.wp.data,p=window.wp.serverSideRender;var m=n.n(p);const f=window.wp.components,g=window.wp.primitives,h=window.ReactJSXRuntime,y=(0,h.jsxs)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[(0,h.jsx)(g.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,h.jsx)(g.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"})]}),C=(0,h.jsx)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(g.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),v=(0,h.jsx)(g.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)(g.Path,{d:"M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"})});var x=n(833);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F({taxonomySlug:e,onChange:t,value:n}){const[r,o]=(0,l.useState)([]),[s,a]=(0,l.useState)({}),{taxonomy:c,loading:d}=function(e){const{record:t,isResolving:n}=(0,u.useEntityRecord)("root","taxonomy",e);return{taxonomy:t,loading:n}}(e),{taxonomyRecords:p,loading:m}=function(e,t={}){const n=(r=t,b(b({},{per_page:100}),r));var r;const{records:o,isResolving:s}=(0,u.useEntityRecords)("taxonomy",e,n);return{taxonomyRecords:o,loading:s}}(e,{per_page:-1});return(0,l.useEffect)((()=>{if(p){const e=p.map((e=>e.id)),t={};p.forEach((e=>{t[e.id]={slug:e.slug,name:e.name}})),o(e),a(t)}}),[p]),(0,h.jsxs)(f.Flex,{children:[(0,h.jsx)(f.FlexBlock,{children:(0,h.jsx)(f.FormTokenField,{__experimentalExpandOnFocus:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,displayTransform:e=>s[e]?s[e].name:e,saveTransform:e=>e+"",suggestions:r,value:n,onChange:t,label:`${(0,i.sprintf)((0,i._x)("Show only items with selected: %s","Taxonomy","jcore-dynamic-archive"),c.name)}`})}),(d||m)&&(0,h.jsx)(f.FlexItem,{children:(0,h.jsx)(f.Spinner,{})})]})}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.n(x)()("latest-posts:Edit");const O=JSON.parse('{"UU":"jcore/latest-posts"}');(0,r.registerBlockType)(O.UU,{edit:function({attributes:e,setAttributes:t}){const{postTypes:n,automatic:r,columns:o,postsPerPage:s,order:p,orderBy:g,selectedTaxonomies:x,sticky:w,expanded:b}=e,{postTypes:j,loading:O}=function(e={per_page:100}){const{isResolving:t,records:n}=(0,u.useEntityRecords)("root","postType",e),[r,o]=(0,l.useState)([]),s=(0,c.applyFilters)("dynamicArchive.forbiddenPostTypes",["attachment"]);return(0,l.useEffect)((()=>{n&&o(n.filter((e=>e.viewable&&!s.includes(e.slug))))}),[n]),{postTypes:r,loading:t}}(),S=(0,c.applyFilters)("jcore.latestPosts.showPostTypes",j),[P,k]=(0,l.useState)(!1),E=(0,d.useSelect)((e=>{if(!n||0===n.length)return[];k(!0);const t=[];for(const r of n){const n=e(u.store).getTaxonomies({per_page:-1,type:r});n&&t.push(...n)}return t?(k(!1),(0,c.applyFilters)("jcore.latestPosts.taxonomies",t,n)):(k(!1),[])}),[n]),B=(0,c.applyFilters)("jcore.latestPosts.maxSelected",-1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a.InspectorControls,{children:[(0,h.jsxs)(f.PanelBody,{title:(0,i.__)("Settings","jcore-dynamic-archive"),icon:O?(0,h.jsx)(f.Spinner,{size:5}):y,initialOpen:b,children:[(0,h.jsx)(f.__experimentalSpacer,{marginBottom:6,children:(0,h.jsxs)(f.__experimentalVStack,{children:[S.map((e=>(0,h.jsx)(f.CheckboxControl,{disabled:!n.includes(e.slug)&&B>0&&n.length>=B,label:e.name,checked:n.includes(e.slug),onChange:()=>(e=>{const r=n.indexOf(e);t(-1===r?{postTypes:[...n,e]}:{postTypes:n.toSpliced(r,1)})})(e.slug),__nextHasNoMarginBottom:!0},e.slug))),n.length>=B&&(0,h.jsx)(f.__experimentalText,{children:sprintf((0,i.__)("You have selected the maximum amount of post types. (%s)","jcore"),B)})]})}),(0,h.jsx)(f.__experimentalSpacer,{marginBottom:6,children:(0,h.jsxs)(f.__experimentalVStack,{children:[P&&(0,h.jsxs)(f.__experimentalHStack,{alignment:"left",children:[(0,h.jsx)(f.Spinner,{}),(0,h.jsx)(f.__experimentalText,{children:(0,i.__)("Loading taxonomies...","dynamic-archive")})]}),!P&&(0,h.jsx)(f.QueryControls,{numberOfItems:s,onNumberOfItemsChange:e=>t({postsPerPage:e}),maxItems:(0,c.applyFilters)("jcore.latestPosts.maxItems",25),minItems:1,order:p,orderBy:g,onOrderChange:e=>t({order:e}),onOrderByChange:e=>t({orderBy:e}),onCategoryChange:e=>t({category:e.id})}),n&&n.includes("post")&&(0,h.jsx)(f.SelectControl,{label:(0,i.__)("Sticky post behavior","jcore-dynamic-archive"),options:[{label:(0,i.__)("Include","jcore-dynamic-archive"),value:"include"},{label:(0,i.__)("Exclude","jcore-dynamic-archive"),value:"exclude"},{label:(0,i.__)("Only","jcore-dynamic-archive"),value:"only"}],onChange:e=>t({sticky:e}),value:w,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})]})})]}),(0,h.jsx)(f.PanelBody,{title:(0,i.__)("Layout","jcore"),icon:C,initialOpen:b,children:(0,h.jsx)(f.RangeControl,{label:(0,i.__)("Columns","dynamic-archive"),value:o||3,onChange:e=>{isNaN(parseInt(e))||t({columns:parseInt(e)})},min:1,max:5,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0})}),(0,h.jsx)(f.PanelBody,{title:(0,i.__)("Filters","jcore-dynamic-archive"),icon:v,initialOpen:b,children:(0,h.jsx)(f.__experimentalSpacer,{marginBottom:6,children:(0,h.jsx)(f.__experimentalVStack,{children:!P&&E.map((e=>{var n;return(0,h.jsx)(F,{taxonomySlug:e.slug,onChange:n=>t({selectedTaxonomies:_(_({},x),{},{[e.slug]:n})}),value:null!==(n=x[e.slug])&&void 0!==n?n:[]})}))})})})]}),(0,h.jsx)("div",_(_({},(0,a.useBlockProps)()),{},{children:(0,h.jsx)(m(),{block:"jcore/latest-posts",attributes:e,httpMethod:"POST"})}))]})},save:()=>null,variations:[]})},833:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(736)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},736:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,s,a=null;function i(...e){if(!i.enabled)return;const r=i,o=Number(new Date),s=o-(n||o);r.diff=s,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const s=t.formatters[o];if("function"==typeof s){const t=e[a];n=s.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e),(r.log||t.log).apply(r,e)}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=r,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,s=t.enabled(e)),s),set:e=>{a=e}}),"function"==typeof t.init&&t.init(i),i}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(585),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},585:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,s=7*o;function a(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,i){i=i||{};var c,l,u=typeof e;if("string"===u&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(a){var i=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"weeks":case"week":case"w":return i*s;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}(e);if("number"===u&&isFinite(e))return i.long?(c=e,(l=Math.abs(c))>=o?a(c,l,o,"day"):l>=r?a(c,l,r,"hour"):l>=n?a(c,l,n,"minute"):l>=t?a(c,l,t,"second"):c+" ms"):function(e){var s=Math.abs(e);return s>=o?Math.round(e/o)+"d":s>=r?Math.round(e/r)+"h":s>=n?Math.round(e/n)+"m":s>=t?Math.round(e/t)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,o,s)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={425:0,701:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,a=n[0],i=n[1],c=n[2],l=0;if(a.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(n);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self.webpackChunkdynamic_archive=self.webpackChunkdynamic_archive||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[701],(()=>r(636)));o=r.O(o)})();