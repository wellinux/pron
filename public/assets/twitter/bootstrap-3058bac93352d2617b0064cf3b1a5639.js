/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
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
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e,t=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(e in n)if(void 0!==t.style[e])return n[e]}();return e&&{end:e}}()})}(window.jQuery),/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
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
!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function n(){a.trigger("closed").remove()}var a,i=e(this),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),a=e(o),t&&t.preventDefault(),a.length||(a=i.hasClass("alert")?i:i.parent()),a.trigger(t=e.Event("close")),t.isDefaultPrevented()||(a.removeClass("in"),e.support.transition&&a.hasClass("fade")?a.on(e.support.transition.end,n):n())};var a=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var a=e(this),i=a.data("alert");i||a.data("alert",i=new n(this)),"string"==typeof t&&i[t].call(a)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=a,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
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
 * ========================================================= */
!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")}))},hide:function(t){t&&t.preventDefault(),t=e.Event("hide"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]===e.target||t.$element.has(e.target).length||t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){27==t.which&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var a=e.support.transition&&n;if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),a&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;a?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var a=e(this),i=a.data("modal"),o=e.extend({},e.fn.modal.defaults,a.data(),"object"==typeof n&&n);i||a.data("modal",i=new t(this,o)),"string"==typeof n?i[n]():o.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),a=n.attr("href"),i=e(n.attr("data-target")||a&&a.replace(/.*(?=#[^\s]+$)/,"")),o=i.data("modal")?"toggle":e.extend({remote:!/#/.test(a)&&a},i.data(),n.data());t.preventDefault(),i.modal(o).one("hide",function(){n.focus()})})}(window.jQuery),/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
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
 * ============================================================ */
