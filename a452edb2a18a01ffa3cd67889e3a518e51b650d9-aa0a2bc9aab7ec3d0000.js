(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Bl7J:function(t,e,n){"use strict";var r=n("rePB"),a=n("q1tI"),i=n.n(a),o=n("LbRr"),s=n("7ljp"),c=(n("QFcT"),function(t){var e=Object(a.useRef)(),n=Object(a.useState)(t.offsetAngle),r=n[0],o=n[1],s=Object(a.useState)(.05),c=s[0],l=s[1],u=Object(a.useState)(.001),p=u[0];u[1];function d(t,e){return[t*Math.cos(e),t*Math.sin(e)]}return Object(a.useEffect)((function(){var t=.5*(1+Math.sqrt(5));function n(e){var n=e.canvas.width,a=e.canvas.height,i=function(t,e){return{x:t/2,y:e/2}}(n,a),o=i.x,s=i.y;e.beginPath(),e.moveTo(o,s);for(var l=function(t,e){var n=Math.max(Math.abs(e.left-t.x),Math.abs(e.right-t.x)),r=Math.max(Math.abs(e.top-t.y),Math.abs(e.bottom-t.y));return Math.hypot(n,r)}(i,{left:0,top:0,right:n,bottom:a}),u=0,h=0;h<l;){var f=d(h=p*Math.pow(t,u),u+r);o+=f[0],s+=f[1],e.lineTo(o,s),u+=c}e.lineWidth=2,e.stroke()}var a=e.current,i=a.getContext("2d"),o=window.matchMedia("(resolution: "+window.devicePixelRatio+"dppx)"),s=function(){var t=window.devicePixelRatio,e=getComputedStyle(a).getPropertyValue("width").slice(0,-2),r=getComputedStyle(a).getPropertyValue("width").slice(0,-2);a.width=e*t,a.height=r*t,n(i)};return s(),o.addEventListener("change",s),n(i),function(){o.removeEventListener("change",s)}}),[r,c,p]),i.a.createElement("div",null,i.a.createElement("span",{style:{width:"50%",display:"inline-block"}},"Step Size:",i.a.createElement("input",{label:"Step Size",onChange:function(t){return l(Number(t.target.value))},type:"range",min:"0.01",max:"1",step:"0.01",value:c})),i.a.createElement("span",{style:{width:"50%",display:"inline-block"}},"Offset Angle:",i.a.createElement("input",{label:"Offset Angle",onChange:function(t){return o(Number(t.target.value))},type:"range",min:"0",max:2*Math.PI,step:"0.05",value:r})),i.a.createElement("canvas",{ref:e,style:{width:"100%",display:"inline-block"}}))}),l=n("Wbzz"),u=function(t){var e=Object(l.useStaticQuery)("835336608").site.siteMetadata,n=e.author,r=e.copyright,a=n.name,o=(new Date).getFullYear();return i.a.createElement("div",null,"© ",r,o>r?" - "+o:""," ",a)},p=n("wXVo"),d=n("zLVn"),h=n("dI71"),f=n("i8i4"),m=n.n(f),E=!1,b=i.a.createContext(null),v=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var a,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(h.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,a=this.props.nodeRef?[r]:[m.a.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!t&&!n||E?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,o),e.onTransitionEnd(c,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:m.a.findDOMNode(this);e&&!E?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:m.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(d.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(b.Provider,{value:null},"function"==typeof n?n(t,r):i.a.cloneElement(i.a.Children.only(n),r))},e}(i.a.Component);function g(){}v.contextType=b,v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},v.UNMOUNTED="unmounted",v.EXITED="exited",v.ENTERING="entering",v.ENTERED="entered",v.EXITING="exiting";var x=v;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S=function(t){var e=Object(p.a)(10),n={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},r={transition:"all 1s linear",position:"fixed",bottom:"1.2rem",right:"1.2rem",opacity:0,visibility:e?"visible":"hidden"},a={width:"2.5rem",height:"2.5rem"};return i.a.createElement(x,{in:e,timeout:500},(function(t){return i.a.createElement("a",{id:"ReturnTop",href:"#top-of-page",style:y(y({},r),n[t])},i.a.createElement("span",{className:"screen-reader-text"},"Return to top of page."),i.a.createElement("svg",{viewBox:"0 0 54 54",style:y({},a)},i.a.createElement("g",null,i.a.createElement("path",{d:"M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27\r S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"}),i.a.createElement("path",{d:"M28.884,17.355c-0.307-0.53-0.855-0.848-1.469-0.848s-1.162,0.317-1.469,0.848l-8.719,15.102\r c-0.307,0.531-0.306,1.165,0,1.695C17.534,34.684,18.083,35,18.696,35h17.438c0.613,0,1.162-0.316,1.469-0.848\r c0.306-0.53,0.307-1.164,0-1.695L28.884,17.355z M19.224,33l8.191-14.188L35.606,33H19.224z"}))))}))},w=function(t){var e=t.className.substring("language-".length).toUpperCase();return i.a.createElement("pre",t,i.a.createElement("div",{className:"language"},e),i.a.createElement("hr",null),t.children)},j=function(t){if(!t.children)return i.a.createElement("code",t);var e=[[]],n=0;return function t(r){var a;if("string"==typeof r)r.split("\n").forEach((function(t,r){r>0&&(e.push([]),n++),e[n].push(t)}));else if("string"==typeof(null===(a=r.props)||void 0===a?void 0:a.children))r.props.children.search("\n")>=0?t(r.props.children):e[n].push(r);else{var i=r.forEach?r:r.props.children;i.forEach||(i=[i]),i.forEach((function(e){t(e)}))}}(t.children),e.forEach((function(t,n){e[n]=i.a.createElement("span",{className:"line",key:n},t,i.a.createElement("br",null))})),i.a.createElement("code",t,e)};function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={GoldenSpiral:c};e.a=function(t){var e=t.location,n=(t.title,t.children),r="/"===e.pathname;return i.a.createElement("div",{id:"top-of-page",className:"global-wrapper","data-is-root-path":r},i.a.createElement(o.a,null),i.a.createElement("main",null,i.a.createElement(s.MDXProvider,{components:M({pre:w,code:j},k)},n)),i.a.createElement("footer",null,i.a.createElement(u,null),i.a.createElement(S,null)))}},LbRr:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("wXVo");e.a=function(t){var e=Object(o.a)(10);return a.a.createElement("header",{"data-active":e},a.a.createElement("nav",null,a.a.createElement("h1",null,a.a.createElement(i.Link,{to:"/"},"Bryce Hennen"))))}},QFcT:function(t,e,n){var r=n("I+eb"),a=Math.hypot,i=Math.abs,o=Math.sqrt;r({target:"Math",stat:!0,forced:!!a&&a(1/0,NaN)!==1/0},{hypot:function(t,e){for(var n,r,a=0,s=0,c=arguments.length,l=0;s<c;)l<(n=i(arguments[s++]))?(a=a*(r=l/n)*r+1,l=n):a+=n>0?(r=n/l)*r:n;return l===1/0?1/0:l*o(a)}})},wXVo:function(t,e,n){"use strict";var r=n("q1tI");e.a=function(t){var e=Object(r.useState)(!1),n=e[0],a=e[1];return Object(r.useEffect)((function(){var e=function(){window.scrollY>t!==n&&a(!n)};return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[n,t]),n}}}]);
//# sourceMappingURL=a452edb2a18a01ffa3cd67889e3a518e51b650d9-aa0a2bc9aab7ec3d0000.js.map