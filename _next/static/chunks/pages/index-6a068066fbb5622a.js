(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(4186)}])},1551:function(d,c,a){"use strict";function e(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||g(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(a,c){if(a){if("string"==typeof a)return e(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return e(a,c)}}c.default=void 0;var b,h=(b=a(7294))&&b.__esModule?b:{default:b},i=a(1003),j=a(880),k=a(9246),l={};function m(a,c,d,b){if(a&&i.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;l[c+"%"+d+(e?"%"+e:"")]=!0}}c.default=function(b){var c,r=!1!==b.prefetch,a=j.useRouter(),o=h.default.useMemo(function(){var c=f(i.resolveHref(a,b.href,!0),2),d=c[0],e=c[1];return{href:d,as:b.as?i.resolveHref(a,b.as):e||d}},[a,b.href,b.as]),s=o.href,e=o.as,d=b.children,y=b.replace,z=b.shallow,A=b.scroll,g=b.locale;"string"==typeof d&&(d=h.default.createElement("a",null,d));var t=(c=h.default.Children.only(d))&&"object"==typeof c&&c.ref,p=f(k.useIntersection({rootMargin:"200px"}),2),u=p[0],v=p[1],w=h.default.useCallback(function(a){u(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,u]);h.default.useEffect(function(){var c=v&&r&&i.isLocalURL(s),b=void 0!==g?g:a&&a.locale,d=l[s+"%"+e+(b?"%"+b:"")];c&&!d&&m(a,s,e,{locale:b})},[e,s,v,g,r,a]);var n={ref:w,onClick:function(f){var d,j,h,k,l,m,n,o,b,p;c.props&&"function"==typeof c.props.onClick&&c.props.onClick(f),f.defaultPrevented||(d=f,j=a,h=s,k=e,l=y,m=z,n=A,o=g,"A"===d.currentTarget.nodeName.toUpperCase()&&((p=(b=d).currentTarget.target)&&"_self"!==p||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||b.nativeEvent&&2===b.nativeEvent.which||!i.isLocalURL(h))||(d.preventDefault(),j[l?"replace":"push"](h,k,{shallow:m,locale:o,scroll:n})))}};if(n.onMouseEnter=function(b){c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(b),i.isLocalURL(s)&&m(a,s,e,{priority:!0})},b.passHref||"a"===c.type&&!("href"in c.props)){var q=void 0!==g?g:a&&a.locale,x=a&&a.isLocaleDomain&&i.getDomainLocale(e,q,a&&a.locales,a&&a.domainLocales);n.href=x||i.addBasePath(i.addLocale(e,q,a&&a.defaultLocale))}return h.default.cloneElement(c,n)}},9246:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||f(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var b=a.rootRef,k=a.rootMargin,l=a.disabled||!i,o=g.useRef(),d=e(g.useState(!1),2),c=d[0],p=d[1],f=e(g.useState(b?b.current:null),2),m=f[0],q=f[1],n=g.useCallback(function(a){o.current&&(o.current(),o.current=void 0),!l&&!c&&a&&a.tagName&&(o.current=j(a,function(a){return a&&p(a)},{root:m,rootMargin:k}))},[l,m,k,c]);return g.useEffect(function(){if(!i&&!c){var a=h.requestIdleCallback(function(){return p(!0)});return function(){return h.cancelIdleCallback(a)}}},[c]),g.useEffect(function(){b&&q(b.current)},[b]),[n,c]};var g=b(7294),h=b(4686),i="undefined"!=typeof IntersectionObserver;function j(b,c,d){var a=m(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),k.delete(g);var a=l.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&l.splice(a,1)}}}var k=new Map,l=[];function m(c){var a,b={root:c.root||null,margin:c.rootMargin||""},d=l.find(function(a){return a.root===b.root&&a.margin===b.margin});if(d?a=k.get(d):(a=k.get(b),l.push(b)),a)return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},c);return k.set(b,a={id:b,observer:f,elements:e}),a}},4186:function(c,b,a){"use strict";a.r(b);var d=a(5893);a(7294);var e=a(9008),f=a(1664),g=a(5287);b.default=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.default,{children:(0,d.jsx)("title",{children:"Artem Attvud | CV"})}),(0,d.jsxs)("main",{className:"flex flex-col items-center",children:[(0,d.jsxs)(g.Y9,{variant:"002",className:"mx-4",children:[(0,d.jsx)("h1",{className:"hero-title-xl mb-4 mt-0 font-bold lg:mb-10",children:"Artem Attvud"}),(0,d.jsx)("h2",{className:"h2-xl mt-4 lg:mt-8",children:"Middle Front-End Developer 🌈"}),(0,d.jsx)("h3",{className:"h3-xl my-4 lg:my-8",children:"Lead UX/UI Designer 👀"}),(0,d.jsxs)("div",{className:"mt-4 flex gap-4 print:hidden",children:[(0,d.jsx)(f.default,{href:"/files/docs/Artem_Attvud_CV.pdf",children:(0,d.jsx)(g.zx,{variant:"contrast",size:"lg",children:"Download CV"})}),(0,d.jsx)(f.default,{href:"/contacts",children:(0,d.jsx)(g.zx,{variant:"contrast-outlined",size:"lg",children:"Contacts"})})]})]}),(0,d.jsxs)("article",{className:"text-4lg w-full max-w-6xl px-4",children:[(0,d.jsx)("h2",{children:"Personal information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Creative pseudonym: Artem Attvud."}),(0,d.jsx)("li",{children:"Date of birth: 29th May 1992."}),(0,d.jsx)("li",{children:"Nationality: Ukrainian."}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["2019 - 2022."," "]}),"Working as a Middle Front-End Developer."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["2010 - 2019."," "]})," ","Working as a UX/UI Designer & Team Lead."]})]}),(0,d.jsx)("h2",{children:"Languages"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"English - B1"}),(0,d.jsx)("li",{children:"Ukrainian - native"}),(0,d.jsx)("li",{children:"Russian - native"})]}),(0,d.jsxs)("h2",{className:"flex flex-wrap items-center justify-between gap-4",children:["Front-end Developer",(0,d.jsxs)(g.Ct,{variant:"green",size:"lg-md",children:[(0,d.jsx)(g.JO,{name:"done_all"}),"3 years of experience"]})]}),(0,d.jsx)("h3",{children:"Qualifications & skills"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["JavaScript:"," "]}),"ES6, Babel, TypeScript, Webpack."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["Frameworks:"," "]}),"React (hooks), Redux (Redux toolkit, Thunk), NextJS, GatsbyJS."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["Task Runners:"," "]}),"Webpack."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["Testing:"," "]}),"Jest, react-testing-library."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["Styling:"," "]}),"CSS5, SCSS, SASS, CSS Modules, Styled Components, Emotion, Tailwind CSS, Styled JSX, Material UI, Ant Design."]}),(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{className:"text-purple-02-light dark:text-purple-02-dark",children:["Development methodologies:"," "]}),"Scrum."]}),(0,d.jsx)("li",{children:"Axios, Fetch, REST API, GraphQL."}),(0,d.jsx)("li",{children:"Git (CLI)."}),(0,d.jsx)("li",{children:"Problem-solving skills and open to feedback."})]}),(0,d.jsx)("h3",{children:"Achievements"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Several times I created UI libraries from scratch."}),(0,d.jsx)("li",{children:"With the team, I created a UI for seven services that are successfully used within our client's company to this day."})]}),(0,d.jsx)("h3",{children:"Experience"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Starting projects from scratch and providing lasting support, developing new feature modules for multiple commercial products both for end-users and internal company use."}),(0,d.jsx)("li",{children:"Creating libraries of UI components using TypeScript, Unit testing, and screenshot testing for multiple reuses in customer products."})]}),(0,d.jsxs)("h2",{className:"flex flex-wrap items-center justify-between gap-4",children:["Lead UX/UI Designer",(0,d.jsxs)(g.Ct,{variant:"green",size:"lg-md",children:[(0,d.jsx)(g.JO,{name:"done_all"}),"9 years of experience"]})]}),(0,d.jsx)("h3",{children:"Qualifications & skills"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Creation and support of the most complex adaptive design systems."}),(0,d.jsx)("li",{children:"Validated experience and knowledge in UX/UI analysis and design for complex web applications and enterprise solutions."}),(0,d.jsx)("li",{children:"User experience research."}),(0,d.jsx)("li",{children:"Conversion optimization."}),(0,d.jsx)("li",{children:"Interaction with a team of designers & developers. Strict quality control."}),(0,d.jsx)("li",{children:"Excellent knowledge of wireframing and prototyping tools (such as Figma & Sketch)."}),(0,d.jsx)("li",{children:"Experience with Atlassian JIRA, Confluence."}),(0,d.jsx)("li",{children:"Excellent knowledge in modern design patterns."})]}),(0,d.jsx)("h3",{children:"Achievements"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["Developed a builder of design systems that can imitate any approach to create user interfaces (iOS, Android, etc.) or serve as a basis for creating a unique, maximally flexible design system. List of main features:",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Syncing with my own React components library."}),(0,d.jsx)("li",{children:"Optimization of work on routine tasks (UI Kit with fully customizable components for any project, automatic export of all icons in a project, all kinds of presets, etc.). As a result, the time spent working on UX/UI is less than 400% (!). The more complex the project, the more the optimization feels."}),(0,d.jsx)("li",{children:"Automation of communication with developers. A repository on GitHub is automatically created for each project. All project data and files are stored in it. No one else needs to search in messengers for links to design, sources, files with project icons, etc. Everything in one place and available at any time."}),(0,d.jsx)("li",{children:"Semi-automatic branding. Automatic generation of identity guidelines."}),(0,d.jsx)("li",{children:"Significant simplification of further project support. Customers and programmers can request design changes with a few clicks. History of changes is kept. As soon as I finish work on the next edit or innovation, all project participants receive a notification by mail."})]})]}),(0,d.jsx)("li",{children:"Created UX/UI for niche leaders. Created UX/UI for products that later became niche leaders."}),(0,d.jsx)("li",{children:"I have supported and continue to support 2 high-load projects."}),(0,d.jsx)("li",{children:"Learned to navigate perfectly in any approach to building user interfaces for the following platforms: iOS, Android, MacOS, Windows."}),(0,d.jsx)("li",{children:"Created projects from the very beginning to a fully working product. UX/UI (with responsive design system integration). Front-End (React + own component library with integrated design system and documentation). Back-End (NextJS). I don't develop pet projects. Only business projects - Web and Mobile applications. This experience is observed in the vast majority of specialists."})]}),(0,d.jsx)("h3",{children:"Experience"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Worked on freelance exchanges. Worked in a Belarusian web studio as a Middle UX/UI Designer."}),(0,d.jsxs)("li",{children:["I have developed my design system. Deepened knowledge in the field of user behavior analysis and conversion optimization for e-commerce sites. Began to be responsible for quality control of Front-end development on several projects.",(0,d.jsx)("p",{children:"Began to specialize in the most complex projects. Developed UX/UI for mapping services in Ukraine and Belarus. Perfectly mastered Google and Apple Guidelines. I have added a lot of templates to my design system for mobile app design."})]}),(0,d.jsx)("li",{children:"Working as a Team Lead in a team that was developing a design system for several services. Main responsibilities: UX/UI, component quality control, code review, minimizing the time spent on development."})]}),(0,d.jsx)("h2",{children:"Recommendations"}),(0,d.jsxs)("p",{children:["My recommendations are available on my"," ",(0,d.jsx)("a",{href:"https://www.linkedin.com/in/Attvud",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn profile page"}),"."]})]})]})]})}},1664:function(a,c,b){a.exports=b(1551)}},function(a){a.O(0,[287,774,888,179],function(){return a(a.s=5301)}),_N_E=a.O()}])