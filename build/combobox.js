modulex.add("combobox",["attribute","util","io","xtemplate/runtime","node","component/control","menu"],function(e,t,a){{var n,r,s,i,l,u,o=e("attribute"),c=e("util"),d=e("io"),v=e("xtemplate/runtime"),h=e("node"),g=e("component/control");e("menu")}n=function(e){var t=e=function n(e){function t(e,t){e.data,e.affix;t.data+='\r\n<div class="',d.line=6;var a;a=p(n,e,{escape:1,params:["trigger"]},t,["getBaseCssClasses"]),t=t.writeEscaped(a),t.data+='">\r\n    <div class="',d.line=7;var r;return r=p(n,e,{escape:1,params:["trigger-inner"]},t,["getBaseCssClasses"]),t=t.writeEscaped(r),t.data+='">&#x25BC;</div>\r\n</div>\r\n',t}function a(e,t){e.data,e.affix;return t.data+="\r\n    disabled\r\n    ",t}function r(e,t){e.data,e.affix;return t.data+="none",t}function s(e,t){e.data,e.affix;return t.data+="block",t}function i(e,t){e.data,e.affix;return t.data+='\r\n         style="display:none"\r\n         ',t}{var l,n=this,u=n.root,o=n.buffer,c=n.scope,d=(n.runtime,n.name,n.pos),v=c.data,h=c.affix,g=u.nativeCommands,f=u.utils,p=f.callFn,m=(f.callCommand,g.range,g.foreach,g.forin,g.each,g["with"],g["if"]);g.set,g.include,g.parse,g.extend,g.block,g.macro,g["debugger"]}o.data+='<div class="';var C;C=p(n,c,{escape:1,params:["invalid-el"]},o,["getBaseCssClasses"]),o=o.writeEscaped(C),o.data+='">\r\n    <div class="',d.line=2;var b;b=p(n,c,{escape:1,params:["invalid-inner"]},o,["getBaseCssClasses"]),o=o.writeEscaped(b),o.data+='"></div>\r\n</div>\r\n\r\n',d.line=5,d.line=5;var E=(l=h.hasTrigger)!==e?l:(l=v.hasTrigger)!==e?l:c.resolveLooseUp(["hasTrigger"]);o=m.call(n,c,{params:[E],fn:t},o),o.data+='\r\n\r\n<div class="',d.line=11;var w;w=p(n,c,{escape:1,params:["input-wrap"]},o,["getBaseCssClasses"]),o=o.writeEscaped(w),o.data+='">\r\n\r\n    <input id="ks-combobox-input-',d.line=13;var x=(l=h.id)!==e?l:(l=v.id)!==e?l:c.resolveLooseUp(["id"]);o=o.writeEscaped(x),o.data+='"\r\n           aria-haspopup="true"\r\n           aria-autocomplete="list"\r\n           aria-haspopup="true"\r\n           role="autocomplete"\r\n           aria-expanded="false"\r\n\r\n    ',d.line=20;var I=(l=h.disabled)!==e?l:(l=v.disabled)!==e?l:c.resolveLooseUp(["disabled"]);o=m.call(n,c,{params:[I],fn:a},o),o.data+='\r\n\r\n    autocomplete="off"\r\n    class="',d.line=25;var D;D=p(n,c,{escape:1,params:["input"]},o,["getBaseCssClasses"]),o=o.writeEscaped(D),o.data+='"\r\n\r\n    value="',d.line=27;var T=(l=h.value)!==e?l:(l=v.value)!==e?l:c.resolveLooseUp(["value"]);o=o.writeEscaped(T),o.data+='"\r\n    />\r\n\r\n\r\n    <label for="ks-combobox-input-',d.line=31;var y=(l=h.id)!==e?l:(l=v.id)!==e?l:c.resolveLooseUp(["id"]);o=o.writeEscaped(y),o.data+="\"\r\n            style='display:",d.line=32;var B=(l=h.value)!==e?l:(l=v.value)!==e?l:c.resolveLooseUp(["value"]);o=m.call(n,c,{params:[B],fn:r,inverse:s},o),o.data+=";'\r\n    class=\"",d.line=33;var V;V=p(n,c,{escape:1,params:["placeholder"]},o,["getBaseCssClasses"]),o=o.writeEscaped(V),o.data+='">\r\n    ',d.line=34;var S=(l=h.placeholder)!==e?l:(l=v.placeholder)!==e?l:c.resolveLooseUp(["placeholder"]);o=o.writeEscaped(S),o.data+='\r\n    </label>\r\n\r\n    <div class="',d.line=37;var U;U=p(n,c,{escape:1,params:["clear"]},o,["getBaseCssClasses"]),o=o.writeEscaped(U),o.data+='"\r\n         unselectable="on"\r\n         ',d.line=39;var W=(l=h.value)!==e?l:(l=v.value)!==e?l:c.resolveLooseUp(["value"]);o=m.call(n,c,{params:[!W],fn:i},o),o.data+='\r\n         onmousedown="return false;"><div\r\n            class="',d.line=43;var _;return _=p(n,c,{escape:1,params:["clear-inner"]},o,["getBaseCssClasses"]),o=o.writeEscaped(_),o.data+='">clear</div></div>\r\n</div>\r\n',o};return t.TPL_NAME=a.id||a.name,e}(),r=function(e){function t(e,t){var a=[],r=0;return e?(n.each(t,function(t){-1!==t.indexOf(e)&&a.push(t),r++}),a):t}var a=o,n=c;return e=a.extend({fetchData:function(e,t,a){var n=this.get("parse"),r=this.get("data");r=n(e,r),t.call(a,r)}},{ATTRS:{data:{value:[]},parse:{value:t}}})}(),s=function(e){var t=d,a=o;return e=a.extend({fetchData:function(e,a,n){var r,s=this,i=s.get("paramName"),l=s.get("parse"),u=s.get("cache"),o=s.get("allowEmpty");if(s.caches=s.caches||{},s.io&&(s.io.abort(),s.io=null),!e&&o!==!0)return a.call(n,[]);if(u&&(r=s.caches[e]))return a.call(n,r);var c=s.get("xhrCfg");return c.data=c.data||{},c.data[i]=e,c.success=function(t){l&&(t=l(e,t)),s.setInternal("data",t),u&&(s.caches[e]=t),a.call(n,t)},s.io=t(c),void 0}},{ATTRS:{paramName:{value:"q"},allowEmpty:{},cache:{},parse:{},xhrCfg:{valueFn:function(){return{}}}}})}(),i=function(e){var t=n,a=v,r=new a(t);return e=function(){return r.render.apply(r,arguments)}}(),l=function(e){function t(e){for(var t=0;t<e.length;t++)if(!e[t].get("disabled"))return e[t];return null}function a(){v(this)}function n(){var e=this;setTimeout(function(){f(e)},0)}function r(){var e=this;e.focus(),f(e)}function s(){var e=this;e.setCurrentValue(e.getCurrentValue(),{force:1})}function l(e){var t,i=this,l=i.get("menu");if(!e||l===e.target){var o=i.get("input"),c=l.get("el");t=l.get("contentEl"),o.attr("aria-owns",c.attr("id")),c.on("focusout",a,i),c.on("focusin",n,i),t.on("mouseover",r,i),t.on("mousedown",s,i),i.get("matchElWidth")&&c.getWindow().on("resize",u,i)}}function u(){var e=this,t=e.get("menu");if(t.get("visible")){var a=e.get("el"),n=t.get("el"),r=(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("borderRightWidth"),10)||0);t.set("width",a[0].offsetWidth-r)}}function o(e){var t,a=e.target,n=this;a.isMenuItem&&(t=a.get("textContent"),n.setCurrentValue(t),n._savedValue=t,n.set("collapsed",!0))}function d(e,t){var a=e.$el,n=e.getBaseCssClasses("invalid"),r=e.get("invalidEl");t?(a.addClass(n),r.attr("title",t),r.show()):(a.removeClass(n),r.hide())}function v(e){e._focusoutDismissTimer||(e._focusoutDismissTimer=setTimeout(function(){e._focusoutDismissTimer&&e.set("collapsed",!0)},50))}function f(e){var t=e._focusoutDismissTimer;t&&(clearTimeout(t),e._focusoutDismissTimer=null)}function p(e){this.set("value",e.target.value,{data:{causedByInputEvent:1}})}function m(e){var t,a,n,r=this,s=[],i=r.get("menu");if(e=r.normalizeData(e),i.set("highlightedItem",null),i.removeChildren(!0),e&&e.length){if(i.addChildren(e),s=i.get("children"),t=r.getCurrentValue(),r.get("highlightMatchItem"))for(n=0;n<s.length;n++)if(s[n].get("textContent")===t){s[n].set("highlighted",!0),i.set("highlightedItem",s[n]),a=!0;break}if(!a&&r.get("autoHighlightFirst"))for(n=0;n<s.length;n++)if(!s[n].get("disabled")){s[n].set("highlighted",!0),i.set("highlightedItem",s[n]);break}r.set("collapsed",!1),r.fire("afterRenderData")}else r.set("collapsed",!0)}var C,b=c,E=h,w=g,x=i,I=E.Event.KeyCode;return C=w.extend({initializer:function(){this.publish("afterRenderData",{bubbles:!1})},_savedValue:null,bindUI:function(){var e=this,t=e.get("input");t.on("input",p,e),e.on("click",o,e);var a=e.get("menu");a.get("rendered")?l.call(e):a.on("afterRenderUI",l,e)},destructor:function(){var e=this;e.get("menu").destroy(),e.$el.getWindow().detach("resize",u,e)},normalizeData:function(e){var t,a,n,r,s=this;if(e&&e.length){for(e=e.slice(0,s.get("maxItemCount")),t=s.get("format")?s.get("format").call(s,s.getCurrentValue(),e):[],n=0;n<e.length;n++)a=e[n],r=t[n]=b.mix({content:a,textContent:a,value:a},t[n]);return t}return t},getCurrentValue:function(){return this.get("value")},setCurrentValue:function(e,t){this.set("value",e,t)},_onSetValue:function(e,t){var a,n=this,r=n.get("clearEl");if(t.causedByInputEvent){if(a=n.getCurrentValue(),void 0===a)return n.set("collapsed",!0),void 0;n._savedValue=a,n.sendRequest(a)}else n.get("input").val(e);e&&r?r.show():!e&&r&&r.hide();var s=n.get("placeholderEl");s&&(e?s.hide():s.show())},handleFocusInternal:function(){var e=this;f(e),e.get("invalidEl")&&d(e,!1)},handleBlurInternal:function(e){var t=this;t.callSuper(e),v(t),t.get("invalidEl")&&t.validate(function(e,a){e?t.get("focused")||a!==t.get("value")||d(t,e):d(t,!1)})},handleMouseDownInternal:function(e){var t,a,n,r=this;r.callSuper(e),t=e.target,n=r.get("trigger"),a=r.get("clearEl"),n&&(n[0]===t||n.contains(t))?(r.get("collapsed")?(r.focus(),r.sendRequest("")):r.set("collapsed",!0),e.preventDefault()):a&&(a[0]===t||a.contains(t))&&(r.get("input").val(""),r.setCurrentValue("",{data:{causedByInputEvent:1}}),a.hide())},handleKeyDownInternal:function(e){var a,n,r,s,i=this,l=e.keyCode,u=i.get("menu");if(n=i.get("input"),a=i.get("updateInputOnDownUp"),u.get("visible")){if(r=u.get("highlightedItem"),a&&r){var o=u.get("children");if(l===I.DOWN&&r===t(o.concat().reverse())||l===I.UP&&r===t(o))return i.setCurrentValue(i._savedValue),r.set("highlighted",!1),!0}return s=u.handleKeyDownInternal(e),r=u.get("highlightedItem"),l===I.ESC?(i.set("collapsed",!0),a&&i.setCurrentValue(i._savedValue),!0):(a&&b.inArray(l,[I.DOWN,I.UP])&&i.setCurrentValue(r.get("textContent")),l===I.TAB&&r&&(r.handleClickInternal(e),i.get("multiple"))?!0:s)}if(l===I.DOWN||l===I.UP){var c=i.getCurrentValue();if(void 0!==c)return i.sendRequest(c),!0}return void 0},validate:function(e){var t=this,a=t.get("validator"),n=t.getCurrentValue();a?a(n,function(t){e(t,n)}):e(!1,n)},sendRequest:function(e){var t=this,a=t.get("dataSource");a.fetchData(e,m,t)},getKeyEventTarget:function(){return this.get("input")},_onSetCollapsed:function(e){var t=this,a=t.$el,n=t.get("menu");if(e)n.hide();else if(f(t),!n.get("visible")){if(t.get("matchElWidth")){n.render();var r=n.get("el"),s=(parseInt(r.css("borderLeftWidth"),10)||0)+(parseInt(r.css("borderRightWidth"),10)||0);n.set("width",a[0].offsetWidth-s)}n.show()}this.get("input").attr("aria-expanded",!e)},_onSetDisabled:function(e,t){this.callSuper(e,t),this.get("input").attr("disabled",e)}},{ATTRS:{handleGestureEvents:{value:!0},focusable:{value:!0},allowTextSelection:{value:!0},contentTpl:{value:x},input:{selector:function(){return"."+this.getBaseCssClass("input")}},value:{value:"",sync:0,render:1,parse:function(){return this.get("input").val()}},trigger:{selector:function(){return"."+this.getBaseCssClass("trigger")}},placeholder:{render:1,sync:0,parse:function(){var e=this.get("placeholderEl");return e&&e.html()}},placeholderEl:{selector:function(){return"."+this.getBaseCssClass("placeholder")}},clearEl:{selector:function(){return"."+this.getBaseCssClass("clear")}},validator:{},invalidEl:{selector:function(){return"."+this.getBaseCssClass("invalid-el")}},hasTrigger:{value:!0,sync:0,render:1},menu:{getter:function(e){return e=e||{},e.isControl||(e.xclass=e.xclass||"popupmenu",e=this.createComponent(e),this.setInternal("menu",e)),e},setter:function(e){if(e.isControl){e.setInternal("parent",this);var t={node:this.$el,points:["bl","tl"],overflow:{adjustX:1,adjustY:1}};b.mix(e.get("align"),t,!1)}}},collapsed:{render:1,sync:0,value:!0},dataSource:{},maxItemCount:{value:99999},matchElWidth:{value:!0},format:{},updateInputOnDownUp:{value:!0},autoHighlightFirst:{},highlightMatchItem:{value:!0}},xclass:"combobox"}),e=C,C.version="1.0.0",e}(),u=function(e){var t=l,a=r,n=s;return t.LocalDataSource=a,t.RemoteDataSource=n,e=t}(),a.exports=u});