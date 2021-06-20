(self.webpackChunkname=self.webpackChunkname||[]).push([[153],{2837:function(e,t,a){"use strict";var n=a(8580);t.__esModule=!0,t.default=void 0;var r=n(a(5666)),l=n(a(3793)),i=n(a(4176)),c=n(a(7294)),o=n(a(5697)),s=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,(0,i.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);s.propTypes={children:o.default.func.isRequired};var m=s;t.default=m},7441:function(e,t,a){"use strict";var n=a(8580)(a(2837));t.L=n.default},6151:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),r=a(1660),l=a(7441);function i(e){return n.createElement(l.L,null,(function(t){var a=t.theme,l=t.toggleTheme;return n.createElement(r.Z,{className:e.className,icon:"invert_colors",onClick:function(e){return l("light"===a?"dark":"light")}})}))}function c(e){return n.createElement("div",{className:"flex justify-center h-12 relative select-none"},n.createElement("div",{className:"flex justify-center text-hight-contrast w-full fixed z-20 bg-hight-contrast-reverse",style:{boxShadow:"inset 0px -1px 0px var(--separator-non-opaque)",backdropFilter:"saturate(180%) blur(16px)",backgroundColor:"rgb(var(--background-primary-rgb-inner)/90%)"}},n.createElement("nav",{className:"container flex items-center max-w-screen-lg h-12 "+e.className},n.createElement("div",{className:"flex justify-center md:justify-between h-12 items-center w-full large-subhead"},n.createElement("a",{href:"/",className:"flex h-full items-center whitespace-nowrap transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-hight-contrast"},n.createElement("path",{d:"M13.3603 2L20.7919 14.8719L16.939 22L13.6065 16.2281L15.4747 12.7715L11.7748 13.0555L9.50735 9.12808L13.3603 2ZM11.9624 19.2519L7.98122 11.953L4 19.2519H11.9624Z"})),n.createElement("span",{className:"ml-3"},"Artem Attvud")),n.createElement("a",{href:"/resume",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Resume"),n.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Recommendations"),n.createElement("a",{href:"/portfolio",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Portfolio"),n.createElement("a",{href:"/contacts",className:"hidden md:flex h-full items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Contacts"),n.createElement("div",{className:"hidden md:flex transition opacity-80 hover:opacity-100"},n.createElement(i,{className:"fill-current text-hight-contrast"}))))))}},2366:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(6141),l=a(9),i=l.ZP.div.withConfig({displayName:"styles__Row",componentId:"glgff0-0"})(["position:relative;display:flex;align-items:center;justify-content:center;user-select:none;overflow:hidden;width:100%;color:var(--text-primary);& i{display:flex;align-items:center;justify-content:center;&.primary{color:var(--tint-foreground-blue);}& div{position:absolute;cursor:pointer;}}& .left-part{position:absolute;left:0;display:flex;align-items:center;height:100%;}& a.left-part{width:100%;text-decoration:none;color:var(--text-primary);}& input.left-part{width:100%;color:var(--text-primary);background-color:var(--fill-primary);background-clip:padding-box;border:none;border-radius:",";transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;&::placeholder{color:var(--text-tertiary);}&:invalid{box-shadow:none;}}& .center-part{position:absolute;display:flex;align-items:center;height:100%;color:var(--text-primary);font-weight:bold;text-align:center;text-decoration:none;&:hover{color:var(--text-primary);text-decoration:none;}}& .right-part{position:absolute;right:0;display:flex;align-items:center;height:100%;}"],r.XX.borderRadius.primary);function c(e){return n.createElement(i,{id:e.id,className:e.className,as:e.as},e.children)}function o(){return n.createElement(c,{className:"element-large"},n.createElement("a",{href:"/",className:"center-part"},"Меню"))}function s(){return n.createElement(c,{className:"element-large"},n.createElement("span",{className:"center-part"},"Menu"))}l.ZP.div.withConfig({displayName:"styles__ElementSection",componentId:"sc-9ff0pf-0"})(["margin-top:24px;& .section-title{color:var(--gray-01);text-transform:uppercase;}& .section-caption{color:var(--gray-01);}"]);var m=l.ZP.div.withConfig({displayName:"styles__ElementList",componentId:"sc-9ff0pf-1"})(['background-color:var(--background-primary);& a{color:var(--text-primary);&:hover{color:var(--text-primary);}}div:not(:last-child):after{position:absolute;content:"";display:flex;width:100%;height:1px;background-color:var(--separator-non-opaque);bottom:0;margin-left:32px;cursor:pointer;}']);function u(e){var t=e.children;e.title,e.description;return n.createElement("div",{className:"mt-6"},n.createElement(m,{className:e.listClassName,style:{boxShadow:"inset 0 1px 0 var(--separator-non-opaque),inset 0 -1px 0 var(--separator-non-opaque)"}},t))}function h(e){return n.createElement(n.Fragment,null,n.createElement(u,null,n.createElement(c,{className:"element-medium"},n.createElement("a",{href:"/",className:"left-part px-16"},"..."))))}function f(){return n.createElement(u,null,n.createElement(c,{className:"element-medium"},n.createElement("a",{href:"/",className:"left-part px-4"},"My way")),n.createElement(c,{className:"element-medium"},n.createElement("a",{href:"/resume",className:"left-part px-4"},"Resume")),n.createElement(c,{className:"element-medium"},n.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank",className:"left-part px-4"},"Recommendations")),n.createElement(c,{className:"element-medium"},n.createElement("a",{href:"/portfolio",className:"left-part px-4"},"Portfolio")))}var d=a(1660);function p(){var e,t=(0,n.useState)("default"),a=t[0],r=t[1],l=(0,n.useState)("default"),i=l[0],c=l[1],m=(0,n.useState)("default"),u=(m[0],m[1]);return(0,n.useEffect)((function(){e=document.getElementById("main-sidebar-content")})),n.createElement("aside",{className:"flex md:hidden fixed flex-col z-30",style:{maxWidth:"360px"}},n.createElement("div",{className:"fixed bg-background-secondary w-full h-screen invisible",style:{boxShadow:"1px 0px 0px var(--separator-non-opaque)",maxWidth:"360px"},id:"main-sidebar-content"},n.createElement("header",{className:"bg-background-primary",style:{boxShadow:"inset 0px -1px 0px var(--separator-non-opaque)"}},function(e){switch(e){case"menu":return n.createElement(s,null);default:return n.createElement(o,null)}}(a)),function(e){switch(e){case"menu":return n.createElement(f,null);default:return n.createElement(h,null)}}(i)),n.createElement("footer",{className:"grid grid-flow-col grid-cols-3 h-14 w-full fixed bottom-0 bg-background-primary",style:{boxShadow:"inset 0px 1px 0px var(--separator-non-opaque)"}},n.createElement(n.Fragment,null,n.createElement("a",{className:"flex flex-col justify-center items-center",href:"/"},n.createElement(d.Z,{icon:"home",className:"fill-current text-hight-contrast"}),n.createElement("span",{className:"large-caption text-hight-contrast"},"Home")),n.createElement("a",{href:"/contacts",className:"flex flex-col justify-center items-center"},n.createElement(d.Z,{icon:"contact_support",className:"fill-current text-hight-contrast"}),n.createElement("span",{className:"large-caption text-hight-contrast"},"Contacts")),n.createElement("button",{className:"flex flex-col justify-center items-center focus:outline-none",onClick:function(t){!function(t){i!==t&&(r(t),c(t),u(t)),(i===t||e.classList.contains("invisible")||e.classList.contains("visible"))&&(e.classList.toggle("invisible"),e.classList.toggle("visible"))}("menu")}},n.createElement(d.Z,{icon:"more_horiz",className:"fill-current text-hight-contrast"}),n.createElement("span",{className:"large-caption text-hight-contrast"},"Menu")))))}},1735:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(9124),l=a(5221),i=a(3346),c=a(2366),o=a(6151);function s(e){var t=(0,r.Z)(e);return n.createElement(i.Z,{className:"flex-col"},n.createElement(l.Z,{pageData:t}),n.createElement(c.Z,null),n.createElement(o.Z,null),n.createElement("article",{className:"container mx-auto max-w-screen-lg mt-12"},n.createElement("h1",{className:"mb-0"},t.title),n.createElement("hr",null),n.createElement("ul",{className:"list-none"},n.createElement("li",null,"Email - ",n.createElement("a",{href:"mailto:w@res.pm"},"w@res.pm")),n.createElement("li",null,"Telegram -"," ",n.createElement("a",{href:"https://t.me/Attvud",target:"blank"},"t.me/Attvud")),n.createElement("li",null,"GitHub -"," ",n.createElement("a",{href:"https://github.com/Attvud",target:"blank"},"github.com/Attvud")),n.createElement("li",null,"Linkedin -"," ",n.createElement("a",{href:"https://www.linkedin.com/in/Attvud",target:"blank"},"linkedin.com/in/Attvud")))))}},4176:function(e){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-components-project-res-pm-pages-contacts-js-c73ceecdc655d3e5eb49.js.map