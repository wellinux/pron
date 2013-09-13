!function(e,t){e.rails!==t&&e.error("jquery-ujs has already been loaded!");var n,a=e(document);e.rails=n={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector:"button[data-remote]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},fire:function(t,n,a){var i=e.Event(n);return t.trigger(i,a),i.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(a){var i,o,r,l,s,c,d,u;if(n.fire(a,"ajax:before")){if(l=a.data("cross-domain"),s=l===t?null:l,c=a.data("with-credentials")||null,d=a.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType,a.is("form")){i=a.attr("method"),o=a.attr("action"),r=a.serializeArray();var m=a.data("ujs:submit-button");m&&(r.push(m),a.data("ujs:submit-button",null))}else a.is(n.inputChangeSelector)?(i=a.data("method"),o=a.data("url"),r=a.serialize(),a.data("params")&&(r=r+"&"+a.data("params"))):a.is(n.buttonClickSelector)?(i=a.data("method")||"get",o=a.data("url"),r=a.serialize(),a.data("params")&&(r=r+"&"+a.data("params"))):(i=a.data("method"),o=n.href(a),r=a.data("params")||null);u={type:i||"GET",data:r,dataType:d,beforeSend:function(e,i){return i.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),n.fire(a,"ajax:beforeSend",[e,i])},success:function(e,t,n){a.trigger("ajax:success",[e,t,n])},complete:function(e,t){a.trigger("ajax:complete",[e,t])},error:function(e,t,n){a.trigger("ajax:error",[e,t,n])},crossDomain:s},c&&(u.xhrFields={withCredentials:c}),o&&(u.url=o);var p=n.ajax(u);return a.trigger("ajax:send",p),p}return!1},handleMethod:function(a){var i=n.href(a),o=a.data("method"),r=a.attr("target"),l=e("meta[name=csrf-token]").attr("content"),s=e("meta[name=csrf-param]").attr("content"),c=e('<form method="post" action="'+i+'"></form>'),d='<input name="_method" value="'+o+'" type="hidden" />';s!==t&&l!==t&&(d+='<input name="'+s+'" value="'+l+'" type="hidden" />'),r&&c.attr("target",r),c.hide().append(d).appendTo("body"),c.submit()},disableFormElements:function(t){t.find(n.disableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with",t[n]()),t[n](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(n.enableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[n](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t,a=e.data("confirm"),i=!1;return a?(n.fire(e,"confirm")&&(i=n.confirm(a),t=n.fire(e,"confirm:complete",[i])),i&&t):!0},blankInputs:function(t,n,a){var i,o,r=e(),l=n||"input,textarea",s=t.find(l);return s.each(function(){if(i=e(this),o=i.is("input[type=checkbox],input[type=radio]")?i.is(":checked"):i.val(),!o==!a){if(i.is("input[type=radio]")&&s.filter('input[type=radio]:checked[name="'+i.attr("name")+'"]').length)return!0;r=r.add(i)}}),r.length?r:!1},nonBlankInputs:function(e,t){return n.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return n.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.removeData("ujs:enable-with")),e.unbind("click.railsDisable")}},n.fire(a,"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,a){e.crossDomain||n.CSRFProtection(a)}),a.delegate(n.linkDisableSelector,"ajax:complete",function(){n.enableElement(e(this))}),a.delegate(n.linkClickSelector,"click.rails",function(a){var i=e(this),o=i.data("method"),r=i.data("params");if(!n.allowAction(i))return n.stopEverything(a);if(i.is(n.linkDisableSelector)&&n.disableElement(i),i.data("remote")!==t){if(!(!a.metaKey&&!a.ctrlKey||o&&"GET"!==o||r))return!0;var l=n.handleRemote(i);return l===!1?n.enableElement(i):l.error(function(){n.enableElement(i)}),!1}return i.data("method")?(n.handleMethod(i),!1):void 0}),a.delegate(n.buttonClickSelector,"click.rails",function(t){var a=e(this);return n.allowAction(a)?(n.handleRemote(a),!1):n.stopEverything(t)}),a.delegate(n.inputChangeSelector,"change.rails",function(t){var a=e(this);return n.allowAction(a)?(n.handleRemote(a),!1):n.stopEverything(t)}),a.delegate(n.formSubmitSelector,"submit.rails",function(a){var i=e(this),o=i.data("remote")!==t,r=n.blankInputs(i,n.requiredInputSelector),l=n.nonBlankInputs(i,n.fileInputSelector);if(!n.allowAction(i))return n.stopEverything(a);if(r&&i.attr("novalidate")==t&&n.fire(i,"ajax:aborted:required",[r]))return n.stopEverything(a);if(o){if(l){setTimeout(function(){n.disableFormElements(i)},13);var s=n.fire(i,"ajax:aborted:file",[l]);return s||setTimeout(function(){n.enableFormElements(i)},13),s}return n.handleRemote(i),!1}setTimeout(function(){n.disableFormElements(i)},13)}),a.delegate(n.formInputClickSelector,"click.rails",function(t){var a=e(this);if(!n.allowAction(a))return n.stopEverything(t);var i=a.attr("name"),o=i?{name:i,value:a.val()}:null;a.closest("form").data("ujs:submit-button",o)}),a.delegate(n.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&n.disableFormElements(e(this))}),a.delegate(n.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&n.enableFormElements(e(this))}),e(function(){var t=e("meta[name=csrf-token]").attr("content"),n=e("meta[name=csrf-param]").attr("content");e('form input[name="'+n+'"]').val(t)}))}(jQuery);