(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[559],{3582:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff",function(){return a(1612)}])},1612:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return W}});var n=a(5893),t=a(7294),i=a(6052),l=a(9703),o=a(4697);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function s(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}function d(e){var r=e.loading,a=e.src,n=e.srcSet,i=e.onLoad,l=e.onError,c=e.crossOrigin,s=e.sizes,d=e.ignoreFallback,u=(0,t.useState)("pending"),m=u[0],f=u[1];(0,t.useEffect)((function(){f(a?"loading":"pending")}),[a]);var g=(0,t.useRef)(),v=(0,t.useCallback)((function(){if(a){h();var e=new Image;e.src=a,c&&(e.crossOrigin=c),n&&(e.srcset=n),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){h(),f("loaded"),null==i||i(e)},e.onerror=function(e){h(),f("failed"),null==l||l(e)},g.current=e}}),[a,c,n,s,i,l,r]),h=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,o.a)((function(){if(!d)return"loading"===m&&v(),function(){h()}}),[m,v,d]),d?"loaded":m}var u=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=t.forwardRef((function(e,r){var a=e.htmlWidth,n=e.htmlHeight,i=e.alt,l=s(e,u);return t.createElement("img",c({width:a,height:n,ref:r,alt:i},l))})),g=(0,i.Gp)((function(e,r){var a=e.fallbackSrc,n=e.fallback,o=e.src,u=e.srcSet,g=e.align,v=e.fit,h=e.loading,b=e.ignoreFallback,p=e.crossOrigin,_=s(e,m),x=null!=h||b||void 0===a&&void 0===n,k=d(c({},e,{ignoreFallback:x})),E=c({ref:r,objectFit:v,objectPosition:g},x?_:(0,l.CE)(_,["onError","onLoad"]));return"loaded"!==k?n||t.createElement(i.m$.img,c({as:f,className:"chakra-image__placeholder",src:a},E)):t.createElement(i.m$.img,c({as:f,src:o,srcSet:u,crossOrigin:p,loading:h,className:"chakra-image"},E))}));l.Ts&&(g.displayName="Image");var v=a(6450);function h(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}var p=["name","getInitials"],_=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],x=(0,i.Gp)((function(e,r){var a=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,i.yK)().badge);return t.createElement(i.m$.div,b({ref:r},e,{className:(0,l.cx)("chakra-avatar__badge",e.className),__css:a}))}));function k(e){var r=e.split(" "),a=r[0],n=r[1];return a&&n?""+a.charAt(0)+n.charAt(0):a.charAt(0)}l.Ts&&(x.displayName="AvatarBadge");var E=function(e){var r=e.name,a=e.getInitials,n=h(e,p),l=(0,i.yK)();return t.createElement(i.m$.div,b({role:"img","aria-label":r},n,{__css:l.label}),r?null==a?void 0:a(r):null)},C=function(e){return t.createElement(i.m$.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),t.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),t.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},j={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},y=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Avatar",e),n=(0,i.Lr)(e),o=n.src,c=n.srcSet,s=n.name,d=n.showBorder,u=n.borderRadius,m=void 0===u?"full":u,f=n.onError,g=n.getInitials,v=void 0===g?k:g,p=n.icon,x=void 0===p?t.createElement(C,null):p,E=n.iconLabel,y=void 0===E?" avatar":E,w=n.loading,O=n.children,I=n.borderColor,S=n.ignoreFallback,F=h(n,_),L=b({borderRadius:m,borderWidth:d?"2px":void 0},j,a.container);return I&&(L.borderColor=I),t.createElement(i.m$.span,b({ref:r},F,{className:(0,l.cx)("chakra-avatar",e.className),__css:L}),t.createElement(i.Fo,{value:a},t.createElement(N,{src:o,srcSet:c,loading:w,onError:f,getInitials:v,name:s,borderRadius:m,icon:x,iconLabel:y,ignoreFallback:S}),O))}));l.Ts&&(y.displayName="Avatar");var N=function(e){var r=e.src,a=e.srcSet,n=e.onError,l=e.getInitials,o=e.name,c=e.borderRadius,s=e.loading,u=e.iconLabel,m=e.icon,f=void 0===m?t.createElement(C,null):m,g=d({src:r,onError:n,ignoreFallback:e.ignoreFallback});return!r||!("loaded"===g)?o?t.createElement(E,{className:"chakra-avatar__initials",getInitials:l,name:o}):t.cloneElement(f,{role:"img","aria-label":u}):t.createElement(i.m$.img,{src:r,srcSet:a,alt:o,className:"chakra-avatar__img",loading:s,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};l.Ts&&(N.displayName="AvatarImage");var w=["children","borderColor","max","spacing","borderRadius"],O=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Avatar",e),n=(0,i.Lr)(e),o=n.children,c=n.borderColor,s=n.max,d=n.spacing,u=void 0===d?"-0.75rem":d,m=n.borderRadius,f=void 0===m?"full":m,g=h(n,w),p=(0,v.WR)(o),_=s?p.slice(0,s):p,x=null!=s&&p.length-s,k=_.reverse().map((function(r,a){var n,i={marginEnd:0===a?0:u,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:c,showBorder:!0};return t.cloneElement(r,(0,l.YU)(i))})),E=b({borderRadius:f,marginStart:u},j,a.excessLabel);return t.createElement(i.m$.div,b({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},g,{className:(0,l.cx)("chakra-avatar__group",e.className)}),x>0&&t.createElement(i.m$.span,{className:"chakra-avatar__excess",__css:E},"+"+x),k)}));l.Ts&&(O.displayName="AvatarGroup");var I=a(8527),S=a(4632),F=a(9836);function L(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function R(){var e=L(["\n  min-height: calc(100vh - 60px);\n  min-height: calc(100dvh - 60px);\n"]);return R=function(){return e},e}function A(){var e=L(["\n  &[aria-disabled] {\n    pointer-events: none;\n  }\n"]);return A=function(){return e},e}var $=[{name:"gaogao_9",nickname:"\u304c\u304a",ext:"jpg",disabled:!1},{name:"nyan_nyee",nickname:"\u306b\u3083\u3093\u306b\u30fc",ext:"jpg",disabled:!1},{name:"mimeino",nickname:"\u3042\u3051",ext:"jpg",disabled:!1},{name:"non_affleck",nickname:"\u306e\u3093\u30a2\u30d5",ext:"png",disabled:!0}],T=(0,S.Z)(I.kC)(R()),z=S.Z.a(A()),W=function(){return(0,n.jsx)(F.HQ,{children:(0,n.jsx)(T,{maxW:"1000px",height:"100%",marginX:"auto",flexDirection:"column",align:"center",justify:"center",children:(0,n.jsx)(I.MI,{width:"100%",minChildWidth:"120px",spacing:"40px",children:$.map((function(e){return(0,n.jsx)(I.M5,{children:(0,n.jsx)(z,{href:"https://twitter.com/".concat(e.name),target:"_blank","aria-disabled":e.disabled||void 0,tabIndex:e.disabled?-1:0,children:(0,n.jsx)(y,{size:"2xl",name:e.nickname,src:"/assets/img/staff/".concat(e.name,".").concat(e.ext)})})},e.name)}))})})})}}},function(e){e.O(0,[435,836,774,888,179],(function(){return r=3582,e(e.s=r);var r}));var r=e.O();_N_E=r}]);