var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}!function(e){var t=[];function n(e,n,o){var i=n?"?"+Math.round((new Date).getTime()/1e3):"";if(e+=e.endsWith("/")?"index":"",!n&&t.some(function(t){return t.name==e}))$.each(t,function(t,n){n.name==e&&eval.apply(o||window,[n.script])});else{var s=new XMLHttpRequest;s.open("GET",e+(e.endsWith(".js")?"":".js")+i,!1),s.onreadystatechange=function(){var n=s.response||s.responseText;if(4==s.readyState)switch(s.status){case 200:eval.apply(o||window,[n]),a&&t.push({name:e,script:n})}},s.send(null)}}e.include=e.require=n;var o="Nintendo Switch"===navigator.platform,a="https://web.archive.org/web/20200720171510/https://dns.switchbru.com/js/";if(n(a+"jquery.min"),n(a+"polyfill"),o){n(a+"gamepad");var i=new Gamepad;i.init()}var s,r,c,l,p="https://web.archive.org/web/20200720171510/https://dns.switchbru.com/oauth/";s=r=c=l=!1;var d=$(document.currentScript),u="(-webkit-nintendo-switch-device-mode: -webkit-nintendo-switch-device-";matchMedia(u+"console)").addListener(function(){c&&c(device.mode())});var f={id:"",secret:""},h=!0;e.app={base64Decode:function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))},base64Encode:function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode(parseInt(t,16))}))},currentState:function(){try{return app.base64Decode(app.base64Decode(location.hash.replace("#","")))}catch(e){return""}},exitLoop:function(){h=!1},loadState:function(e){"object"==typeof e?$.each(e,function(e,t){"string"==typeof e||"number"==typeof e?e==app.currentState()&&("function"==typeof t?(r=!0,$(document).ready(function(){t()})):console.log('SBD: The value for the state named "'+e+'" in app.loadState() is not a function.')):console.log("SBD: A state passed to app.loadState() was invalid.")}):console.log("SBD: No state object was passed to app.loadState()!")},mainLoop:function(e,t){if(t="object"==typeof t?t:{},l)console.log("SBD: Ignored duplicate app.mainLoop() function call.");else if("function"==typeof e){var n=Math.round(1e3/("number"==typeof t.fps?t.fps:60)),a=performance.now();!function i(r){if(h){requestAnimationFrame(i);var c=r-a;if(c>n){a=r-c%n;var l=$("#userProfilePopUp").length,p=$("#keyboardApplet").length;if(!o||!$("html:hover").length||"boolean"!=typeof t.allowCursor||t.allowCursor||s){$("#disableCursorPopUp").hide();var u=2==input.getPressed();u&&!d.attr("disable-pushstate")&&history.pushState({},"",""),(l||p)&&(u&&l?$("#userProfilePopUp").fadeOut("slow",function(){$(this).remove()}):p&&u&&C(),b=m=v=0),e()}else $("#disableCursorPopUp").fadeIn("fast");b=m=0}}}(),l=!0,void 0!==t.fps&&"number"!=typeof t.fps&&console.log('SBD: The "fps" setting for app.mainLoop() should be a number. Please check your code.')}else console.log("SBD: No function was passed to app.mainLoop()")},onLoad:function(e){"function"==typeof e?$(document).ready(function(){r||e()}):console.log("SBD: No function was passed to app.onLoad()!")},setState:function(e){O=!0,location.hash=app.base64Encode(app.base64Encode(e))}},e.device={docked:2,handheld:1,isSwitch:o,lang:function(){return navigator.language},mode:function(){return matchMedia(u+"handheld)").matches?1:matchMedia(u+"console)").matches?2:0},modeChanged:function(e){"function"==typeof e?c=e:console.log("SBD: No function was passed to device.modeChanged()!")},modeName:function(){switch(device.mode()){case 1:return"Handheld";case 2:return"Docked"}return"Unknown"},PlatformName:navigator.platform,randomNum:function(e,t){var n,o;return void 0===t?(n=0,o=e):(n=e,o=t),Math.floor(Math.random()*(o-n+1))+n}},e.input={None:0,A:1,B:2,Y:3,X:4,L:5,R:6,ZL:7,ZR:8,DPadUp:9,DPadRight:10,DPadDown:11,DPadLeft:12,LStickUp:13,LStickRight:14,LStickDown:15,LStickLeft:16,RStickUp:17,RStickRight:18,RStickDown:19,RStickLeft:20,RStick:21,Touch:22,getHeld:function(){return v},getPressed:function(){return b},getReleased:function(){return m},getStickValues:function(e){"function"==typeof e?e({x:P,y:B},{x:E,y:U}):console.log("SBD: A callback function was not provided for an instance of input.getStickValues()")}},e.switchbru={clearPresence:function(e,t){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.clearPresence()"):"function"!=typeof t?t=function(){}:$.ajax({url:p+"clearPresence",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e},dataType:"json",success:function(e){200==e.server.status?t(e.server,e.data):t(e.server,{})}})},downloadSaveData:function(e,t){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.downloadSaveData()"):"function"!=typeof t?console.log("SBD: A callback function was not provided for an instance of switchbru.downloadSaveData()"):$.ajax({url:p+"downloadSaveData",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e},dataType:"json",success:function(e){200==e.server.status?t(e.server,e.data):t(e.server,{})}})},getAccountData:function(e,t){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.getAccountData()!"):"function"!=typeof t?alert("SBD: A callback function was not provided for an instance of switchbru.getAccountData()"):$.ajax({url:p+"getAccountData",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e},dataType:"json",success:function(e){200==e.server.status?t(e.server,e.data):t(e.server,{})}})},getUserData:function(e,t){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.getUserData()"):"function"!=typeof t?console.log("SBD: A callback function was not provided for an instance of switchbru.getUserData()"):$.ajax({url:p+"getUserData",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e},dataType:"json",success:function(e){200==e.server.status?t(e.server,e.data):t(e.server,{})}})},getUserFriends:function(e,t){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.getUserFriends()"):void 0===t||"function"!=typeof t?console.log("SBD: A callback function was not provided for an instance of switchbru.getUserFriends()"):$.ajax({url:p+"getUserFriends",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e},dataType:"json",success:function(e){200==e.server.status&&e.data.friends?t(e.server,e.data):t(e.server,{})}})},getUserToken:function(e,t){t="object"==typeof t?t:{},"function"!=typeof e?console.log("SBD: A callback function was not provided for an instance of switchbru.getUserToken()"):$.ajax({url:p+"getUserToken",method:"GET",data:{client_id:f.id,client_secret:f.secret},dataType:"json",xhrFields:{withCredentials:!0},success:function(n){if(200==n.server.status)if(n.data.authenticate){var o=p+"authorize?client_id="+f.id;"string"!=typeof t.return&&"number"!=typeof t.return||(o+="&return_state="+app.base64Encode(app.base64Encode(t.return))),"string"!=typeof t.return&&"number"!=typeof t.return||(o+="&cancelled_state="+app.base64Encode(app.base64Encode(t.return))),location.href=o}else{var a=n.data.access_token;e(n.server,a),d.attr("disable-notifications")||$.ajax({url:p+"showNotifications",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:a},dataType:"json",success:function(e){200==e.server.status&&$("body").prepend('<iframe allowtransperency="true" height="125" onload="this.style.visibility=\'visible\';" scrolling="no" src="https://web.archive.org/web/20200720171510/https://switchbru.com/dns/notifs?client_id='+f.id+"&access_token="+a+'" style="background:none;border:none;pointer-events:none;position:absolute;visibility:hidden;z-index:99999999;" width="450"></iframe>')}})}else e(n.server,"")}})},isFriend:function(e,t,n){void 0===e?console.log("SBD: An access token was not provided for an instance of switchbru.isFriend()"):void 0===t?console.log("SBD: An friend's online ID was not provided for an instance of switchbru.isFriend()"):void 0===n||"function"!=typeof n?console.log("SBD: A callback function was not provided for an instance of switchbru.isFriend()"):$.ajax({url:p+"isFriend",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e,user_id:t},dataType:"json",success:function(e){200==e.server.status?n(e.server,e.data.friend):n(e.server,!1)}})},setClient:function(e,t){""!=f.id&&""!=f.secret?console.log("SBD: The Client ID and Secret are already set."):void 0===e?console.log("SBD: The Client ID was not provided in an instance of switchbru.setClient()"):void 0===t?console.log("SBD: The Client Secret was not provided in an instance of switchbru.setClient()"):f={id:e,secret:t}},setPresence:function(e,t,n){void 0===e?console.log("Error: An access token was not provided in an instance of switchbru.setPresence()"):void 0===t?console.log("SBD: A user presence string was not provided in an instance of switchbru.setPresence()"):typeof t.length>50?console.log("SBD: The user presence string length exeeds the maximum length of 50 in an instance of switchbru.setPresence()"):"function"!=typeof n?n=function(){}:$.ajax({url:p+"setPresence",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e,presence:t},dataType:"json",success:function(e){200==e.server.status?n(e.server,e.data):n(e.server,{})}})},showUserProfile:function(e,t,n){$("#userProfilePopUp").length||(d.attr("allow-scrolling")||ScriptTagEl.attr("allow-zooming")?(console.log("SBD: User profiles can not be shown with scrolling or zooming enabled on the app."),alert("We're sorry, but user profiles can not be viewed at this time.")):($("body").append('<div id="userProfilePopUp" style="background-color:rgba(0, 0, 0, 0.7);display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:99999997;"><div id="tempProfileBackdrop" style="background-color:#2d2d2d;border:none;height:100%;left:8.5%;position:absolute;width:84%"></div></div>'),$("#userProfilePopUp").fadeIn("slow"),$.ajax({url:p+"getProfileToken",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e,user_id:t},dataType:"json",success:function(t){200==t.server.status?($("#userProfilePopUp").html('<iframe id="userProfilePopUpFrame" onload="this.style.visibility=\'visible\';" style="background-color:#2d2d2d;border:none;height:100%;left:8.5%;position:absolute;visiblity:hidden;width:84%" src="https://web.archive.org/web/20200720171510/https://switchbru.com/dns/user_popup?client_id='+f.id+"&access_token="+e+"&profile_token="+t.data.token+'"></iframe>'),F=app.currentState(),history.pushState({},"",""),app.setState(F)):($("#userProfilePopUp").fadeOut("fast",function(){$(this).remove()}),void 0!==n&&"function"==typeof n&&n(t.server))},error:function(){$("#userProfilePopup").fadeOut("fast",function(){$(this).remove()}),void 0!==n&&"function"==typeof n&&n()}})))},unlockAchievement:function(e,t,n){void 0===e?console.log("SBD: An access token was not provided in an instance of switchbru.unlockAchievement()"):void 0===t?console.log("SBD: An achievement ID was not provided in an instance of switchbru.unlockAchievement()"):"function"!=typeof n?console.log("SBD: A callback function was not provided in an instance of switchbru.unlockAchievement()"):$.ajax({url:p+"unlockAchievement",method:"GET",data:{client_id:f.id,client_secret:f.secret,access_token:e,achievement_id:t},dataType:"json",success:function(e){200==e.server.status?n(e.server,e.data):n(e.server,{})}})},uploadSaveData:function(e,t,n){if(void 0===e)console.log("SBD: An access token was not provided in an instance of switchbru.uploadSaveData()");else if(void 0===t)console.log("SBD: The save data was not provided in an instance of switchbru.uploadSaveData()");else if("function"!=typeof n)console.log("SBD: A callback function was not provided in an instance of switchbru.uploadSaveData()");else{var o=new FormData;o.append("save_data",t),$.ajax({url:p+"uploadSaveData?client_id="+f.id+"&client_secret="+f.secret+"&access_token="+e,type:"POST",processData:!1,contentType:!1,cache:!1,data:o,dataType:"json",success:function(e){200==e.server.status?n(e.server,e.data):n(e.server,{})}})}}},e.ui={down:function(){if($("[selected]").length&&$("[selected]").attr("down")){var e=$("[selected]");return e.removeAttr("selected"),$("[ui-id='"+e.attr("down")+"']").attr("selected","true"),!0}return!1},KeyboardApplet:function(){function t(e){_classCallCheck(this,t),this.applet=e,this.shown=!1}return _createClass(t,[{key:"show",value:function(){if(this.shown)console.log("SBD: Only a single instance of the keyboard applet may be shown at a time.");else if(d.attr("allow-scrolling")||d.attr("allow-zooming"))console.log("SBD: The keyboard applet can not be shown with scrolling or zooming enabled on the app.");else{var t=0,n="",o="text",a=500,i=500,s="solid 2px #FFF",r="",c=75,l=77,p="",u="",f="";if(this.applet.maximum&&(a=i=this.applet.maximum),this.applet.placeholder&&(r=this.applet.placeholder),this.applet.type&&("number"==this.applet.type?o="tel":"code"==this.applet.type?(o="tel",a=12,i=14):"hidden"!=this.applet.type&&"password"!=this.applet.type||(o="password")),this.applet.title&&a<=20&&(u=this.applet.title.replace(/\n/g,"\\n")),this.applet.description&&a<=20&&(n=this.applet.description.replace(/\n/g,"\\n")),this.applet.value&&(f=this.applet.value,(t=f.length)==a&&(p='color:white" maximum="true')),"function"!=typeof this.callback)return console.log("SBD: A function 'callback' must be created under new ui.KeyboardApplet"),!1;if("function"!=typeof this.cancelled&&(this.cancelled=function(){this.callback("")}),$("#userProfilePopUp").length||$("#keyboardApplet").length)this.cancelled();else{var h=this;if(!$("#keyboardAppletPageWrapper").length)return $("body").prepend('<div id="keyboardAppletPageWrapper" style="display:inline;transition:all 0.5s ease;"></div>'),$("#keyboardAppletPageWrapper").siblings().not("iframe").appendTo("#keyboardAppletPageWrapper"),setTimeout(function(){$("#keyboardAppletPageWrapper").css("filter","blur(4px)");var d="",v=60,b=105,m=10;a<=20&&(d="box-shadow: 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff, 0px 2px 0px #fff;",v=160,m=15,s="none",b=5,"code"!=h.applet.type?a>10?l=(c=3.5*a)+2:(c=35,l=37):(d+="text-transform:uppercase;",c=68,l=70)),$("#keyboardApplet").length||($("body").prepend('<div id="keyboardApplet" style="background-color:rgba(0, 0, 0, 0.7);display:none;height:100%;position:fixed;width:100%;z-index:99999998;"><div style="color:white;font-size:28px;left:200px;max-height:0px;position:relative;top:58px;white-space:nowrap;">'+u+'<br><span style="color:darkgrey;font-size:22px;">'+n+'</span></div><form id="keybordApplet-form" onsubmit="return keyboardAppletSubmit()"><input id="keyboardApplet-text" maxlength="'+i+'" nx-se-disabled placeholder="'+r+'" spellcheck="false" style="background:none;border:none;caret-color:#6dccea;color:white;display:block;font-size:31px;margin-left:auto;margin-right:auto;margin-top:'+v+"px;outline:"+s+";padding-bottom:"+b+"px;padding-left:15px;padding-top:"+m+"px;resize:none;width:"+c+"%;"+d+'" type="'+o+'" value="'+f+'"><div id="keyboardApplet-count" style="color:grey;font-size:20px;margin-left:auto;margin-right:auto;margin-top:5px;position:relative;right:0px;transition:right ease 70ms;width:'+l+'%;"><span style="float:right;'+p+'">'+t+"/"+a+"</span></div></form></div>"),setTimeout(function(){$("#keyboardApplet").fadeIn("fast",function(){$("#keyboardApplet-text").focus(),R($("#keyboardApplet-text").get(0),i+1),C=function(){j(function(){h.cancelled()})},e.keyboardAppletSubmit=function(){var e=$("#keyboardApplet-text").val();return"code"==h.applet.type&&(e=e.toUpperCase()),j(function(){h.callback(e)}),!1},$("#keyboardApplet-text").blur(function(){C()}),$("#keyboardApplet-text").keyup(function(e){var t=$(this).val().length,n=e.target.selectionStart;if(37!=e.keyCode&&39!=e.keyCode){var o=$("#keyboardApplet-count"),i=$(this).val().replace(/\s/g,"").replace(/(\d{4}(?!$))/gm,"$1 ").substr(0,14);"code"==h.applet.type&&((n==i.length||n+1==i.length&&" "==i.slice(-2,-1))&&(n=i.length),t=i.replace(/\s/g,"").length,$(this).val(i),R($("#keyboardApplet-text").get(0),n)),o.find("span").text(t+"/"+a),t==a?o.attr("maximum")&&"0px"==o.css("right")?(o.css("right","12px"),setTimeout(function(){o.css("right","-5px"),setTimeout(function(){o.css("right","0px")},70)},70)):(o.css("color","white"),o.attr("maximum","true")):(o.css("color",""),o.removeAttr("maximum"))}})})},200))},100),this.shown=!0,!0}}return!1}},{key:"applet",get:function(){return this.obj},set:function(e){if("object"==typeof e){if(e.description&&e.description>150)return void console.log("SBD: 'description' must not be larger than 150 characters in new ui.KeyboardApplet");if(e.maximum&&isNaN(e.maximum))return void console.log("SBD: 'maximum' must be a number in new ui.KeyboardApplet");if(e.maximum&&e.maximum>500)return void console.log("SBD: 'maximum' must not be larger than 500 in new ui.KeyboardApplet");if(e.placeholder&&"string"!=typeof e.placeholder&&"number"!=typeof e.placeholder)return void console.log("SBD: 'placeholder' must be a string in new ui.KeyboardApplet");if(e.title&&"string"!=typeof e.title&&"number"!=typeof e.title)return void console.log("SBD: 'title' must be a string in new ui.KeyboardApplet");if(e.title&&e.title.length>80)return void console.log("SBD: 'title' must not be larger than 80 characters in ui.KeyboardApplet");if(e.type&&"string"!=typeof e.type&&"text"!=e.type&&"number"!=e.type&&"code"!=e.type&&"hidden"!=e.type&&"password"!=e.type)return void console.log("SBD: type '"+e.type+"' is invalid in new ui.KeyboardApplet");if(e.value&&(!e.maximum&&e.value.length>500||e.maximum&&e.value.length>e.maximum))return void console.log("SBD: value must be below the maximum length in new ui.KeyboardApplet");this.obj=e}else this.obj={}}}]),t}(),left:function(){if($("[selected]").length&&$("[selected]").attr("left")){var e=$("[selected]");return e.removeAttr("selected"),$("[ui-id='"+e.attr("left")+"']").attr("selected","true"),!0}return!1},right:function(){if($("[selected]").length&&$("[selected]").attr("right")){var e=$("[selected]");return e.removeAttr("selected"),$("[ui-id='"+e.attr("right")+"']").attr("selected","true"),!0}return!1},select:function(e){if($(e).length)var t=$(e);else{if(!$("[ui-id='"+e+"']").length)return!1;t=$("[ui-id='"+e+"']")}return $("[selected]").removeAttr("selected"),t.attr("selected","true"),!0},up:function(){if($("[selected]").length&&$("[selected]").attr("up")){var e=$("[selected]");return e.removeAttr("selected"),$("[ui-id='"+e.attr("up")+"']").attr("selected","true"),!0}return!1}};var v,b,m,g,y,w,x,k,S,D,_,A,T,P,B,E,U,C=function(){},j=function(e){$("[id='keyboardApplet']").fadeOut("slow",function(){$(this).remove();var t=$("[id='keyboardAppletPageWrapper']");t.css("filter",""),setTimeout(function(){var n=t.last().html();$("body").prepend(n),t.remove(),setTimeout(e,5)},200)})},R=function(e,t){if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}};e.keyboardAppletSubmit=function(){},v=b=m=0,o&&(i.bind(Gamepad.Event.BUTTON_DOWN,function(e){switch(e.control){case"DPAD_UP":b=v=9;break;case"DPAD_LEFT":b=v=12;break;case"DPAD_RIGHT":v=b=10;break;case"DPAD_DOWN":v=b=11;break;case"FACE_1":v=b=2;break;case"FACE_2":v=b=1;break;case"FACE_3":v=b=3;break;case"FACE_4":v=b=4;break;case"LEFT_BOTTOM_SHOULDER":v=b=7;break;case"RIGHT_BOTTOM_SHOULDER":v=b=8;break;case"LEFT_TOP_SHOULDER":v=b=5;break;case"RIGHT_TOP_SHOULDER":v=b=6;break;case"RIGHT_STICK":v=b=21}}),i.bind(Gamepad.Event.BUTTON_UP,function(e){switch(e.control){case"DPAD_UP":m=9;break;case"DPAD_LEFT":m=12;break;case"DPAD_RIGHT":m=10;break;case"DPAD_DOWN":m=11;break;case"FACE_1":m=2;break;case"FACE_2":m=1;break;case"FACE_3":m=3;break;case"FACE_4":m=4;break;case"LEFT_BOTTOM_SHOULDER":m=7;break;case"RIGHT_BOTTOM_SHOULDER":m=8;break;case"LEFT_TOP_SHOULDER":m=5;break;case"RIGHT_TOP_SHOULDER":m=6;break;case"RIGHT_STICK":m=21}v==m&&(v=0)})),g=y=0,w=x=k=S=D=_=A=T=!1,P=B=E=U=0,o&&i.bind(Gamepad.Event.AXIS_CHANGED,function(e){switch(e.axis){case"LEFT_STICK_X":e.value<-.5&&!k?(b=v=g=16,k=!0,S=!1):e.value>.5&&!S?(b=v=g=14,S=!0,k=!1):e.value<.5&&e.value>-.5&&(16!=v&&14!=v||(v=0),k=!1,S=!1,L(1,e.value)),P=e.value;break;case"RIGHT_STICK_X":e.value<-.5&&!A?(b=v=y=20,A=!0,T=!1):e.value>.5&&!T?(b=v=y=18,T=!0,A=!1):e.value<.5&&e.value>-.5&&(20!=v&&18!=v||(v=0),A=!1,T=!1,L(2,e.value)),E=e.value;break;case"LEFT_STICK_Y":e.value>.5&&!x?(b=v=g=15,x=!0,w=!1):e.value<-.5&&!w?(b=v=g=13,w=!0,x=!1):e.value<.5&&e.value>-.5&&(15!=v&&13!=v||(v=0),w=!1,x=!1,L(1,e.value)),B=e.value;break;case"RIGHT_STICK_Y":e.value>.5&&!_?(b=v=y=19,_=!0,D=!1):e.value<-.5&&!D?(b=v=y=17,D=!0,_=!1):e.value<.5&&e.value>-.5&&(19!=v&&17!=v||(v=0),D=!1,_=!1,L(2,e.value)),U=e.value}});var L=function(e,t){1==e?!g||x||k||S||w||1==t||-1==t||(m=g,g=0):!y||_||A||T||D||1==t||-1==t||(m=y,y=0)};$(window).on("popstate",function(e){$("#userProfilePopUp").length&&$("#userProfilePopUp").fadeOut("slow",function(){$(this).remove()}),O||app.setState(F),O=!1});var F="",O=!1;$(document).ready(function(){setInterval(function(){!$("#disableCursorPopUp").length&&o&&$("body").prepend('<div id="disableCursorPopUp" style="background-color:rgba(0, 0, 0, 0.7);display:none;height:100%;left:0;position:fixed;top:0;width:100%;z-index:99999997;"><span style="color:white;font-family:sans-serif;font-size:60px;font-weight:normal;position:absolute;text-align:center;text-transform:none;top:50%;width:100%;">Please disable the cursor to continue.</span></div>'),d.attr("allow-scrolling")||$("html, body").css({height:"100%",margin:"0","max-height":"100%","max-width":"100%",overflow:"hidden",padding:"0",position:"relative"}),d.attr("allow-zooming")||$("meta#zooming").length||$("head").append('<meta id="zooming" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />'),F=app.currentState()},20),$("html").on("touchstart touchend",function(){$("#disableCursorPopUp:hover").length||setTimeout(function(){s=!0},1)}).mousemove(function(){s=!1}).on("touchstart",function(){"none"==$("#disableCursorPopUp").css("display")&&(v=b=22)}).on("touchend",function(){"none"==$("#disableCursorPopUp").css("display")&&(m=22,22==v&&(v=0))}),history.replaceState("",document.title,window.location.pathname+window.location.search),d.attr("disable-pushstate")||history.pushState({},"","")})}(window);

}
/*
     FILE ARCHIVED ON 17:15:10 Jul 20, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:17:18 Feb 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 144.827
  exclusion.robots: 0.193
  exclusion.robots.policy: 0.184
  cdx.remote: 0.065
  esindex: 0.008
  LoadShardBlock: 89.261 (3)
  PetaboxLoader3.datanode: 96.268 (4)
  CDXLines.iter: 27.12 (3)
  load_resource: 296.916
  PetaboxLoader3.resolve: 51.342
*/