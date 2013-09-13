/* ===========================================================
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
!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,a){var i,o,r,l,s;for(this.type=t,this.$element=e(n),this.options=this.getOptions(a),this.enabled=!0,r=this.options.trigger.split(" "),s=r.length;s--;)l=r[s],"click"==l?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):"manual"!=l&&(i="hover"==l?"mouseenter":"focus",o="hover"==l?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n,a=e.fn[this.type].defaults,i={};return this._options&&e.each(this._options,function(e,t){a[e]!=t&&(i[e]=t)},this),n=e(t.currentTarget)[this.type](i).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show),void 0):n.show()},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide),void 0):n.hide()},show:function(){var t,n,a,i,o,r,l=e.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(l),l.isDefaultPrevented())return;switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),a=t[0].offsetWidth,i=t[0].offsetHeight,o){case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"top":r={top:n.top-i,left:n.left+n.width/2-a/2};break;case"left":r={top:n.top+n.height/2-i/2,left:n.left-a};break;case"right":r={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(r,o),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n,a,i,o,r=this.tip(),l=r[0].offsetWidth,s=r[0].offsetHeight;r.offset(e).addClass(t).addClass("in"),n=r[0].offsetWidth,a=r[0].offsetHeight,"top"==t&&a!=s&&(e.top=e.top+s-a,o=!0),"bottom"==t||"top"==t?(i=0,e.left<0&&(i=-2*e.left,e.left=0,r.offset(e),n=r[0].offsetWidth,a=r[0].offsetHeight),this.replaceArrow(i-l+n,n,"left")):this.replaceArrow(a-s,a,"top"),o&&r.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var n=this.tip(),a=e.Event("hide");return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?t():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var a=e(this),i=a.data("tooltip"),o="object"==typeof n&&n;i||a.data("tooltip",i=new t(this,o)),"string"==typeof n&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery);