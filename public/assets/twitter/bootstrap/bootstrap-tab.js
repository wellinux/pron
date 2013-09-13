/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
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
 * ======================================================== */
!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t,n,a,i=this.element,o=i.closest("ul:not(.dropdown-menu)"),r=i.attr("data-target");r||(r=i.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(t=o.find(".active:last a")[0],a=e.Event("show",{relatedTarget:t}),i.trigger(a),a.isDefaultPrevented()||(n=e(r),this.activate(i.parent("li"),o),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:t})})))},activate:function(t,n,a){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),a&&a()}var o=n.find("> .active"),r=a&&e.support.transition&&o.hasClass("fade");r?o.one(e.support.transition.end,i):i(),o.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var a=e(this),i=a.data("tab");i||a.data("tab",i=new t(this)),"string"==typeof n&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery);