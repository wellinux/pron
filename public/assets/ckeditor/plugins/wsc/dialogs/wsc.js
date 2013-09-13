/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){function e(e){if(!e)throw"Languages-by-groups list are required for construct selectbox";var t,a=[],n="";for(t in e)for(var i in e[t]){var o=e[t][i];"en_US"==o?n=o:a.push(o)}return a.sort(),n&&a.unshift(n),{getCurrentLangGroup:function(t){e:{for(var a in e)for(var n in e[a])if(n.toUpperCase()===t.toUpperCase()){t=a;break e}t=""}return t},setLangList:function(){var t,a={};for(t in e)for(var n in e[t])a[e[t][n]]=n;return a}()}}var t=function(){var e=function(e,t,a){var a=a||{},n=a.expires;if("number"==typeof n&&n){var i=new Date;i.setTime(i.getTime()+1e3*n),n=a.expires=i}n&&n.toUTCString&&(a.expires=n.toUTCString());var o,t=encodeURIComponent(t),e=e+"="+t;for(o in a)t=a[o],e+="; "+o,!0!==t&&(e+="="+t);document.cookie=e};return{postMessage:{init:function(e){document.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e)},send:function(e){var t=e.fn||null,a=e.id||"",n=e.target||window,i=e.message||{id:a};"[object Object]"==Object.prototype.toString.call(e.message)&&(e.message.id||(e.message.id=a),i=e.message),e=window.JSON.stringify(i,t),n.postMessage(e,"*")}},hash:{create:function(){},parse:function(){}},cookie:{set:e,get:function(e){return(e=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(e[1]):void 0},remove:function(t){e(t,"",{expires:-1})}}}}(),a=a||{};a.TextAreaNumber=null,a.load=!0,a.cmd={SpellTab:"spell",Thesaurus:"thes",GrammTab:"grammar"},a.dialog=null,a.optionNode=null,a.selectNode=null,a.grammerSuggest=null,a.textNode={},a.iframeMain=null,a.dataTemp="",a.div_overlay=null,a.textNodeInfo={},a.selectNode={},a.selectNodeResponce={},a.selectingLang=a.currentLang,a.langList=null,a.langSelectbox=null,a.banner="",a.show_grammar=null,a.div_overlay_no_check=null,a.wsc_customerId=CKEDITOR.config.wsc_customerId,a.cust_dic_ids=CKEDITOR.config.wsc_customDictionaryIds,a.userDictionaryName=CKEDITOR.config.wsc_userDictionaryName,a.defaultLanguage=CKEDITOR.config.defaultLanguage,a.targetFromFrame={},a.onLoadOverlay=null,a.LocalizationComing={},a.OverlayPlace=null,a.LocalizationButton={ChangeTo:{instance:null,text:"Change to"},ChangeAll:{instance:null,text:"Change All"},IgnoreWord:{instance:null,text:"Ignore word"},IgnoreAllWords:{instance:null,text:"Ignore all words"},Options:{instance:null,text:"Options",optionsDialog:{instance:null}},AddWord:{instance:null,text:"Add word"},FinishChecking:{instance:null,text:"Finish Checking"}},a.LocalizationLabel={ChangeTo:{instance:null,text:"Change to"},Suggestions:{instance:null,text:"Suggestions"}};var n,i,o=function(e){for(var t in e)e[t].instance.getElement().setText(a.LocalizationComing[t])},r=function(e){for(var t in e){if(!e[t].instance.setLabel)break;e[t].instance.setLabel(a.LocalizationComing[t])}};a.framesetHtml=function(e){return'<iframe src="'+a.templatePath+a.serverLocation+'" id='+a.iframeNumber+"_"+e+' frameborder="0" allowtransparency="1" style="width:100%;border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"></iframe>'},a.setIframe=function(e,t){var n=a.framesetHtml(t);return e.getElement().setHtml(n)},a.setCurrentIframe=function(e){a.setIframe(a.dialog._.contents[e].Content,e)},a.setHeightBannerFrame=function(){var e=a.dialog.getContentElement("SpellTab","banner").getElement(),t=a.dialog.getContentElement("GrammTab","banner").getElement(),n=a.dialog.getContentElement("Thesaurus","banner").getElement();e.setStyle("height","90px"),t.setStyle("height","90px"),n.setStyle("height","90px")},a.setHeightFrame=function(){document.getElementById(a.iframeNumber+"_"+a.dialog._.currentTabId).style.height="240px"},a.sendData=function(e){var t,n,i=e._.currentTabId,o=e._.contents[i].Content;a.setIframe(o,i),e.parts.tabs.removeAllListeners(),e.parts.tabs.on("click",function(r){r=r||window.event,r.data.getTarget().is("a")&&i!=e._.currentTabId&&(i=e._.currentTabId,o=e._.contents[i].Content,t=a.iframeNumber+"_"+i,a.div_overlay.setEnable(),o.getElement().getChildCount()?p(a.targetFromFrame[t],a.cmd[i]):(a.setIframe(o,i),n=document.getElementById(t),a.targetFromFrame[t]=n.contentWindow))})},a.buildSelectLang=function(){var e=new CKEDITOR.dom.element("div"),t=new CKEDITOR.dom.element("select"),n="wscLang"+a.CKNumber;return e.addClass("cke_dialog_ui_input_select"),e.setAttribute("role","presentation"),e.setStyles({height:"auto",position:"absolute",right:"0",top:"-1px",width:"160px","white-space":"normal"}),t.setAttribute("id",n),t.addClass("cke_dialog_ui_input_select"),t.setStyles({width:"160px"}),e.append(t),e},a.buildOptionLang=function(e){var t,n=document.getElementById("wscLang"+a.CKNumber),i=document.createDocumentFragment(),o=[];if(0===n.options.length){for(t in e)o.push([t,e[t]]);o.sort();for(var r=0;r<o.length;r++)e=document.createElement("option"),e.setAttribute("value",o[r][1]),t=document.createTextNode(o[r][0]),e.appendChild(t),o[r][1]==a.selectingLang&&e.setAttribute("selected","selected"),i.appendChild(e);n.appendChild(i)}},a.buildOptionSynonyms=function(e){e=a.selectNodeResponce[e],a.selectNode.synonyms.clear();for(var t=0;t<e.length;t++)a.selectNode.synonyms.add(e[t],e[t]);a.selectNode.synonyms.getInputElement().$.firstChild.selected=!0,a.textNode.Thesaurus.setValue(a.selectNode.synonyms.getInputElement().getValue())};var l=function(e){var t=document,a=e.target||t.body,n=e.id||"overlayBlock",i=e.opacity||"0.9",e=e.background||"#f1f1f1",o=t.getElementById(n),r=o||t.createElement("div");return r.style.cssText="position: absolute;top:30px;bottom:40px;left:1px;right:1px;z-index: 10020;padding:0;margin:0;background:"+e+";opacity: "+i+";filter: alpha(opacity="+100*i+");display: none;",r.id=n,o||a.appendChild(r),{setDisable:function(){r.style.display="none"},setEnable:function(){r.style.display="block"}}},s=function(e,t,n){var i=new CKEDITOR.dom.element("div"),o=new CKEDITOR.dom.element("input"),r=new CKEDITOR.dom.element("label"),l="wscGrammerSuggest"+e+"_"+t;return i.addClass("cke_dialog_ui_input_radio"),i.setAttribute("role","presentation"),i.setStyles({width:"97%",padding:"5px","white-space":"normal"}),o.setAttributes({type:"radio",value:t,name:"wscGrammerSuggest",id:l}),o.setStyles({"float":"left"}),o.on("click",function(e){a.textNode.GrammTab.setValue(e.sender.getValue())}),n&&o.setAttribute("checked",!0),o.addClass("cke_dialog_ui_radio_input"),r.appendText(e),r.setAttribute("for",l),r.setStyles({display:"block","line-height":"16px","margin-left":"18px","white-space":"normal"}),i.append(o),i.append(r),i},d=function(n){var i=new e(n),n=document.getElementById("wscLang"+a.CKNumber),o=a.iframeNumber+"_"+a.dialog._.currentTabId;a.buildOptionLang(i.setLangList),h[i.getCurrentLangGroup(a.selectingLang)](),n.onchange=function(){h[i.getCurrentLangGroup(this.value)](),a.div_overlay.setEnable(),a.selectingLang=this.value,t.postMessage.send({message:{changeLang:a.selectingLang,text:a.dataTemp},target:a.targetFromFrame[o],id:"selectionLang_outer__page"})}},c=function(e){if("no_any_suggestions"==e){e="No suggestions",a.LocalizationButton.ChangeTo.instance.disable(),a.LocalizationButton.ChangeAll.instance.disable();var t=function(e){e=a.LocalizationButton[e].instance,e.getElement().hasClass("cke_disabled")?e.getElement().setStyle("color","#a0a0a0"):e.disable()};t("ChangeTo"),t("ChangeAll")}else a.LocalizationButton.ChangeTo.instance.enable(),a.LocalizationButton.ChangeAll.instance.enable(),a.LocalizationButton.ChangeTo.instance.getElement().setStyle("color","#333"),a.LocalizationButton.ChangeAll.instance.getElement().setStyle("color","#333");return e},u={iframeOnload:function(){a.div_overlay.setEnable();var e=a.dialog._.currentTabId;p(a.targetFromFrame[a.iframeNumber+"_"+e],a.cmd[e])},suggestlist:function(e){delete e.id,a.div_overlay_no_check.setDisable(),v(),d(a.langList),"false"==a.show_grammar&&f();var t=c(e.word),n="";for(t instanceof Array&&(t=e.word[0]),n=t=t.split(","),i.clear(),a.textNode.SpellTab.setValue(n[0]),e=0;e<n.length;e++)i.add(n[e],n[e]);b(),a.div_overlay.setDisable()},grammerSuggest:function(e){delete e.id,delete e.mocklangs,v();var t=e.grammSuggest[0];a.grammerSuggest.getElement().setHtml(""),a.textNode.GrammTab.reset(),a.textNode.GrammTab.setValue(t),a.textNodeInfo.GrammTab.getElement().setHtml(""),a.textNodeInfo.GrammTab.getElement().setText(e.info);for(var e=e.grammSuggest,t=e.length,n=!0,i=0;t>i;i++)a.grammerSuggest.getElement().append(s(e[i],e[i],n)),n=!1;b(),a.div_overlay.setDisable()},thesaurusSuggest:function(e){delete e.id,delete e.mocklangs,v(),a.selectNodeResponce=e,a.textNode.Thesaurus.reset(),a.selectNode.categories.clear();for(var t in e)a.selectNode.categories.add(t,t);e=a.selectNode.categories.getInputElement().getChildren().$[0].value,a.selectNode.categories.getInputElement().getChildren().$[0].selected=!0,a.buildOptionSynonyms(e),b(),a.div_overlay.setDisable()},finish:function(e){delete e.id,a.dialog.getContentElement(a.dialog._.currentTabId,"bottomGroup").getElement().hide(),a.dialog.getContentElement(a.dialog._.currentTabId,"BlockFinishChecking").getElement().show(),a.div_overlay.setDisable()},settext:function(e){delete e.id,a.dialog.getParentEditor().focus(),a.dialog.getParentEditor().setData(e.text,a.dataTemp=""),a.dialog.hide()},ReplaceText:function(e){delete e.id,a.div_overlay.setEnable(),a.dataTemp=e.text,a.selectingLang=e.currentLang,window.setTimeout(function(){a.div_overlay.setDisable()},500),o(a.LocalizationButton),r(a.LocalizationLabel)},options_checkbox_send:function(e){delete e.id,e={osp:t.cookie.get("osp"),udn:t.cookie.get("udn"),cust_dic_ids:a.cust_dic_ids},t.postMessage.send({message:e,target:a.targetFromFrame[a.iframeNumber+"_"+a.dialog._.currentTabId],id:"options_outer__page"})},getOptions:function(e){var n=e.DefOptions.udn;if(a.LocalizationComing=e.DefOptions.localizationButtonsAndText,a.show_grammar=e.show_grammar,a.langList=e.lang,a.bnr=e.bannerId){a.setHeightBannerFrame();var i=e.banner;a.dialog.getContentElement(a.dialog._.currentTabId,"banner").getElement().setHtml(i)}else a.setHeightFrame();"false"==a.show_grammar&&f(),"undefined"==n&&(a.userDictionaryName?(n=a.userDictionaryName,i={osp:t.cookie.get("osp"),udn:a.userDictionaryName,cust_dic_ids:a.cust_dic_ids,id:"options_dic_send",udnCmd:"create"},t.postMessage.send({message:i,target:a.targetFromFrame[void 0]})):n=""),t.cookie.set("osp",e.DefOptions.osp),t.cookie.set("udn",n),t.cookie.set("cust_dic_ids",e.DefOptions.cust_dic_ids),t.postMessage.send({id:"giveOptions"})},options_dic_send:function(){var e={osp:t.cookie.get("osp"),udn:t.cookie.get("udn"),cust_dic_ids:a.cust_dic_ids,id:"options_dic_send",udnCmd:t.cookie.get("udnCmd")};t.postMessage.send({message:e,target:a.targetFromFrame[a.iframeNumber+"_"+a.dialog._.currentTabId]})},data:function(e){delete e.id},giveOptions:function(){},setOptionsConfirmF:function(){},setOptionsConfirmT:function(){n.setValue("")},clickBusy:function(){a.div_overlay.setEnable()},suggestAllCame:function(){a.div_overlay.setDisable(),a.div_overlay_no_check.setDisable()},TextCorrect:function(){d(a.langList)}},m=function(e){e=e||window.event,e=window.JSON.parse(e.data),u[e.id](e)},p=function(e,n,i,o){n=n||CKEDITOR.config.wsc_cmd||"spell",i=i||a.dataTemp,t.postMessage.send({message:{customerId:a.wsc_customerId,text:i,txt_ctrl:a.TextAreaNumber,cmd:n,cust_dic_ids:a.cust_dic_ids,udn:a.userDictionaryName,slang:a.selectingLang,reset_suggest:o||!1},target:e,id:"data_outer__page"}),a.div_overlay.setEnable()},h={superset:function(){a.dialog.showPage("Thesaurus"),a.dialog.showPage("GrammTab"),a.dialog.showPage("SpellTab")},usual:function(){a.dialog.hidePage("Thesaurus"),f(),a.dialog.showPage("SpellTab")}},g=function(e){var t=new function(e){var t={};return{getCmdByTab:function(a){for(var n in e)t[e[n]]=n;return t[a]}}}(a.cmd);e.selectPage(t.getCmdByTab(CKEDITOR.config.wsc_cmd)),a.sendData(e)},f=function(){a.dialog.hidePage("GrammTab")},b=function(){a.dialog.getContentElement(a.dialog._.currentTabId,"bottomGroup").getElement().show()},v=function(){a.dialog.getContentElement(a.dialog._.currentTabId,"BlockFinishChecking").getElement().hide()};a.CKNumber=CKEDITOR.tools.getNextNumber(),CKEDITOR.dialog.add("checkspell",function(e){var n=function(){a.div_overlay.setEnable();var n=a.dialog._.currentTabId,i=a.iframeNumber+"_"+n,o=a.textNode[n].getValue();t.postMessage.send({message:{cmd:this.getElement().getAttribute("title-cmd"),tabId:n,new_word:o},target:a.targetFromFrame[i],id:"cmd_outer__page"}),"FinishChecking"==this.getElement().getAttribute("title-cmd")&&e.config.wsc_onFinish.call(CKEDITOR.document.getWindow().getFrame())},o="file:"==document.location.protocol?"http:":document.location.protocol,r=CKEDITOR.config.wsc_customLoaderScript||o+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+CKEDITOR.config.wsc_customerId+"&cmd=script&doc=wsc&schema=22";return{title:e.config.wsc_dialogTitle||e.lang.wsc.title,minWidth:560,minHeight:444,buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){a.dialog=this,a.TextAreaNumber="cke_textarea_"+CKEDITOR.currentInstance.name,t.postMessage.init(m),a.dataTemp=CKEDITOR.currentInstance.getData(),a.OverlayPlace=a.dialog.parts.tabs.getParent().$,CKEDITOR.scriptLoader.load(r,function(t){CKEDITOR.config&&CKEDITOR.config.wsc&&CKEDITOR.config.wsc.DefaultParams?(a.serverLocationHash=CKEDITOR.config.wsc.DefaultParams.serviceHost,a.logotype=CKEDITOR.config.wsc.DefaultParams.logoPath,a.loadIcon=CKEDITOR.config.wsc.DefaultParams.iconPath,a.loadIconEmptyEditor=CKEDITOR.config.wsc.DefaultParams.iconPathEmptyEditor,a.LangComparer=new CKEDITOR.config.wsc.DefaultParams._SP_FCK_LangCompare):(a.serverLocationHash=DefaultParams.serviceHost,a.logotype=DefaultParams.logoPath,a.loadIcon=DefaultParams.iconPath,a.loadIconEmptyEditor=DefaultParams.iconPathEmptyEditor,a.LangComparer=new _SP_FCK_LangCompare),a.pluginPath=CKEDITOR.getUrl(e.plugins.wsc.path),a.iframeNumber=a.TextAreaNumber,a.serverLocation="#server="+a.serverLocationHash,a.templatePath=a.pluginPath+"dialogs/tmp.html",a.LangComparer.setDefaulLangCode(a.defaultLanguage),a.currentLang=e.config.wsc_lang||a.LangComparer.getSPLangCode(e.langCode),a.div_overlay=new l({opacity:"1",background:"#fff url("+a.loadIcon+") no-repeat 50% 50%",target:a.OverlayPlace});var n=CKEDITOR.document.getById("cke_dialog_tabs_"+(a.CKNumber+1));n.setStyle("width","97%"),n.getElementsByTag("DIV").count()||n.append(a.buildSelectLang()),a.div_overlay_no_check=new l({opacity:"1",id:"no_check_over",background:"#fff url("+a.loadIconEmptyEditor+") no-repeat 50% 50%",target:a.OverlayPlace}),t&&(g(a.dialog),a.dialog.setupContent(a.dialog))})},onHide:function(){a.dataTemp=""},contents:[{id:"SpellTab",label:"SpellChecker",accessKey:"S",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(e){var e=a.iframeNumber+"_"+e._.currentTabId,t=document.getElementById(e);a.targetFromFrame[e]=t.contentWindow}},{type:"hbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",widths:["50%","50%"],children:[{type:"hbox",id:"leftCol",align:"left",width:"50%",children:[{type:"vbox",id:"rightCol1",widths:["50%","50%"],children:[{type:"text",id:"text",label:a.LocalizationLabel.ChangeTo.text+":",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",width:"140px","default":"",onShow:function(){a.textNode.SpellTab=this,a.LocalizationLabel.ChangeTo.instance=this},onHide:function(){this.reset()}},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"text",id:"labelSuggestions",label:a.LocalizationLabel.Suggestions.text+":",onShow:function(){a.LocalizationLabel.Suggestions.instance=this,this.getInputElement().hide()}},{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype,this.getElement().getParent().setStyles({"text-align":"left"})}}]},{type:"select",id:"list_of_suggestions",labelStyle:"font: 12px/25px arial, sans-serif;",size:"6",inputStyle:"width: 140px; height: auto;",items:[["loading..."]],onShow:function(){i=this},onHide:function(){this.clear()},onChange:function(){a.textNode.SpellTab.setValue(this.getValue())}}]}]}]},{type:"hbox",id:"rightCol",align:"right",width:"50%",children:[{type:"vbox",id:"rightCol_col__left",widths:["50%","50%","50%","50%"],children:[{type:"button",id:"ChangeTo",label:a.LocalizationButton.ChangeTo.text,title:"Change to",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.ChangeTo.instance=this},onClick:n},{type:"button",id:"ChangeAll",label:a.LocalizationButton.ChangeAll.text,title:"Change All",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.ChangeAll.instance=this},onClick:n},{type:"button",id:"AddWord",label:a.LocalizationButton.AddWord.text,title:"Add word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.AddWord.instance=this},onClick:n},{type:"button",id:"FinishChecking",label:a.LocalizationButton.FinishChecking.text,title:"Finish Checking",style:"width: 100%;margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.FinishChecking.instance=this},onClick:n}]},{type:"vbox",id:"rightCol_col__right",widths:["50%","50%","50%"],children:[{type:"button",id:"IgnoreWord",label:a.LocalizationButton.IgnoreWord.text,title:"Ignore word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.IgnoreWord.instance=this},onClick:n},{type:"button",id:"IgnoreAllWords",label:a.LocalizationButton.IgnoreAllWords.text,title:"Ignore all words",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),a.LocalizationButton.IgnoreAllWords.instance=this},onClick:n},{type:"button",id:"option",label:a.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){a.LocalizationButton.Options.instance=this,"file:"==document.location.protocol&&this.disable()},onClick:function(){"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):e.openDialog("options")}}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().hide()},onHide:b,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",setup:function(){this.getChild()[0].getElement().$.src=a.logotype,this.getChild()[0].getElement().getParent().setStyles({"text-align":"center"})},children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">'}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"Option_button",label:a.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),"file:"==document.location.protocol&&this.disable()},onClick:function(){"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):e.openDialog("options")}},{type:"button",id:"FinishChecking",label:a.LocalizationButton.FinishChecking.text,title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]}]}]}]},{id:"GrammTab",label:"Grammar",accessKey:"G",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"GrammarContent",html:"",setup:function(){var e=a.iframeNumber+"_"+a.dialog._.currentTabId,t=document.getElementById(e);a.targetFromFrame[e]=t.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",children:[{type:"hbox",id:"leftCol",widths:["66%","34%"],children:[{type:"vbox",children:[{type:"text",id:"text",label:"Change to:",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",inputStyle:"float: right; width: 200px;","default":"",onShow:function(){a.textNode.GrammTab=this},onHide:function(){this.reset()}},{type:"html",id:"html_text",html:"<div style='min-height: 17px; line-height: 17px; padding: 5px; text-align: left;background: #F1F1F1;color: #595959; white-space: normal!important;'></div>",onShow:function(){a.textNodeInfo.GrammTab=this}},{type:"html",id:"radio",html:"",onShow:function(){a.grammerSuggest=this}}]},{type:"vbox",children:[{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n},{type:"button",id:"IgnoreWord",label:"Ignore word",title:"Ignore word",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n},{type:"button",id:"IgnoreAllWords",label:"Ignore Problem",title:"Ignore Problem",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 133px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().hide()},onHide:b,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]}]}]}]},{id:"Thesaurus",label:"Thesaurus",accessKey:"T",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(){var e=a.iframeNumber+"_"+a.dialog._.currentTabId,t=document.getElementById(e);a.targetFromFrame[e]=t.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",children:[{type:"hbox",widths:["75%","25%"],children:[{type:"vbox",children:[{type:"hbox",widths:["65%","35%"],children:[{type:"text",id:"ChangeTo",label:"Change to:",labelLayout:"horizontal",inputStyle:"width: 160px;",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onShow:function(){a.textNode.Thesaurus=this},onHide:function(){this.reset()}},{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 121px; margin-top: 1px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]},{type:"hbox",children:[{type:"select",id:"categories",label:"Categories:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){a.selectNode.categories=this},onHide:function(){this.clear()},onChange:function(){a.buildOptionSynonyms(this.getValue())}},{type:"select",id:"synonyms",label:"Synonyms:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){a.selectNode.synonyms=this,a.textNode.Thesaurus.setValue(this.getValue())},onHide:function(){this.clear()},onChange:function(){a.textNode.Thesaurus.setValue(this.getValue())}}]}]},{type:"vbox",width:"120px",style:"margin-top:46px;",children:[{type:"html",id:"logotype",label:"WebSpellChecker.net",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 121px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().hide()},children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=a.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:n}]}]}]}]}]}}),CKEDITOR.dialog.add("options",function(){var e=null,i={},o={},r=null,l=null;t.cookie.get("udn"),t.cookie.get("osp");var s=function(){l=this.getElement().getAttribute("title-cmd");var e=[];e[0]=o.IgnoreAllCapsWords,e[1]=o.IgnoreWordsNumbers,e[2]=o.IgnoreMixedCaseWords,e[3]=o.IgnoreDomainNames,e=e.toString().replace(/,/g,""),t.cookie.set("osp",e),t.cookie.set("udnCmd",l?l:"ignore"),"delete"!=l&&(e="",""!==n.getValue()&&(e=n.getValue()),t.cookie.set("udn",e)),t.postMessage.send({id:"options_dic_send"})},d=function(){r.getElement().setHtml(a.LocalizationComing.error),r.getElement().show()};return{title:a.LocalizationComing.Options,minWidth:430,minHeight:130,resizable:CKEDITOR.DIALOG_RESIZE_NONE,contents:[{id:"OptionsTab",label:"Options",accessKey:"O",elements:[{type:"hbox",id:"options_error",children:[{type:"html",style:"display: block;text-align: center;white-space: normal!important; font-size: 12px;color:red",html:"<div></div>",onShow:function(){r=this}}]},{type:"vbox",id:"Options_content",children:[{type:"hbox",id:"Options_manager",widths:["52%","48%"],children:[{type:"fieldset",label:"Spell Checking Options",style:"border: none;margin-top: 13px;padding: 10px 0 10px 10px",onShow:function(){this.getInputElement().$.children[0].innerHTML=a.LocalizationComing.SpellCheckingOptions},children:[{type:"vbox",id:"Options_checkbox",children:[{type:"checkbox",id:"IgnoreAllCapsWords",label:"Ignore All-Caps Words",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){o[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreWordsNumbers",label:"Ignore Words with Numbers",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){o[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreMixedCaseWords",label:"Ignore Mixed-Case Words",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){o[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreDomainNames",label:"Ignore Domain Names",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){o[this.id]=this.getValue()?1:0}}]}]},{type:"vbox",id:"Options_DictionaryName",children:[{type:"text",id:"DictionaryName",style:"margin-bottom: 10px",label:"Dictionary Name:",labelLayout:"vertical",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onLoad:function(){n=this,this.setValue(a.userDictionaryName?a.userDictionaryName:(t.cookie.get("udn"),this.getValue()))},onShow:function(){n=this,this.setValue(t.cookie.get("udn")?t.cookie.get("udn"):this.getValue()),this.setLabel(a.LocalizationComing.DictionaryName)},onHide:function(){this.reset()}},{type:"hbox",id:"Options_buttons",children:[{type:"vbox",id:"Options_leftCol_col",widths:["50%","50%"],children:[{type:"button",id:"create",label:"Create",title:"Create",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Create)},onClick:s},{type:"button",id:"restore",label:"Restore",title:"Restore",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Restore)},onClick:s}]},{type:"vbox",id:"Options_rightCol_col",widths:["50%","50%"],children:[{type:"button",id:"rename",label:"Rename",title:"Rename",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Rename)},onClick:s},{type:"button",id:"delete",label:"Remove",title:"Remove",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){this.getElement().setText(a.LocalizationComing.Remove)},onClick:s}]}]}]}]},{type:"hbox",id:"Options_text",children:[{type:"html",style:"text-align: justify;margin-top: 15px;white-space: normal!important; font-size: 12px;color:#777;",html:"<div>"+a.LocalizationComing.OptionsTextIntro+"</div>",onShow:function(){this.getElement().setText(a.LocalizationComing.OptionsTextIntro)}}]}]}]}],buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton],onOk:function(){var e=[];e[0]=o.IgnoreAllCapsWords,e[1]=o.IgnoreWordsNumbers,e[2]=o.IgnoreMixedCaseWords,e[3]=o.IgnoreDomainNames,e=e.toString().replace(/,/g,""),t.cookie.set("osp",e),t.cookie.set("udn",n.getValue()),t.postMessage.send({id:"options_checkbox_send"}),r.getElement().hide(),r.getElement().setHtml(" ")},onLoad:function(){e=this,t.postMessage.init(d),i.IgnoreAllCapsWords=e.getContentElement("OptionsTab","IgnoreAllCapsWords"),i.IgnoreWordsNumbers=e.getContentElement("OptionsTab","IgnoreWordsNumbers"),i.IgnoreMixedCaseWords=e.getContentElement("OptionsTab","IgnoreMixedCaseWords"),i.IgnoreDomainNames=e.getContentElement("OptionsTab","IgnoreDomainNames")},onShow:function(){var e=t.cookie.get("osp").split("");o.IgnoreAllCapsWords=e[0],o.IgnoreWordsNumbers=e[1],o.IgnoreMixedCaseWords=e[2],o.IgnoreDomainNames=e[3],parseInt(o.IgnoreAllCapsWords,10)?i.IgnoreAllCapsWords.setValue("checked",!1):i.IgnoreAllCapsWords.setValue("",!1),parseInt(o.IgnoreWordsNumbers,10)?i.IgnoreWordsNumbers.setValue("checked",!1):i.IgnoreWordsNumbers.setValue("",!1),parseInt(o.IgnoreMixedCaseWords,10)?i.IgnoreMixedCaseWords.setValue("checked",!1):i.IgnoreMixedCaseWords.setValue("",!1),parseInt(o.IgnoreDomainNames,10)?i.IgnoreDomainNames.setValue("checked",!1):i.IgnoreDomainNames.setValue("",!1),o.IgnoreAllCapsWords=i.IgnoreAllCapsWords.getValue()?1:0,o.IgnoreWordsNumbers=i.IgnoreWordsNumbers.getValue()?1:0,o.IgnoreMixedCaseWords=i.IgnoreMixedCaseWords.getValue()?1:0,o.IgnoreDomainNames=i.IgnoreDomainNames.getValue()?1:0,i.IgnoreAllCapsWords.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreAllCapsWords,i.IgnoreWordsNumbers.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreWordsWithNumbers,i.IgnoreMixedCaseWords.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreMixedCaseWords,i.IgnoreDomainNames.getElement().$.lastChild.innerHTML=a.LocalizationComing.IgnoreDomainNames}}}),CKEDITOR.dialog.on("resize",function(e){var e=e.data,t=e.dialog,n=CKEDITOR.document.getById(a.iframeNumber+"_"+t._.currentTabId);"checkspell"==t._.name&&(a.bnr?n&&n.setSize("height",e.height-310):n&&n.setSize("height",e.height-220))}),CKEDITOR.on("dialogDefinition",function(e){var t=e.data.definition;a.onLoadOverlay=new l({opacity:"1",background:"#fff",target:t.dialog.parts.tabs.getParent().$}),a.onLoadOverlay.setEnable(),t.dialog.on("show",function(){}),t.dialog.on("cancel",function(){return t.dialog.getParentEditor().config.wsc_onClose.call(this.document.getWindow().getFrame()),a.div_overlay.setDisable(),!1},this,null,-1)})}();