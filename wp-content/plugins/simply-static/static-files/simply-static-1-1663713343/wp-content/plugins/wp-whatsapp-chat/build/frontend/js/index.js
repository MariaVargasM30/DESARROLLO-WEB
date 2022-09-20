(()=>{"use strict";var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.jQuery;var a=t.n(e);Array.prototype.timedaysIncludes||Object.defineProperty(Array.prototype,"timedaysIncludes",{value:function(t){return!!this.includes(parseInt(t))||!!this.includes(t.toString())}}),function(t,e,a,i){function n(e,a){this.$qlwapp=t(e),this.init(this)}function o(){t("div#qlwapp").qlwapp()}t.fn.simulateClick=function(){return this.each((function(){if("createEvent"in a){var t=this.ownerDocument,e=t.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,t.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),this.dispatchEvent(e)}else this.click()}))},n.prototype={timeDateToString:function(t){var e=""+t.getMinutes();return 1===e.length&&(e="0"+e),t.getHours()+":"+e},timeStringToInt:function(t,e){return parseInt(t+e)},isMobile:function(t){const a=e.matchMedia("(pointer:coarse)");return a&&a.matches},init:function(a){var i=this.$qlwapp;if(i.on("qlwapp.init",(function(t){a.mobiledevice=a.isMobile()})),i.on("qlwapp.time",(function(e){var i=t(e.target),n=i.data("timedays")||[],o=parseInt(i.data("timezone"))||0,p=new Date((new Date).getTime()+60*o*1e3).getUTCDay().toString();if(n&&n.length&&!n.includes(p)){i.addClass("qlwapp-timeout"),i.find(".qlwapp-days").show(),i.find(".qlwapp-time").hide();var l=function(t,e){for(var a=t;a<=6;a++)if(e.timedaysIncludes(a))return a;for(a=0;a<=t;a++)if(e.timedaysIncludes(a))return a}(p,n);return i.find(".day"+l).addClass("qlwapp-available-day"),!0}n&&n.length&&n.includes(p)&&(i.find(".qlwapp-days").hide(),i.find(".qlwapp-time").show());var s=i.data("timefrom")||!1,r=i.data("timeto")||!1;if(!r||!s||s===r)return!0;var d,c,u=new Date,g=-u.getTimezoneOffset()-o,f=new Date,w=new Date;d=a.timeStringToInt(s[0],s[1]),c=a.timeStringToInt(s[3],s[4]),w.setHours(d),w.setMinutes(c+g),d=a.timeStringToInt(r[0],r[1]),c=a.timeStringToInt(r[3],r[4]),f.setHours(d),f.setMinutes(c+g);let h=w.getTime(),m=f.getTime();if(h>m&&(h-=864e5),u.getTime()>=h&&u.getTime()<=m||(i.addClass("qlwapp-timeout"),i.find(".qlwapp-days").hide(),i.find(".qlwapp-time").show()),!o)return!0;i.find(".from").text(a.timeDateToString(w)),i.find(".to").text(a.timeDateToString(f))})),i.on("qlwapp.pro",(function(e){i.find(".qlwapp-toggle").trigger("qlwapp.time"),i.find(".qlwapp-account").each((function(e,a){t(a).trigger("qlwapp.time")}))})),i.on("qlwapp.resize",(function(e){t(this).hasClass("qlwapp-show")&&t(this).trigger("qlwapp.toggle")})),i.on("qlwapp.init",(function(t){a.mobiledevice?i.addClass("mobile").removeClass("desktop"):i.addClass("desktop").removeClass("mobile"),i.addClass("qlwapp-js-ready")})),i.on("qlwapp.init",(function(t){i.hasClass("qlwapp-premium")&&i.trigger("qlwapp.pro")})),i.addClass("qlwapp-js-ready").trigger("qlwapp.init"),i.on("qlwapp.height",(function(i){var n=t(i.delegateTarget),o=n.find(".qlwapp-body").find(".qlwapp-carousel"),p=n.find(".qlwapp-header"),l=n.find(".qlwapp-footer"),s=t(e).innerHeight()-p.outerHeight()-l.outerHeight();a.mobiledevice||(s=.7*t(e).innerHeight()-p.outerHeight()-l.outerHeight()),o.css({"max-height":s+"px"})})),i.on("qlwapp.toggle",(function(e){var a=t(e.delegateTarget),i=a.find(".qlwapp-box");a.addClass("qlwapp-transition"),i.removeClass("response texting"),setTimeout((function(){a.toggleClass("qlwapp-show").trigger("qlwapp.height")}),10),setTimeout((function(){a.toggleClass("qlwapp-transition")}),300)})),i.on("click","[data-action=box], [data-action=close]",(function(e){e.preventDefault(),t(e.delegateTarget).trigger("qlwapp.toggle")})),i.on("click","[data-action=open]",(function(e){var i="https://api.whatsapp.com/send";a.mobiledevice||(i="https://web.whatsapp.com/send");var n=t(this),o=n.data("message")||"",p=n.data("phone")||"";t(this).attr("href",i+"?phone="+p+"&text="+o)})),i.on("click","[data-action=previous]",(function(e){e.preventDefault();var a=t(e.delegateTarget).find(".qlwapp-box");a.addClass("closing"),setTimeout((function(){a.removeClass("response").removeClass("closing"),a.removeClass("texting")}),300)})),i.on("click","[data-action=chat]",(function(e){e.preventDefault();var a=t(this),i=t(e.delegateTarget),n=i.find(".qlwapp-box"),o=a.find(".qlwapp-avatar img").attr("src"),p=a.find(".qlwapp-name").text(),l=a.find(".qlwapp-label").text(),s=a.find(".qlwapp-time").text(),r=a.data("message"),d=a.data("phone");n.addClass("response").addClass("opening"),i.trigger("qlwapp.height"),setTimeout((function(){n.removeClass("opening")}),300);var c=n.find(".qlwapp-reply"),u=n.find(".qlwapp-header"),g=u.find(".qlwapp-avatar img"),f=u.find(".qlwapp-number"),w=u.find(".qlwapp-name"),h=u.find(".qlwapp-label"),m=n.find(".qlwapp-message"),q=s?s+" - "+l:l;c.data("phone",d),g.attr("src",o),g.attr("alt",p),f.html(d),w.html(p),h.html(q),m.html(r)})),i.on("click","textarea",(function(t){i.off("qlwapp.resize")})),i.on("keypress","textarea",(function(t){13==t.keyCode&&setTimeout((function(){i.find(".qlwapp-reply").simulateClick("click")}),100)})),i.on("keyup","[data-action=response]",(function(e){e.preventDefault();var a=t(this).find("textarea"),i=t(this).find("pre"),n=t(this).find(".qlwapp-reply"),o=t(e.delegateTarget).find(".qlwapp-box"),p=o.find(".qlwapp-buttons");i.html(a.val()),setTimeout((function(){o.addClass("texting").css({"padding-bottom":i.outerHeight()}),p.addClass("active");var t=a.val();n.data("message",t),""==t&&(o.removeClass("texting"),p.removeClass("active"))}),300)})),i.hasClass("auto-load")&&t.cookie&&!t.cookie("qlwapp-auto-load")){var n=i.data("autoloadelay");setTimeout((()=>{i.trigger("qlwapp.toggle")}),n),t.cookie("qlwapp-auto-load","auto open cookie",{expires:1})}}},t.fn.qlwapp=function(e){var a,o=arguments;return e===i||"object"==typeof e?this.each((function(){t.data(this,"plugin_qlwapp")||t.data(this,"plugin_qlwapp",new n(this,e))})):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each((function(){var i=t.data(this,"plugin_qlwapp");i instanceof n&&"function"==typeof i[e]&&(a=i[e].apply(i,Array.prototype.slice.call(o,1))),"destroy"===e&&t.data(this,"plugin_qlwapp",null)})),a!==i?a:this):void 0},o(),t(e).on("load",(function(){o()})),t(e).on("click",(function(e){t(e.target).closest("#qlwapp.qlwapp-show").length||t("div#qlwapp.qlwapp-show").trigger("qlwapp.toggle")})),t(e).on("resize",(function(e){t("div#qlwapp").trigger("qlwapp.resize"),t("div#qlwapp").trigger("qlwapp.init")}))}(a(),window,document)})();