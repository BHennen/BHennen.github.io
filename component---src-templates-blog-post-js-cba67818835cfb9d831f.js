(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),l=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),l=r("8OQS"),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r("q1tI"),p=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),s=f(t),d=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(d,u({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),l=r("A2+M"),c=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","BHennen/BHennen.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","Comment"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),t.current.appendChild(e)}),[]),o.a.createElement("section",{ref:t})},s=r("Bl7J"),u=r("vrFN");t.default=function(e){var t,r=e.data,n=e.location,i=r.mdx,p=(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=r.previous,d=r.next;return o.a.createElement(s.a,{location:n,title:p},o.a.createElement(u.a,{title:i.frontmatter.title,description:i.frontmatter.description||i.excerpt}),o.a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("h1",{itemProp:"headline"},i.frontmatter.title),o.a.createElement("p",null,i.frontmatter.date)),o.a.createElement(l.MDXRenderer,null,i.body),o.a.createElement("footer",null),o.a.createElement(c,null)),o.a.createElement("nav",{className:"blog-post-nav"},o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,f&&o.a.createElement(a.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),o.a.createElement("li",null,d&&o.a.createElement(a.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cba67818835cfb9d831f.js.map