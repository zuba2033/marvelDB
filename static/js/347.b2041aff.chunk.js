"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[347],{3159:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",o=n(184),i=function(){return(0,o.jsxs)("div",{className:"appbanner",children:[(0,o.jsxs)("div",{className:"appbanner__block",children:[(0,o.jsx)("img",{src:r,alt:""}),(0,o.jsxs)("div",{className:"appbanner__text",children:["New comics every week! ",(0,o.jsx)("br",{}),"Stay tuned!"]})]}),(0,o.jsx)("div",{className:"appbanner__logo",children:(0,o.jsx)("img",{src:c,alt:""})})]})}},7341:function(t,e,n){var r=n(5671),c=n(3144),o=n(136),i=n(7277),a=n(2791),s=n(9613),u=n(184),l=function(t){(0,o.Z)(n,t);var e=(0,i.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={error:!1},t}return(0,c.Z)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{style:{color:"black",textAlign:"center"},children:"Something went wrong"}),";",(0,u.jsx)(s.Z,{})]}):this.props.children}}]),n}(a.Component);e.Z=l},9613:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",c=n(184),o=function(){return(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error-img"})}},1748:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(2791),c=n(3504),o=n(733),i=n(184),a=function(){var t=(0,o.j)(500,8),e=t.items,n=t.firstLoading,a=t.offset,s=t.listEnd,u=t.onRequest,l=t.onScroll,f=t.endOfPage,d=t.itemRefs,p=t.focusOnItem,m=t.setContent,h=t.process;(0,r.useEffect)((function(){u("Comics",a,!0)}),[]),(0,r.useEffect)((function(){f&&u("Comics",a)}),[f]),(0,r.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}}),[]);var b=s?{display:"none"}:{display:"block"},v=(0,r.useMemo)((function(){return m(h,(function(){return function(t){var e=t.map((function(t,e){var n={objectFit:"cover"};return t.thumbnail.includes("not_available")&&(n={objectFit:"unset"}),(0,i.jsx)("li",{className:"comicslist__item",tabIndex:0,ref:function(t){return d.current[e]=t},onClick:function(){p(e)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||p(e)},children:(0,i.jsxs)(c.rU,{to:"/comics/".concat(t.id),children:[(0,i.jsx)("img",{src:t.thumbnail,alt:t.title,style:n}),(0,i.jsx)("div",{className:"comicslist__item-title",children:t.title}),(0,i.jsx)("div",{className:"comicslist__item-price",children:t.price})]})},t.id)}));return(0,i.jsx)("ul",{className:"comicslist__list",children:e})}(e)}),n)}),[h]);return(0,i.jsxs)("div",{className:"comicslist",children:[v,(0,i.jsx)("button",{className:"button button__main button__long",style:b,disabled:"loading"===h,onClick:function(){return u("Comics",a)},children:(0,i.jsx)("div",{className:"inner",children:"loading"===h?"loading...":"load more"})})]})},s=n(3159),u=n(7341),l=n(4270),f=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.q,{children:[(0,i.jsx)("meta",{name:"description",content:"Comics page"}),(0,i.jsx)("title",{children:"Comics page"})]}),(0,i.jsx)(s.Z,{}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(a,{})})]})}},733:function(t,e,n){n.d(e,{j:function(){return l}});var r=n(2982),c=n(885),o=n(2791),i=n(4304),a=n(9613),s=n(3394),u=n(184),l=function(t,e){var n=(0,o.useState)([]),l=(0,c.Z)(n,2),f=l[0],d=l[1],p=(0,o.useState)(t),m=(0,c.Z)(p,2),h=m[0],b=m[1],v=(0,o.useState)(!1),g=(0,c.Z)(v,2),y=g[0],x=g[1],Z=(0,o.useState)(!1),w=(0,c.Z)(Z,2),j=w[0],k=w[1],C=(0,o.useState)(!0),_=(0,c.Z)(C,2),O=_[0],E=_[1],S=(0,o.useState)(!1),P=(0,c.Z)(S,2),N=P[0],R=P[1],A=(0,i.Z)(),L=A.getAllCharacters,T=A.getComics,q=A.process,F=A.setProcess,I=function(t){var n=t[0]-h<=e;d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t[1]))})),E(!1),b((function(t){return t+e})),x(n),R(!0),F("confirmed")},B=(0,o.useRef)([]);return{items:f,itemsLoaded:N,offset:h,listEnd:y,onRequest:function(t,e){"Characters"===t&&L(e).then(I).then((function(){return F("confirmed")})).finally((function(){return k(!1)})),"Comics"===t&&T(e).then(I).then((function(){return F("confirmed")})).finally((function(){return k(!1)}))},onListLoaded:I,onScroll:function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&window.pageYOffset>0&&k(!0)},endOfPage:j,firstLoading:O,itemRefs:B,focusOnItem:function(t){B.current.forEach((function(t){return t.classList.remove("item-selected")})),B.current[t].classList.add("item-selected"),B.current[t].focus()},setContent:function(t,e,n){switch(t){case"waiting":return(0,u.jsx)(s.Z,{});case"error":return(0,u.jsx)(a.Z,{});case"loading":return n?(0,u.jsx)(s.Z,{}):(0,u.jsx)(e,{});case"confirmed":return(0,u.jsx)(e,{});default:throw new Error("unexpected state")}},process:q,setProcess:F}}},4304:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(4165),c=n(5861),o=n(885),i=n(2791),a=function(){var t=function(){var t=(0,i.useState)(!1),e=(0,o.Z)(t,2),n=e[0],a=e[1],s=(0,i.useState)(null),u=(0,o.Z)(s,2),l=u[0],f=u[1],d=(0,i.useState)("waiting"),p=(0,o.Z)(d,2),m=p[0],h=p[1],b=(0,i.useCallback)(function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,o,i,s,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},a(!0),h("loading"),t.prev=5,t.next=8,fetch(e,{method:n,body:c,headers:o});case 8:if((i=t.sent).ok){t.next=11;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 11:return t.next=13,i.json();case 13:return s=t.sent,a(!1),t.abrupt("return",s);case 18:throw t.prev=18,t.t0=t.catch(5),a(!1),h("error"),f(t.t0.message),t.t0;case 24:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,error:l,request:b,clearError:(0,i.useCallback)((function(){f(null),h("waiting")}),[]),process:m,setProcess:h}}(),e=t.loading,n=t.error,a=t.request,s=t.clearError,u=t.process,l=t.setProcess,f="https://gateway.marvel.com:443/v1/public/",d="apikey=f09e10b3c42de2c120290b4a4f1abcf2",p=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n,c,o=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:210,t.next=3,a("".concat(f,"characters?limit=9&offset=").concat(e,"&").concat(d));case 3:return n=t.sent,c=n.data.total,t.abrupt("return",[c,n.data.results.map(g)]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e,n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("id"!==n){t.next=6;break}return t.next=3,a("".concat(f,"characters/").concat(e,"?").concat(d));case 3:c=t.sent,t.next=12;break;case 6:if("name"!==n){t.next=12;break}return t.next=9,a("".concat(f,"characters?name=").concat(e,"&").concat(d));case 9:if(0!==(c=t.sent).data.total){t.next=12;break}return t.abrupt("return",{});case 12:return t.abrupt("return",g(c.data.results[0]));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var e,n,c,o=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:500,t.next=3,a("".concat(f,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(d));case 3:return n=t.sent,c=n.data.total,t.abrupt("return",[c,n.data.results.map(v)]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(f,"comics/").concat(e,"?").concat(d));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}},g=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}};return{loading:e,error:n,getAllCharacters:p,getCharacter:m,getComics:h,clearError:s,getSingleComic:b,process:u,setProcess:l}}},7326:function(t,e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},5671:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return c}})},7277:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(1120),c=n(8814),o=n(1002),i=n(7326);function a(t,e){if(e&&("object"===(0,o.Z)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}function s(t){var e=(0,c.Z)();return function(){var n,c=(0,r.Z)(t);if(e){var o=(0,r.Z)(this).constructor;n=Reflect.construct(c,arguments,o)}else n=c.apply(this,arguments);return a(this,n)}}},1120:function(t,e,n){function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}n.d(e,{Z:function(){return r}})},136:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(9611);function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,r.Z)(t,e)}},8814:function(t,e,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}n.d(e,{Z:function(){return r}})},9611:function(t,e,n){function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{Z:function(){return r}})},2982:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(907);var c=n(181);function o(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,c.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=347.b2041aff.chunk.js.map