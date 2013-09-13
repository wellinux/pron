/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("colordialog",function(e){function t(){m.getById(v).removeStyle("background-color"),l.getContentElement("picker","selectedColor").setValue(""),s&&s.removeAttribute("aria-selected"),s=null}function n(e){var t,e=e.data.getTarget();"td"==e.getName()&&(t=e.getChild(0).getHtml())&&(s=e,s.setAttribute("aria-selected",!0),l.getContentElement("picker","selectedColor").setValue(t))}function a(e){for(var e=e.replace(/^#/,""),t=0,n=[];2>=t;t++)n[t]=parseInt(e.substr(2*t,2),16);return"#"+(165<=.2126*n[0]+.7152*n[1]+.0722*n[2]?"000":"fff")}function i(e){!e.name&&(e=new CKEDITOR.event(e));var t,n=!/mouse/.test(e.name),i=e.data.getTarget();"td"==i.getName()&&(t=i.getChild(0).getHtml())&&(o(e),n?d=i:c=i,n&&(i.setStyle("border-color",a(t)),i.setStyle("border-style","dotted")),m.getById(b).setStyle("background-color",t),m.getById(T).setHtml(t))}function o(e){if(e=!/mouse/.test(e.name)&&d){var t=e.getChild(0).getHtml();e.setStyle("border-color",t),e.setStyle("border-style","solid")}!d&&!c&&(m.getById(b).removeStyle("background-color"),m.getById(T).setHtml("&nbsp;"))}function r(t){var a=t.data,i=a.getTarget(),o=a.getKeystroke(),r="rtl"==e.lang.dir;switch(o){case 38:(t=i.getParent().getPrevious())&&(t=t.getChild([i.getIndex()]),t.focus()),a.preventDefault();break;case 40:(t=i.getParent().getNext())&&(t=t.getChild([i.getIndex()]))&&1==t.type&&t.focus(),a.preventDefault();break;case 32:case 13:n(t),a.preventDefault();break;case r?37:39:(t=i.getNext())?1==t.type&&(t.focus(),a.preventDefault(!0)):(t=i.getParent().getNext())&&(t=t.getChild([0]))&&1==t.type&&(t.focus(),a.preventDefault(!0));break;case r?39:37:(t=i.getPrevious())?(t.focus(),a.preventDefault(!0)):(t=i.getParent().getPrevious())&&(t=t.getLast(),t.focus(),a.preventDefault(!0))}}var l,s,d,c,u,p=CKEDITOR.dom.element,m=CKEDITOR.document,h=e.lang.colordialog,g={type:"html",html:"&nbsp;"},f=function(e){return CKEDITOR.tools.getNextId()+"_"+e},b=f("hicolor"),T=f("hicolortext"),v=f("selhicolor");return function(){function e(e,n){for(var i=e;e+3>i;i++){var o=new p(u.$.insertRow(-1));o.setAttribute("role","row");for(var r=n;n+3>r;r++)for(var l=0;6>l;l++)t(o.$,"#"+a[r]+a[l]+a[i])}}function t(e,t){var a=new p(e.insertCell(-1));a.setAttribute("class","ColorCell"),a.setAttribute("tabIndex",-1),a.setAttribute("role","gridcell"),a.on("keydown",r),a.on("click",n),a.on("focus",i),a.on("blur",o),a.setStyle("background-color",t),a.setStyle("border","1px solid "+t),a.setStyle("width","14px"),a.setStyle("height","14px");var l=f("color_table_cell");a.setAttribute("aria-labelledby",l),a.append(CKEDITOR.dom.element.createFromHtml('<span id="'+l+'" class="cke_voice_label">'+t+"</span>",CKEDITOR.document))}u=CKEDITOR.dom.element.createFromHtml('<table tabIndex="-1" aria-label="'+h.options+'" role="grid" style="border-collapse:separate;" cellspacing="0"><caption class="cke_voice_label">'+h.options+'</caption><tbody role="presentation"></tbody></table>'),u.on("mouseover",i),u.on("mouseout",o);var a="00 33 66 99 cc ff".split(" ");e(0,0),e(3,0),e(0,3),e(3,3);var l=new p(u.$.insertRow(-1));l.setAttribute("role","row");for(var s=0;6>s;s++)t(l.$,"#"+a[s]+a[s]+a[s]);for(s=0;12>s;s++)t(l.$,"#000000")}(),{title:h.title,minWidth:360,minHeight:220,onLoad:function(){l=this},onHide:function(){t();var e=d.getChild(0).getHtml();d.setStyle("border-color",e),d.setStyle("border-style","solid"),m.getById(b).removeStyle("background-color"),m.getById(T).setHtml("&nbsp;"),d=null},contents:[{id:"picker",label:h.title,accessKey:"I",elements:[{type:"hbox",padding:0,widths:["70%","10%","30%"],children:[{type:"html",html:"<div></div>",onLoad:function(){CKEDITOR.document.getById(this.domId).append(u)},focus:function(){(d||this.getElement().getElementsByTag("td").getItem(0)).focus()}},g,{type:"vbox",padding:0,widths:["70%","5%","25%"],children:[{type:"html",html:"<span>"+h.highlight+'</span>												<div id="'+b+'" style="border: 1px solid; height: 74px; width: 74px;"></div>												<div id="'+T+'">&nbsp;</div><span>'+h.selected+'</span>												<div id="'+v+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:"text",label:h.selected,labelStyle:"display:none",id:"selectedColor",style:"width: 74px",onChange:function(){try{m.getById(v).setStyle("background-color",this.getValue())}catch(e){t()}}},g,{type:"button",id:"clear",style:"margin-top: 5px",label:h.clear,onClick:t}]}]}]}]}});