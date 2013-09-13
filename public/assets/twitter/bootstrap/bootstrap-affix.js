/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t,n=e(document).height(),a=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,r=o.bottom,l=o.top,s="affix affix-top affix-bottom";"object"!=typeof o&&(r=l=o),"function"==typeof l&&(l=o.top()),"function"==typeof r&&(r=o.bottom()),t=null!=this.unpin&&a+this.unpin<=i.top?!1:null!=r&&i.top+this.$element.height()>=n-r?"bottom":null!=l&&l>=a?"top":!1,this.affixed!==t&&(this.affixed=t,this.unpin="bottom"==t?i.top-a:null,this.$element.removeClass(s).addClass("affix"+(t?"-"+t:"")))}};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var a=e(this),i=a.data("affix"),o="object"==typeof n&&n;i||a.data("affix",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);