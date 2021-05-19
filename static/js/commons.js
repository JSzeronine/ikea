window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@fonts-face {fonts-family:"fonts";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{fonts:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;fonts:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);

/*!
 * Detectizr v@VERSION
 * http://barisaydinoglu.github.com/Detectizr/
 *
 * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
 * Released under the MIT license
 *
 * Date: @DATE
 */
window.Detectizr = (function(window, navigator, document, undefined) {
    var Detectizr = {},
        Modernizr = window.Modernizr,
        deviceTypes = ["tv", "tablet", "mobile", "desktop"],
        options = {
            // option for enabling HTML classes of all features (not only the true features) to be added
            addAllFeaturesAsClass: false,
            // option for enabling detection of device
            detectDevice: true,
            // option for enabling detection of device model
            detectDeviceModel: true,
            // option for enabling detection of screen size
            detectScreen: true,
            // option for enabling detection of operating system type and version
            detectOS: true,
            // option for enabling detection of browser type and version
            detectBrowser: true,
            // option for enabling detection of common browser plugins
            detectPlugins: true
        },
        plugins2detect = [{
            name: "adobereader",
            substrs: ["Adobe", "Acrobat"],
            // AcroPDF.PDF is used by version 7 and later
            // PDF.PdfCtrl is used by version 6 and earlier
            progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
        }, {
            name: "flash",
            substrs: ["Shockwave Flash"],
            progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
        }, {
            name: "wmplayer",
            substrs: ["Windows Media"],
            progIds: ["wmplayer.ocx"]
        }, {
            name: "silverlight",
            substrs: ["Silverlight"],
            progIds: ["AgControl.AgControl"]
        }, {
            name: "quicktime",
            substrs: ["QuickTime"],
            progIds: ["QuickTime.QuickTime"]
        }],
        rclass = /[\t\r\n]/g,
        docElement = document.documentElement,
        resizeTimeoutId,
        oldOrientation;

    // Create Global "extend" method, so Detectizr does not need jQuery.extend
    function extend(obj, extObj) {
        var a, b, i;
        if (arguments.length > 2) {
            for (a = 1, b = arguments.length; a < b; a += 1) {
                extend(obj, arguments[a]);
            }
        } else {
            for (i in extObj) {
                if (extObj.hasOwnProperty(i)) {
                    obj[i] = extObj[i];
                }
            }
        }
        return obj;
    }

    // simplified and localized indexOf method as one parameter fixed as useragent
    function is(key) {
        return Detectizr.browser.userAgent.indexOf(key) > -1;
    }

    // simplified and localized regex sustainabilitytest method as one parameter fixed as useragent
    function test(regex) {
        return regex.test(Detectizr.browser.userAgent);
    }

    // simplified and localized regex exec method as one parameter fixed as useragent
    function exec(regex) {
        return regex.exec(Detectizr.browser.userAgent);
    }

    // localized string trim method
    function trim(value) {
        return value.replace(/^\s+|\s+$/g, "");
    }

    // convert string to camelcase
    function toCamel(string) {
        if (string === null || string === undefined) {
            return "";
        }
        return String(string).replace(/((\s|\-|\.)+[a-z0-9])/g, function($1) {
            return $1.toUpperCase().replace(/(\s|\-|\.)/g, "");
        });
    }

    // removeClass function inspired from jQuery.removeClass
    function removeClass(element, value) {
        var class2remove = value || "",
            cur = element.nodeType === 1 && (element.className ? (" " + element.className + " ").replace(rclass, " ") : "");
        if (cur) {
            while (cur.indexOf(" " + class2remove + " ") >= 0) {
                cur = cur.replace(" " + class2remove + " ", " ");
            }
            element.className = value ? trim(cur) : "";
        }
    }

    // add version sustainabilitytest to Modernizr
    function addVersionTest(version, major, minor) {
        if (!!version) {
            version = toCamel(version);
            if (!!major) {
                major = toCamel(major);
                addConditionalTest(version + major, true);
                if (!!minor) {
                    addConditionalTest(version + major + "_" + minor, true);
                }
            }
        }
    }

    // add sustainabilitytest to Modernizr based on a condition
    function addConditionalTest(feature, test) {
        if (!!feature && !!Modernizr) {
            if (options.addAllFeaturesAsClass) {
                Modernizr.addTest(feature, test);
            } else {
                test = typeof test === "function" ? test() : test;
                if (test) {
                    Modernizr.addTest(feature, true);
                } else {
                    delete Modernizr[feature];
                    removeClass(docElement, feature);
                }
            }
        }
    }

    // set version based on versionFull
    function setVersion(versionType, versionFull) {
        versionType.version = versionFull;
        var versionArray = versionFull.split(".");
        if (versionArray.length > 0) {
            versionArray = versionArray.reverse();
            versionType.major = versionArray.pop();
            if (versionArray.length > 0) {
                versionType.minor = versionArray.pop();
                if (versionArray.length > 0) {
                    versionArray = versionArray.reverse();
                    versionType.patch = versionArray.join(".");
                } else {
                    versionType.patch = "0";
                }
            } else {
                versionType.minor = "0";
            }
        } else {
            versionType.major = "0";
        }
    }

    function checkOrientation() {
        //timeout wrapper points with doResizeCode as callback
        window.clearTimeout(resizeTimeoutId);
        resizeTimeoutId = window.setTimeout(function() {
            oldOrientation = Detectizr.device.orientation;
            //wrapper for height/width check
            if (window.innerHeight > window.innerWidth) {
                Detectizr.device.orientation = "portrait";
            } else {
                Detectizr.device.orientation = "landscape";
            }
            addConditionalTest(Detectizr.device.orientation, true);
            if (oldOrientation !== Detectizr.device.orientation) {
                addConditionalTest(oldOrientation, false);
            }
        }, 10);
    }

    function detectPlugin(substrs) {
        var plugins = navigator.plugins,
            plugin, haystack, pluginFoundText, j, k;
        for (j = plugins.length - 1; j >= 0; j--) {
            plugin = plugins[j];
            haystack = plugin.name + plugin.description;
            pluginFoundText = 0;
            for (k = substrs.length; k >= 0; k--) {
                if (haystack.indexOf(substrs[k]) !== -1) {
                    pluginFoundText += 1;
                }
            }
            if (pluginFoundText === substrs.length) {
                return true;
            }
        }
        return false;
    }

    function detectObject(progIds) {
        var j;
        for (j = progIds.length - 1; j >= 0; j--) {
            try {
                new ActiveXObject(progIds[j]);
            } catch (e) {
                // Ignore
            }
        }
        return false;
    }

    function detect(opt) {
        var i, j, device, os, browser, plugin2detect, pluginFound;

        options = extend({}, options, opt || {});

        /** Device detection **/
        if (options.detectDevice) {
            Detectizr.device = {
                type: "",
                model: "",
                orientation: ""
            };
            device = Detectizr.device;
            if (test(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/)) {
                // Check if user agent is a smart tv
                device.type = deviceTypes[0];
                device.model = "smartTv";
            } else if (test(/xbox|playstation.3|wii/)) {
                // Check if user agent is a game console
                device.type = deviceTypes[0];
                device.model = "gameConsole";
            } else if (test(/ip(a|ro)d/)) {
                // Check if user agent is a iPad
                device.type = deviceTypes[1];
                device.model = "ipad";
            } else if ((test(/tablet/) && !test(/rx-34/) && !test(/shield/)) || test(/folio/)) {
                // Check if user agent is a Tablet
                device.type = deviceTypes[1];
                device.model = String(exec(/playbook/) || "");
            } else if (test(/linux/) && test(/android/) && !test(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/)) {
                // Check if user agent is an Android Tablet
                device.type = deviceTypes[1];
                device.model = "android";
            } else if (test(/kindle/) || (test(/mac.os/) && test(/silk/))) {
                // Check if user agent is a Kindle or Kindle Fire
                device.type = deviceTypes[1];
                device.model = "kindle";
            } else if (test(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || (test(/mb511/) && test(/rutem/))) {
                // Check if user agent is a pre Android 3.0 Tablet
                device.type = deviceTypes[1];
                device.model = "android";
            } else if (test(/bb10/)) {
                // Check if user agent is a BB10 device
                device.type = deviceTypes[2];
                device.model = "blackberry";
            } else {
                // Check if user agent is one of common mobile types
                device.model = exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/);
                if (device.model !== null) {
                    device.type = deviceTypes[2];
                    device.model = String(device.model);
                } else {
                    device.model = "";
                    if (test(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/)) {
                        // Check if user agent is unique Mobile User Agent
                        device.type = deviceTypes[2];
                    } else if (test(/opera/) && test(/windows.nt.5/) && test(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/)) {
                        // Check if user agent is an odd Opera User Agent - http://goo.gl/nK90K
                        device.type = deviceTypes[2];
                    } else if ((test(/windows.(nt|xp|me|9)/) && !test(/phone/)) || test(/win(9|.9|nt)/) || test(/\(windows 8\)/)) {
                        // Check if user agent is Windows Desktop, "(Windows 8)" Chrome extra exception
                        device.type = deviceTypes[3];
                    } else if (test(/macintosh|powerpc/) && !test(/silk/)) {
                        // Check if agent is Mac Desktop
                        device.type = deviceTypes[3];
                        device.model = "mac";
                    } else if (test(/linux/) && test(/x11/)) {
                        // Check if user agent is a Linux Desktop
                        device.type = deviceTypes[3];
                    } else if (test(/solaris|sunos|bsd/)) {
                        // Check if user agent is a Solaris, SunOS, BSD Desktop
                        device.type = deviceTypes[3];
                    } else if (test(/cros/)) {
                        // Check if user agent is a Chromebook
                        device.type = deviceTypes[3];
                    } else if (test(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !test(/mobile/)) {
                        // Check if user agent is a Desktop BOT/Crawler/Spider
                        device.type = deviceTypes[3];
                        device.model = "crawler";
                    } else {
                        // Otherwise assume it is a Mobile Device
                        device.type = deviceTypes[2];
                    }
                }
            }
            for (i = 0, j = deviceTypes.length; i < j; i += 1) {
                addConditionalTest(deviceTypes[i], (device.type === deviceTypes[i]));
            }
            if (options.detectDeviceModel) {
                addConditionalTest(toCamel(device.model), true);
            }
        }

        /** Screen detection **/
        if (options.detectScreen) {
            device.screen = {};
            if (!!Modernizr && !!Modernizr.mq) {
                if (Modernizr.mq("only screen and (max-width: 240px)")) {
                    device.screen.size = "veryVerySmall";
                    addConditionalTest("veryVerySmallScreen", true);
                } else if (Modernizr.mq("only screen and (max-width: 320px)")) {
                    device.screen.size = "verySmall";
                    addConditionalTest("verySmallScreen", true);
                } else if (Modernizr.mq("only screen and (max-width: 480px)")) {
                    device.screen.size = "small";
                    addConditionalTest("smallScreen", true);
                }
                if (device.type === deviceTypes[1] || device.type === deviceTypes[2]) {
                    if (Modernizr.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)")) {
                        device.screen.resolution = "high";
                        addConditionalTest("highresolution", true);
                    }
                }
            }
            if (device.type === deviceTypes[1] || device.type === deviceTypes[2]) {
                window.onresize = function(event) {
                    checkOrientation(event);
                };
                checkOrientation();
            } else {
                device.orientation = "landscape";
                addConditionalTest(device.orientation, true);
            }
        }

        /** OS detection **/
        if (options.detectOS) {
            Detectizr.os = {};
            os = Detectizr.os;
            if (device.model !== "") {
                if (device.model === "ipad" || device.model === "iphone" || device.model === "ipod") {
                    os.name = "ios";
                    setVersion(os, (test(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."));
                } else if (device.model === "android") {
                    os.name = "android";
                    setVersion(os, (test(/android\s([\d\.]+)/) ? RegExp.$1 : ""));
                } else if (device.model === "blackberry") {
                    os.name = "blackberry";
                    setVersion(os, (test(/version\/([^\s]+)/) ? RegExp.$1 : ""));
                } else if (device.model === "playbook") {
                    os.name = "blackberry";
                    setVersion(os, (test(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""));
                }
            }
            if (!os.name) {
                if (is("win") || is("16bit")) {
                    os.name = "windows";
                    if (is("windows nt 10")) {
                        setVersion(os, "10");
                    } else if (is("windows nt 6.3")) {
                        setVersion(os, "8.1");
                    } else if (is("windows nt 6.2") || test(/\(windows 8\)/)) { //windows 8 chrome mac fix
                        setVersion(os, "8");
                    } else if (is("windows nt 6.1")) {
                        setVersion(os, "7");
                    } else if (is("windows nt 6.0")) {
                        setVersion(os, "vista");
                    } else if (is("windows nt 5.2") || is("windows nt 5.1") || is("windows xp")) {
                        setVersion(os, "xp");
                    } else if (is("windows nt 5.0") || is("windows 2000")) {
                        setVersion(os, "2k");
                    } else if (is("winnt") || is("windows nt")) {
                        setVersion(os, "nt");
                    } else if (is("win98") || is("windows 98")) {
                        setVersion(os, "98");
                    } else if (is("win95") || is("windows 95")) {
                        setVersion(os, "95");
                    }
                } else if (is("mac") || is("darwin")) {
                    os.name = "mac os";
                    if (is("68k") || is("68000")) {
                        setVersion(os, "68k");
                    } else if (is("ppc") || is("powerpc")) {
                        setVersion(os, "ppc");
                    } else if (is("os x")) {
                        setVersion(os, (test(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."));
                    }
                } else if (is("webtv")) {
                    os.name = "webtv";
                } else if (is("x11") || is("inux")) {
                    os.name = "linux";
                } else if (is("sunos")) {
                    os.name = "sun";
                } else if (is("irix")) {
                    os.name = "irix";
                } else if (is("freebsd")) {
                    os.name = "freebsd";
                } else if (is("bsd")) {
                    os.name = "bsd";
                }
            }
            if (!!os.name) {
                addConditionalTest(os.name, true);
                if (!!os.major) {
                    addVersionTest(os.name, os.major);
                    if (!!os.minor) {
                        addVersionTest(os.name, os.major, os.minor);
                    }
                }
            }
            if (test(/\sx64|\sx86|\swin64|\swow64|\samd64/)) {
                os.addressRegisterSize = "64bit";
            } else {
                os.addressRegisterSize = "32bit";
            }
            addConditionalTest(os.addressRegisterSize, true);
        }

        /** Browser detection **/
        if (options.detectBrowser) {
            browser = Detectizr.browser;
            if (!test(/opera|webtv/) && (test(/msie\s([\d\w\.]+)/) || is("trident"))) {
                browser.engine = "trident";
                browser.name = "ie";
                if (!window.addEventListener && document.documentMode && document.documentMode === 7) {
                    setVersion(browser, "8.compat");
                } else if (test(/trident.*rv[ :](\d+)\./)) {
                    setVersion(browser, RegExp.$1);
                } else {
                    setVersion(browser, (test(/trident\/4\.0/) ? "8" : RegExp.$1));
                }
            } else if (is("firefox")) {
                browser.engine = "gecko";
                browser.name = "firefox";
                setVersion(browser, (test(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : ""));
            } else if (is("gecko/")) {
                browser.engine = "gecko";
            } else if (is("opera")) {
                browser.name = "opera";
                browser.engine = "presto";
                setVersion(browser, (test(/version\/([\d\.]+)/) ? RegExp.$1 : (test(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")));
            } else if (is("konqueror")) {
                browser.name = "konqueror";
            } else if (is("edge")) {
                browser.engine = "webkit";
                browser.name = "edge";
                setVersion(browser, (test(/edge\/([\d\.]+)/) ? RegExp.$1 : ""));
            } else if (is("chrome")) {
                browser.engine = "webkit";
                browser.name = "chrome";
                setVersion(browser, (test(/chrome\/([\d\.]+)/) ? RegExp.$1 : ""));
            } else if (is("iron")) {
                browser.engine = "webkit";
                browser.name = "iron";
            } else if (is("crios")) {
                browser.name = "chrome";
                browser.engine = "webkit";
                setVersion(browser, (test(/crios\/([\d\.]+)/) ? RegExp.$1 : ""));
            } else if (is("fxios")) {
                browser.name = "firefox";
                browser.engine = "webkit";
                setVersion(browser, (test(/fxios\/([\d\.]+)/) ? RegExp.$1 : ""));
            } else if (is("applewebkit/")) {
                browser.name = "safari";
                browser.engine = "webkit";
                setVersion(browser, (test(/version\/([\d\.]+)/) ? RegExp.$1 : ""));
            } else if (is("mozilla/")) {
                browser.engine = "gecko";
            }
            if (!!browser.name) {
                addConditionalTest(browser.name, true);
                if (!!browser.major) {
                    addVersionTest(browser.name, browser.major);
                    if (!!browser.minor) {
                        addVersionTest(browser.name, browser.major, browser.minor);
                    }
                }
            }
            addConditionalTest(browser.engine, true);

            // Browser Language
            browser.language = navigator.userLanguage || navigator.language;
            addConditionalTest(browser.language, true);
        }

        /** Plugin detection **/
        if (options.detectPlugins) {
            browser.plugins = [];
            for (i = plugins2detect.length - 1; i >= 0; i--) {
                plugin2detect = plugins2detect[i];
                pluginFound = false;
                if (window.ActiveXObject) {
                    pluginFound = detectObject(plugin2detect.progIds);
                } else if (navigator.plugins) {
                    pluginFound = detectPlugin(plugin2detect.substrs);
                }
                if (pluginFound) {
                    browser.plugins.push(plugin2detect.name);
                    addConditionalTest(plugin2detect.name, true);
                }
            }
            if (typeof navigator.javaEnabled === "function" && navigator.javaEnabled()) {
                browser.plugins.push("java");
                addConditionalTest("java", true);
            }
        }
    }
    Detectizr.detect = function(settings) {
        return detect(settings);
    };
    Detectizr.init = function() {
        if (Detectizr !== undefined) {
            Detectizr.browser = {
                userAgent: (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase()
            };
            Detectizr.detect();
        }
    };
    Detectizr.init();

    return Detectizr;
}(this, this.navigator, this.document));
