/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
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
 * ============================================================== */
!function(e){"use strict";function t(t,n){var a,i=e.proxy(this.process,this),o=e(t).is("body")?e(window):e(t);this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=o.on("scroll.scroll-spy.data-api",i),this.selector=(this.options.target||(a=e(t).attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t,n=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),a=t.data("target")||t.attr("href"),i=/^#\w/.test(a)&&e(a);return i&&i.length&&[[i.position().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),a]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,a=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,r=this.activeTarget;if(t>=a)return r!=(e=o.last()[0])&&this.activate(e);for(e=i.length;e--;)r!=o[e]&&t>=i[e]&&(!i[e+1]||t<=i[e+1])&&this.activate(o[e])},activate:function(t){var n,a;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),a=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(a).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var a=e(this),i=a.data("scrollspy"),o="object"==typeof n&&n;i||a.data("scrollspy",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);