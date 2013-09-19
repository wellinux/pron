(function(){var e,t,n,i,o,r,a,s,l,c,u,d,h,f,m,p,g,E,T,C,v,I,O,D,b,R,y,K,_,k,w,x,N,S,A,L,$,B,P,F,M,H,q,j,z,U={}.hasOwnProperty,V=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};a=10,d=null,w=null,I=null,R={},c=null,B=(null!=(z=document.cookie.match(/request_method=(\w+)/))?z[1].toUpperCase():void 0)||"",j=null,g=function(e){var t;return H("page:fetch"),t=L(e),null!=j&&j.abort(),j=new XMLHttpRequest,j.open("GET",t,!0),j.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),j.setRequestHeader("X-XHR-Referer",w),j.onload=function(){var t;return H("page:receive"),(t=_())?(x(e),s.apply(null,m(t)),N(),document.location.hash?document.location.href=document.location.href:F(),H("page:load")):document.location.href=e},j.onloadend=function(){return j=null},j.onabort=function(){return A()},j.onerror=function(){return document.location.href=e},j.send()},p=function(e){var t;return r(),t=R[e],null!=j&&j.abort(),s(t.title,t.body),k(t),H("page:restore")},r=function(){return R[d.position]={url:document.location.href,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset},l(a)},K=function(e){return null==e&&(e=a),/^[\d]+$/.test(e)?a=parseInt(e):void 0},l=function(e){var t,n;for(t in R)U.call(R,t)&&(n=R[t],t<=d.position-e&&(R[t]=null))},s=function(t,n,i,o){return document.title=t,document.documentElement.replaceChild(n,document.body),null!=i&&e.update(i),$(),o&&h(),d=window.history.state,H("page:change")},h=function(){var e,t,n,i,o,r,a,s,l,c,u,d;for(r=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),a=0,l=r.length;l>a;a++)if(o=r[a],""===(u=o.type)||"text/javascript"===u){for(t=document.createElement("script"),d=o.attributes,s=0,c=d.length;c>s;s++)e=d[s],t.setAttribute(e.name,e.value);t.appendChild(document.createTextNode(o.innerHTML)),i=o.parentNode,n=o.nextSibling,i.removeChild(o),i.insertBefore(t,n)}},$=function(){var e,t,n,i;for(t=Array.prototype.slice.call(document.body.getElementsByTagName("noscript")),n=0,i=t.length;i>n;n++)e=t[n],e.parentNode.removeChild(e)},x=function(e){return e!==w?window.history.pushState({turbolinks:!0,position:d.position+1},"",e):void 0},N=function(){var e,t;return(e=j.getResponseHeader("X-XHR-Redirected-To"))?(t=L(e)===e?document.location.hash:"",window.history.replaceState(d,"",e+t)):void 0},A=function(){return window.history.replaceState({turbolinks:!0,position:Date.now()},"",document.location.href)},S=function(){return d=window.history.state},k=function(e){return window.scrollTo(e.positionX,e.positionY)},F=function(){return window.scrollTo(0,0)},L=function(e){var t;return t=e,null==e.href&&(t=document.createElement("A"),t.href=e),t.href.replace(t.hash,"")},H=function(e){var t;return t=document.createEvent("Events"),t.initEvent(e,!0,!0),document.dispatchEvent(t)},y=function(){return!H("page:before-change")},_=function(){var e,t,n,i,o,r;return t=function(){var e;return 400<=(e=j.status)&&600>e},r=function(){return j.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},i=function(e){var t,n,i,o,r;for(o=e.head.childNodes,r=[],n=0,i=o.length;i>n;n++)t=o[n],null!=("function"==typeof t.getAttribute?t.getAttribute("data-turbolinks-track"):void 0)&&r.push(t.src||t.href);return r},e=function(e){var t;return I||(I=i(document)),t=i(e),t.length!==I.length||o(t,I).length!==I.length},o=function(e,t){var n,i,o,r,a;for(e.length>t.length&&(r=[t,e],e=r[0],t=r[1]),a=[],i=0,o=e.length;o>i;i++)n=e[i],V.call(t,n)>=0&&a.push(n);return a},!t()&&r()&&(n=c(j.responseText),n&&!e(n))?n:void 0},m=function(t){var n;return n=t.querySelector("title"),[null!=n?n.textContent:void 0,t.body,e.get(t).token,"runScripts"]},e={get:function(e){var t;return null==e&&(e=document),{node:t=e.querySelector('meta[name="csrf-token"]'),token:null!=t?"function"==typeof t.getAttribute?t.getAttribute("content"):void 0:void 0}},update:function(e){var t;return t=this.get(),null!=t.token&&null!=e&&t.token!==e?t.node.setAttribute("content",e):void 0}},n=function(){var e,t,n,i,o,r;t=function(e){return(new DOMParser).parseFromString(e,"text/html")},e=function(e){var t;return t=document.implementation.createHTMLDocument(""),t.documentElement.innerHTML=e,t},n=function(e){var t;return t=document.implementation.createHTMLDocument(""),t.open("replace"),t.write(e),t.close(),t};try{if(window.DOMParser)return o=t("<html><body><p>test"),t}catch(a){return i=a,o=e("<html><body><p>test"),e}finally{if(1!==(null!=o?null!=(r=o.body)?r.childNodes.length:void 0:void 0))return n}},v=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",E,!1),document.addEventListener("click",E,!1))},E=function(e){var t;return e.defaultPrevented||(t=f(e),"A"!==t.nodeName||T(e,t))?void 0:(y()||q(t.href),e.preventDefault())},f=function(e){var t;for(t=e.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return t},u=function(e){return location.protocol!==e.protocol||location.host!==e.host},t=function(e){return(e.hash&&L(e))===L(location)||e.href===location.href+"#"},D=function(e){var t;return t=L(e),t.match(/\.[a-z]+(\?.*)?$/g)&&!t.match(/\.html?(\?.*)?$/g)},O=function(e){for(var t;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},M=function(e){return 0!==e.target.length},b=function(e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},T=function(e,n){return u(n)||t(n)||D(n)||O(n)||M(n)||b(e)},C=function(){return A(),S(),c=n(),document.addEventListener("click",v,!0),window.addEventListener("popstate",function(e){var t;return t=e.state,(null!=t?t.turbolinks:void 0)?R[t.position]?p(t.position):q(e.target.location.href):void 0},!1)},o=window.history&&window.history.pushState&&window.history.replaceState&&void 0!==window.history.state,i=!navigator.userAgent.match(/CriOS\//),P="GET"===B||""===B,o&&i&&P?(q=function(e){return w=document.location.href,r(),g(e)},C()):q=function(e){return document.location.href=e},this.Turbolinks={visit:q,pagesCached:K}}).call(this);