!function(e){"use strict";function t(){e(".dropdown-backdrop").remove(),e(a).each(function(){n(e(this)).removeClass("open")})}function n(t){var n,a=t.attr("data-target");return a||(a=t.attr("href"),a=a&&/#/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,"")),n=a&&e(a),n&&n.length||(n=t.parent()),n}var a="[data-toggle=dropdown]",i=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(){var a,i,o=e(this);if(!o.is(".disabled, :disabled"))return a=n(o),i=a.hasClass("open"),t(),i||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",t),a.toggleClass("open")),o.focus(),!1},keydown:function(t){var i,o,r,l,s;if(/(38|40|27)/.test(t.keyCode)&&(i=e(this),t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled"))){if(r=n(i),l=r.hasClass("open"),!l||l&&27==t.keyCode)return 27==t.which&&r.find(a).focus(),i.click();o=e("[role=menu] li:not(.divider):visible a",r),o.length&&(s=o.index(o.filter(":focus")),38==t.keyCode&&s>0&&s--,40==t.keyCode&&s<o.length-1&&s++,~s||(s=0),o.eq(s).focus())}}};var o=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var n=e(this),a=n.data("dropdown");a||n.data("dropdown",a=new i(this)),"string"==typeof t&&a[t].call(n)})},e.fn.dropdown.Constructor=i,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=o,this},e(document).on("click.dropdown.data-api",t).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",a,i.prototype.toggle).on("keydown.dropdown.data-api",a+", [role=menu]",i.prototype.keydown)}(window.jQuery),/* =============================================================
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
!function(e){"use strict";function t(t,n){var a,i=e.proxy(this.process,this),o=e(t).is("body")?e(window):e(t);this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=o.on("scroll.scroll-spy.data-api",i),this.selector=(this.options.target||(a=e(t).attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t,n=this;this.offsets=e([]),this.targets=e([]),t=this.$body.find(this.selector).map(function(){var t=e(this),a=t.data("target")||t.attr("href"),i=/^#\w/.test(a)&&e(a);return i&&i.length&&[[i.position().top+(!e.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),a]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,a=n-this.$scrollElement.height(),i=this.offsets,o=this.targets,r=this.activeTarget;if(t>=a)return r!=(e=o.last()[0])&&this.activate(e);for(e=i.length;e--;)r!=o[e]&&t>=i[e]&&(!i[e+1]||t<=i[e+1])&&this.activate(o[e])},activate:function(t){var n,a;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),a=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(a).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var a=e(this),i=a.data("scrollspy"),o="object"==typeof n&&n;i||a.data("scrollspy",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),/* ========================================================
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
!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t,n,a,i=this.element,o=i.closest("ul:not(.dropdown-menu)"),r=i.attr("data-target");r||(r=i.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(t=o.find(".active:last a")[0],a=e.Event("show",{relatedTarget:t}),i.trigger(a),a.isDefaultPrevented()||(n=e(r),this.activate(i.parent("li"),o),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:t})})))},activate:function(t,n,a){function i(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),r?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),a&&a()}var o=n.find("> .active"),r=a&&e.support.transition&&o.hasClass("fade");r?o.one(e.support.transition.end,i):i(),o.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var a=e(this),i=a.data("tab");i||a.data("tab",i=new t(this)),"string"==typeof n&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
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
!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,a){var i,o,r,l,s;for(this.type=t,this.$element=e(n),this.options=this.getOptions(a),this.enabled=!0,r=this.options.trigger.split(" "),s=r.length;s--;)l=r[s],"click"==l?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=l&&(i="hover"==l?"mouseenter":"focus",o="hover"==l?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n,a=e.fn[this.type].defaults,i={};return this._options&&e.each(this._options,function(e,t){a[e]!=t&&(i[e]=t)},this),n=e(t.currentTarget)[this.type](i).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var t,n,a,i,o,r,l=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(l),l.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),a=t[0].offsetWidth,i=t[0].offsetHeight,o){case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"top":r={top:n.top-i,left:n.left+n.width/2-a/2};break;case"left":r={top:n.top+n.height/2-i/2,left:n.left-a};break;case"right":r={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(r,o),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n,a,i,o,r=this.tip(),l=r[0].offsetWidth,s=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),n=r[0].offsetWidth,a=r[0].offsetHeight,"top"==t&&a!=s&&(e.top=e.top+s-a,o=!0),"bottom"==t||"top"==t?(i=0,e.left<0&&(i=-2*e.left,e.left=0,r.offset(e),n=r[0].offsetWidth,a=r[0].offsetHeight),this.replaceArrow(i-l+n,n,"left")):this.replaceArrow(a-s,a,"top"),o&&r.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var n=this.tip(),a=e.Event("hide");return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?t():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var a=e(this),i=a.data("tooltip"),o="object"==typeof n&&n;i||a.data("tooltip",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
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
 * =========================================================== */
!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=("function"==typeof n.content?n.content.call(t[0]):n.content)||t.attr("data-content")},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var a=e(this),i=a.data("popover"),o="object"==typeof n&&n;i||a.data("popover",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
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
 * ============================================================ */
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,a=n.data(),i=n.is("input")?"val":"html";e+="Text",a.resetText||n.data("resetText",n[i]()),n[i](a[e]||this.options[e]),setTimeout(function(){"loadingText"==e?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var a=e(this),i=a.data("button"),o="object"==typeof n&&n;i||a.data("button",i=new t(this,o)),"toggle"==n?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
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
 * ============================================================ */
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,a,i;if(!this.transitioning&&!this.$element.hasClass("in")){if(t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),a=this.$parent&&this.$parent.find("> .accordion-group > .in"),a&&a.length){if(i=a.data("collapse"),i&&i.transitioning)return;a.collapse("hide"),i||a.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])}},hide:function(){var t;!this.transitioning&&this.$element.hasClass("in")&&(t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0))},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[null!==e?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,a){var i=this,o=function(){"show"==n.type&&i.reset(),i.transitioning=0,i.$element.trigger(a)};this.$element.trigger(n),n.isDefaultPrevented()||(this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,o):o())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var a=e(this),i=a.data("collapse"),o=e.extend({},e.fn.collapse.defaults,a.data(),"object"==typeof n&&n);i||a.data("collapse",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n,a=e(this),i=a.attr("data-target")||t.preventDefault()||(n=a.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=e(i).data("collapse")?"toggle":a.data();a[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(o)})}(window.jQuery),/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
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
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,"hover"==this.options.pause&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),a=this;if(!(t>this.$items.length-1||0>t))return this.sliding?this.$element.one("slid",function(){a.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(t,n){var a,i=this.$element.find(".item.active"),o=n||i[t](),r=this.interval,l="next"==t?"left":"right",s="next"==t?"first":"last",c=this;if(this.sliding=!0,r&&this.pause(),o=o.length?o:this.$element.find(".item")[s](),a=e.Event("slide",{relatedTarget:o[0],direction:l}),!o.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(c.$indicators.children()[c.getActiveIndex()]);t&&t.addClass("active")})),e.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(a),a.isDefaultPrevented())return;o.addClass(t),o[0].offsetWidth,i.addClass(l),o.addClass(l),this.$element.one(e.support.transition.end,function(){o.removeClass([t,l].join(" ")).addClass("active"),i.removeClass(["active",l].join(" ")),c.sliding=!1,setTimeout(function(){c.$element.trigger("slid")},0)})}else{if(this.$element.trigger(a),a.isDefaultPrevented())return;i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return r&&this.cycle(),this}}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var a=e(this),i=a.data("carousel"),o=e.extend({},e.fn.carousel.defaults,"object"==typeof n&&n),r="string"==typeof n?n:o.slide;i||a.data("carousel",i=new t(this,o)),"number"==typeof n?i.to(n):r?i[r]():o.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n,a,i=e(this),o=e(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),r=e.extend({},o.data(),i.data());o.carousel(r),(a=i.attr("data-slide-to"))&&o.data("carousel").pause().to(a).cycle(),t.preventDefault()})}(window.jQuery),/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
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
 * ============================================================ */
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var t;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(t=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,t?this.process(t):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){for(var t,n=[],a=[],i=[];t=e.shift();)t.toLowerCase().indexOf(this.query.toLowerCase())?~t.indexOf(this.query)?a.push(t):i.push(t):n.push(t);return n.concat(a,i)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,a){return t=e(n.options.item).attr("data-value",a),t.find("a").html(n.highlighter(a)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(){var t=this.$menu.find(".active").removeClass("active"),n=t.next();n.length||(n=e(this.$menu.find("li")[0])),n.addClass("active")},prev:function(){var e=this.$menu.find(".active").removeClass("active"),t=e.prev();t.length||(t=this.$menu.find("li").last()),t.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t="function"==typeof this.$element[e]),t},move:function(e){if(this.shown){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()}},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var a=e(this),i=a.data("typeahead"),o="object"==typeof n&&n;i||a.data("typeahead",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var t=e(this);t.data("typeahead")||t.typeahead(t.data())})}(window.jQuery),/* ==========================================================
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