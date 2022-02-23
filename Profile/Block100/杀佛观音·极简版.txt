// ==UserScript==
// @name                杀佛观音·极简版
// @name:zh             杀佛观音·极简版
// @name:zh-CN          杀佛观音·极简版
// @name:zh-TW          殺佛觀音·極簡版
// @namespace           杀佛观音
// @version             0.4.0
// @description         【安全无劫持、全平台设备兼容、无广告、无优惠券内容、无公众号限制】兼容电脑、手机、平板；兼容iOS、iPadOS快捷指令、Safari扩展；兼容任意支持脚本扩展的浏览器，并提供去广告教程；兼容TM篡改猴、VM暴力猴、GM油猴插件。支持1905、AcFun、爱奇艺、哔哩哔哩、风行、华数、乐视、芒果TV、咪咕视频、PP视频(PPTV)、搜狐、腾讯视频、土豆、西瓜、优酷VIP视频破解免费看、非VIP视频去广告(视频前广告、视频中途广告、视频暂停广告、水印)；支持悬浮球操作、快捷键操作(并行不悖)；支持更换解析网站地址、关闭去广告功能、切换悬浮球大小、隐藏悬浮球、移动悬浮球。
// @description:zh      【安全无劫持、全平台设备兼容、无广告、无优惠券内容、无公众号限制】兼容电脑、手机、平板；兼容iOS、iPadOS快捷指令、Safari扩展；兼容任意支持脚本扩展的浏览器，并提供去广告教程；兼容TM篡改猴、VM暴力猴、GM油猴插件。支持1905、AcFun、爱奇艺、哔哩哔哩、风行、华数、乐视、芒果TV、咪咕视频、PP视频(PPTV)、搜狐、腾讯视频、土豆、西瓜、优酷VIP视频破解免费看、非VIP视频去广告(视频前广告、视频中途广告、视频暂停广告、水印)；支持悬浮球操作、快捷键操作(并行不悖)；支持更换解析网站地址、关闭去广告功能、切换悬浮球大小、隐藏悬浮球、移动悬浮球。
// @description:zh-CN   【安全无劫持、全平台设备兼容、无广告、无优惠券内容、无公众号限制】兼容电脑、手机、平板；兼容iOS、iPadOS快捷指令、Safari扩展；兼容任意支持脚本扩展的浏览器，并提供去广告教程；兼容TM篡改猴、VM暴力猴、GM油猴插件。支持1905、AcFun、爱奇艺、哔哩哔哩、风行、华数、乐视、芒果TV、咪咕视频、PP视频(PPTV)、搜狐、腾讯视频、土豆、西瓜、优酷VIP视频破解免费看、非VIP视频去广告(视频前广告、视频中途广告、视频暂停广告、水印)；支持悬浮球操作、快捷键操作(并行不悖)；支持更换解析网站地址、关闭去广告功能、切换悬浮球大小、隐藏悬浮球、移动悬浮球。
// @description:zh-TW   【安全無劫持、全平臺設備兼容、無廣告、無優惠券內容、無公眾號限製】兼容電腦、手機、平板；兼容iOS、iPadOS快捷指令、Safari擴展；兼容任意支持腳本擴展的瀏覽器，並提供去廣告教程；兼容TM篡改猴、VM暴力猴、GM油猴插件。支持1905、AcFun、愛奇藝、嗶哩嗶哩、風行、華數、樂視、芒果TV、咪咕視頻、PP視頻(PPTV)、搜狐、騰訊視頻、土豆、西瓜、優酷VIP視頻破解免費看、非VIP視頻去廣告(視頻前廣告、視頻中途廣告、視頻暫停廣告、水印)；支持懸浮球操作、快捷鍵操作(並行不悖)；支持更換解析網站地址、關閉去廣告功能、切換懸浮球大小、隱藏懸浮球、移動懸浮球。
// @author              杀佛观音
// @copyright           2021-2022 杀佛观音
// @license             End-User License Agreement
// @contributionURL     bitcoin:1H3DMkWAdJMUpkstdYZmHpiV7RAFjjC4WH
// @contributionAmount  0.0000666 BTC
// @match               *://vip.1905.com/*
// @match               *://*.acfun.cn/*
// @match               *://*.iqiyi.com/*
// @match               *://*.bilibili.com/*
// @match               *://fun.tv/*
// @match               *://*.fun.tv/*
// @match               *://*.wasu.cn/*lay/*
// @match               *://*.wasu.cn/wap/*lay/*
// @match               *://*.le.com/*
// @match               *://*.mgtv.com/*
// @match               *://*.miguvideo.com/*
// @match               *://*.pptv.com/*
// @match               *://*.tv.sohu.com/v*
// @match               *://film.sohu.com/album/*
// @match               *://v.qq.com/x/*
// @match               *://v.qq.com/*/p/topic/*/*.html
// @match               *://m.v.qq.com/*
// @match               *://3g.v.qq.com/*
// @match               *://*.tudou.com/*
// @match               *://*.ixigua.com/*
// @match               *://*.youku.com/*
// @match               *://17kyun.com/api.php?url=*
// @grant               none
// ==/UserScript==

(function () {
    'use strict';

    //最终用户许可协议 End-User License Agreement
    // * Copyright (c) 2021-2022 杀佛观音. All Rights Reserved.
    // * Proprietary and Confidential.
    // * Written by 杀佛观音 [SWFtSmVob3ZhaDxhdD50dXRhbm90YS5jb20=(base64)], July 2021.
    // * It is never ok to copy and paste code from an open
    //   source project directly into your proprietary code.
    //   Don't do it.
    // * Re-distribution or adaptation in whole or in part of
    //   this script code by any means or in whatever form is
    //   strictly prohibited.
    // * 该项目介绍、说明书、脚本代码、思路及其他相关
    //   内容版权归作者所有，未经作者本人书面授权，禁
    //   止任何单位或个人以任何形式、任何手段或通过任
    //   何方式（净室工程、手工、图片、电子、机械、磁
    //   性、化学、光学、声学或其它方式）抄袭、摘编、
    //   编辑、修改、结集、出版、再版、转录、转载、爬
    //   虫爬取、重制、仿制、复制、复写、复印、影印、
    //   拷贝、刻录、建立镜像、粘贴、张贴、派发、录音、
    //   用来创建派生作品、与其它任何资料进行合并、翻
    //   译成任何电脑语言或以其他任何方式用于商业或公
    //   共目的。
    // * 该项目仅仅准许您善意的使用，其他任何行为都是
    //   禁止的。

    //更多脚本
    //https://greasyfork.org/zh-CN/users/792030

    //使用前或更新后进入下方脚本下载地址熟读信息，捐赠后视为正版，未捐赠视为盗版，好评后视为正版^_^
    //https://greasyfork.org/zh-CN/scripts/429245

    //优选播放源（本提示具有时效性，可能随时间推移失效，部分源需再次切换线路，较新剧集易解析且流畅，陈旧剧集可能接口少或卡顿）
    //爱奇艺   m2090 xmflv jiubo 973 等
    //哔哩哔哩 m2090 ok yemu kpezp m1907 playm3u8 等

    //注意：一旦修改源码，插件脚本检查更新可能会被取消，请手动进入上方脚本下载地址更新脚本
    //↓修改此地址更换解析网站
    //备用地址1 https://17kyun.com/api.php?url=
    //备用地址2 https://jx.52damu.com/?url=
    //备用地址3 https://jx.618g.com/?url=
    //备用地址4 https://jx.973973.xyz/?url=
    //备用地址5 http://okjx.cc/?url=
    var KillBuddha_src = 'https://17kyun.com/api.php?url=';
    //↓修改此参数关闭非VIP视频去广告功能，默认开启，!0为开启，!1为关闭
    var KillBuddha_no_ads = !0;
    //↓修改此参数切换右下角悬浮球（VIP图标）大小，默认为大，!0为大，!1为小
    var KillBuddha_big = !0;
    //↓修改此参数隐藏右下角悬浮球（VIP图标），默认不隐藏，!0为隐藏，!1为不隐藏
    //注意：除非有此需求，否则请勿修改此参数；隐藏后无法操作悬浮球，只能通过操作快捷键进行解析；部分设备（移动端、平板端）无法操作快捷键，此类设备切勿修改此参数。
    var KillBuddha_hidden = !1;

    if (typeof(completion) === 'function' && completion.toString().indexOf('ExtensionPreprocessingJS') > -1) {
        location.href = KillBuddha_src + location.href;
        completion();
        return;
    }
    //21.12.20 因内置解析网站17kyun已关停，临时强行修复该站错误代码逻辑，若后续彻底无法访问该站，将对本项目脚本进行大更新。
    if (window.location.href.match(/^https?:\/\/17kyun\.com\/api\.php\?url=/i)) {
        (function wait() {
            if (['complete', 'loaded'].indexOf(document.readyState) !== -1) {
                if (typeof(Base64) !== 'function') {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.text = "function Base64(){function _utf8_encode(string){string=string.replace(/\\r\\n/g,'\\n');var utftext='';for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}return utftext;}function _utf8_decode(utftext){var string='',i=0,c=0,c1=0,c2=0,c3=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}return string;}var _keyStr='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';this.encode=function(input){var output='',chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;input=_utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}output=output+_keyStr.charAt(enc1)+_keyStr.charAt(enc2)+_keyStr.charAt(enc3)+_keyStr.charAt(enc4);}return output;};this.decode=function(input){var output='',chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,'');while(i<input.length){enc1=_keyStr.indexOf(input.charAt(i++));enc2=_keyStr.indexOf(input.charAt(i++));enc3=_keyStr.indexOf(input.charAt(i++));enc4=_keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}if(enc4!=64){output=output+String.fromCharCode(chr3);}}output=_utf8_decode(output);return output;};}function IsPC(){var userAgentInfo=navigator.userAgent;var Agents=new Array('Android','iPhone','SymbianOS','Windows Phone','iPad','iPod');var flag=true;for(var v=0;v<Agents.length;v++){if(userAgentInfo.indexOf(Agents[v])>0){flag=false;break;}}return flag;}function getCookie(name){var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');if(arr=document.cookie.match(reg)){return unescape(arr[2]);}else{return null;}}function SetCookie(name,value){var exp=new Date();exp.setTime(exp.getTime()+8*60*60*1000);document.cookie=name+'='+escape(value)+';expires='+exp.toGMTString()+';path=/';}";
                    document.body.appendChild(script);
                    script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'apijax.php';
                    document.body.appendChild(script);
                }
            } else {
                setTimeout(function () {
                    wait();
                }, 25);
            }
        })();
    }
    var match = window.location.href.match(/(^https?:\/\/vip\.1905\.com\/)?(^https?:\/\/(www|m)\.acfun\.cn\/)?(^https?:\/\/(www|m)\.iqiyi\.com\/)?(^https?:\/\/(www|m)\.bilibili\.com\/)?(^https?:\/\/(m\.)?fun\.tv\/)?(^https?:\/\/www\.wasu\.cn\/(wap\/)?Play)?(^https?:\/\/(www|m)\.le\.com\/)?(^https?:\/\/(www|m)\.mgtv\.com\/)?(^https?:\/\/(www|m)\.miguvideo\.com\/)?(^https?:\/\/(v|m)\.pptv\.com\/)?(^https?:\/\/player\.aplus\.pptv\.com\/)?(^https?:\/\/(.*\.)?tv\.sohu\.com\/v)?(^https?:\/\/film\.sohu\.com\/album\/)?(^https?:\/\/((m|3g)\.)?v\.qq\.com\/)?(^https?:\/\/((?!https?:\/\/).)*\.tudou\.com\/)?(^https?:\/\/(www|m)\.ixigua\.com\/)?(^https?:\/\/((?!https?:\/\/).)*\.youku\.com\/)?/i);
    if(!match || match[0] === ''){
        return;
    }
    function KillBuddha_coexist(d, e, f) {
        if (e.substr(0, 2) === 'on') {
            e = e.substr(2);
        }
        if (window.addEventListener) {
            d.addEventListener(e, f, !1);
        } else if (window.attachEvent) {
            d.attachEvent('on' + e, f);
        } else {
            var f_ = d['on' + e];
            if (typeof f_ === 'function') {
                d['on' + e] = function () {
                    f_();
                    f();
                };
            } else {
                d['on' + e] = f;
            }
        }
    }
    match = window.location.href.match(/(^https?:\/\/player\.aplus\.pptv\.com\/)?/i);
    if(!match || match[0] === ''){
        var x = 0, y = 0, left = 0, top = 0, down = !1, move = !1, i = 0, clear = null, time = 666 , KillBuddha_div = document.createElement('div');
        KillBuddha_div.style = 'z-index:99999999999999;position:fixed;cursor:pointer;width:100px;height:100px;right:60px;bottom:60px;display:block;box-shadow:rgba(15, 66, 76, 0.25) 0px 0px 8px 3px;border-radius:15px;background-size:100% 100%;background-image:url(data:image/png;base64,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);';
        if (!KillBuddha_big){
            KillBuddha_div.style.width = '60px';
            KillBuddha_div.style.height = '60px';
        }
        if (KillBuddha_hidden){
            KillBuddha_div.style.display = 'none';
        }else{
            setInterval(function (){
                if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                    KillBuddha_div.style.display = 'none';
                }else{
                    var isWebFull = !1;
                    document.querySelectorAll('video').forEach(function (player) {
                        if (Math.abs(parseInt(player.offsetHeight) - parseInt(window.innerHeight)) < 10 || Math.abs(parseInt(player.offsetWidth) - parseInt(window.innerWidth)) < 10) {
                            isWebFull = !0;
                        }
                    });
                    if (isWebFull) {
                        KillBuddha_div.style.display = 'none';
                    } else {
                        KillBuddha_div.style.display = 'block';
                    }
                }
            }, 1111);
        }
        KillBuddha_div.onmouseover = KillBuddha_div.onfocus = function () {
            KillBuddha_div.style['box-shadow'] = '0px 0px 8px 3px';
        };
        KillBuddha_div.onmouseleave = KillBuddha_div.onblur = function () {
            KillBuddha_div.style['box-shadow'] = 'rgba(15, 66, 76, 0.25) 0px 0px 8px 3px';
        };
        KillBuddha_div.onmousedown = function(e) {
            KillBuddha_div.style.cursor = 'move';
            x = e.clientX;
            y = e.clientY;
            left = KillBuddha_div.offsetLeft;
            top = KillBuddha_div.offsetTop;
            down = !0;
            move = !1;
        };
        KillBuddha_div.onmouseup = function() {
            KillBuddha_div.style.cursor = 'pointer';
            down = !1;
        };
        KillBuddha_coexist(window, 'onmousemove', function (e) {
            if (!down) {
                return;
            }
            move = !0;
            KillBuddha_div.style.left = e.clientX - x + left + 'px';
            KillBuddha_div.style.top = e.clientY - y + top + 'px';
        });
        KillBuddha_coexist(document, 'touchstart', function (e) {
            if (e.target !== KillBuddha_div){
                return;
            }
            KillBuddha_div.style['box-shadow'] = '0px 0px 8px 3px';
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
            left = KillBuddha_div.offsetLeft;
            top = KillBuddha_div.offsetTop;
        });
        KillBuddha_coexist(document, 'touchend', function (e) {
            if (e.target !== KillBuddha_div){
                return;
            }
            KillBuddha_div.style['box-shadow'] = 'rgba(15, 66, 76, 0.25) 0px 0px 8px 3px';
        });
        KillBuddha_coexist(document, 'touchmove', function (e) {
            if (e.target !== KillBuddha_div){
                return;
            }
            KillBuddha_div.style.left = e.touches[0].clientX - x + left + 'px';
            KillBuddha_div.style.top = e.touches[0].clientY - y + top + 'px';
        });
        KillBuddha_div.onclick = function (e) {
            if (move) {
                return;
            }
            i++;
            if (clear) {
                clearTimeout(clear);
            }
            clear = setTimeout(function () {
                if (i === 1) {
                    location.href = KillBuddha_src + location.href;
                } else {
                    window.open(KillBuddha_src + location.href);
                }
                clear = null;
                i = 0;
            }, time);
        };
        (function wait() {
            if (document.body || document.documentElement) {
                KillBuddha_coexist(document, 'onkeydown', function (e) {
                    var keyCode = e.keyCode || e.which || e.charCode;
                    var altKey = e.altKey;
                    if (altKey && keyCode === 65) {
                        location.href = KillBuddha_src + location.href;
                    }
                    if (altKey && keyCode === 81) {
                        window.open(KillBuddha_src + location.href);
                    }
                });
                (document.querySelector('body')?document.body:document.documentElement).appendChild(KillBuddha_div);
            } else {
                setTimeout(function () {
                    wait();
                }, 25);
            }
        })();
    }
    function show(){
        if(!KillBuddha_no_ads || document.getElementById('______')){
            return;
        }
        var KillBuddha_div = document.createElement('div');
        KillBuddha_div.style = 'z-index:99999999999999;position:fixed;width:250px;height:120px;left:25%;top:30%;font-size:22px;background-color:#FCCF33;box-shadow:rgba(15, 66, 76, 0.25) 0px 0px 8px 3px;border-radius:15px;overflow:hidden;background-size:100% 100%;';
        KillBuddha_div.id = '______';
        (document.querySelector('body')?document.body:document.documentElement).appendChild(KillBuddha_div);
        var KillBuddha_div_son = document.createElement('input');
        KillBuddha_div_son.style = 'width:100%;height:1.5em;color:#000000;background-color:#FFFFFF;font-size:22px;text-align:center;';
        KillBuddha_div_son.type = 'submit';
        KillBuddha_div_son.value = '\u70b9\u51fb\u53d6\u6d88\u672c\u6b21\u53bb\u5e7f\u544a';
        KillBuddha_div_son.onclick = function(e){
            KillBuddha_no_ads = !1;
            KillBuddha_div.remove();
        };
        KillBuddha_div.appendChild(KillBuddha_div_son);
        KillBuddha_div_son = document.createElement('div');
        KillBuddha_div_son.style = 'height:100%;color:#000000;font-size:22px;overflow:auto;scrollbar-width:thin;text-align:center;';
        KillBuddha_div.appendChild(KillBuddha_div_son);
        var KillBuddha_div_ = document.createElement('div');
        KillBuddha_div_.style = 'height:1.2em;color:#000000;font-size:22px;text-align:center;';
        KillBuddha_div_.innerHTML = '<a href=\'https://greasyfork.org/zh-CN/users/792030\'>\u6740\u4f5b\u89c2\u97f3</a>';
        KillBuddha_div_son.appendChild(KillBuddha_div_);
        KillBuddha_div_ = document.createElement('div');
        KillBuddha_div_.style = 'height:1.2em;color:#000000;font-size:22px;text-align:center;';
        KillBuddha_div_.innerHTML = '<a href=\'https://greasyfork.org/zh-CN/scripts/429245\'>\u5168\u7f51\u975e\u0056\u0049\u0050\u89c6\u9891\u53bb\u5e7f\u544a</a>';
        KillBuddha_div_son.appendChild(KillBuddha_div_);
        KillBuddha_div_ = document.createElement('div');
        KillBuddha_div_.style = 'height:1.2em;color:#000000;font-size:22px;text-align:center;';
        KillBuddha_div_.innerHTML = '\u53bb\u5e7f\u544a\u4e2d...';
        KillBuddha_div_son.appendChild(KillBuddha_div_);
        setTimeout(function (){
            KillBuddha_div.remove();
        }, 1111);
    }
    switch (window.location.host) {
    case 'm.iqiyi.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('normal-public-time')[0] && document.getElementsByClassName('normal-public-time')[0].style.display !== 'none'){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.currentTime = 1000;
                        });
                    }
                }
            }, 111);
        })();
        break;
    case 'www.iqiyi.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    var close = !1;
                    if (!close && document.getElementsByClassName('cupid-public-time')[0] && document.getElementsByClassName('cupid-public-time')[0].style.display === '') {
                        show();
                        if (document.querySelector('#flashbox > iqpdiv > iqpdiv.iqp-player > iqpdiv.iqp-player-videolayer > iqpdiv > video')) {
                            document.querySelector('#flashbox > iqpdiv > iqpdiv.iqp-player > iqpdiv.iqp-player-videolayer > iqpdiv > video').removeAttribute('src');
                            document.querySelector('#flashbox > iqpdiv > iqpdiv.iqp-player > iqpdiv.iqp-player-videolayer > iqpdiv > video').load();
                        }
                        close = !0;
                    }
                    if (close && document.getElementsByClassName('skippable-after')[0]) {
                        document.getElementsByClassName('skippable-after')[0].click();
                        close = !1;
                    }
                }
                if(document.getElementsByClassName('cupid-pause-close')[0]){document.getElementsByClassName('cupid-pause-close')[0].parentNode.remove();}
                Array.from(document.getElementsByClassName('iqp-logo-box')).forEach(function (div_){div_.remove();});
                Array.from(document.getElementsByClassName('iqp-logo-top logoShowAnimation')).forEach(function (div_){div_.remove();});
                Array.from(document.getElementsByClassName('iqp-logo-bottom logoShowAnimation')).forEach(function (div_){div_.remove();});
            }, 111);
            Array.from(document.getElementsByClassName('iqp-integral-inner')).forEach(function (div_){div_.remove();});
        })();
        break;
    case 'm.fun.tv':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('m-h5v-qt')[0]){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.currentTime = 1000;
                        });
                    }
                }
            }, 222);
        })();
        break;
    case 'www.wasu.cn':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            var intervalID = setInterval(function() {
                if(typeof(_whiteInfo) !== 'undefined'){
                    KillBuddha_div.id = 'KillBuddha_div';
                    _whiteInfo += '|KillBuddha_div';
                    clearInterval(intervalID);
                }
            }, 50);
            if(KillBuddha_no_ads){
                show();
                var setInterval_ = setInterval;
                var intervalID_ = setInterval(function (){
                    if(!document.querySelector('#adCountDown')){
                        clearInterval(intervalID_);
                        window.setInterval = setInterval_;
                    }
                    if(!KillBuddha_no_ads){
                        clearInterval(intervalID_);
                        window.setInterval = setInterval_;
                    }
                }, 111);
                window.setInterval = function(f,timeout,...arg){
                    timeout = timeout/66;
                    setInterval_(f,timeout,...arg);
                };
                if(document.getElementById('play_and_info_fix_adv')){document.getElementById('play_and_info_fix_adv').style.display = 'none';}
                Array.from(document.getElementsByClassName('ws_poster')).forEach(function (div_){div_.style.display = 'none';});
            }
        })();
        break;
    case 'www.le.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('vdo_post_time')[0]){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.setAttribute('src', null);
                        });
                    }
                }
                if(typeof($)!='undefined'){
                    $('.hv_pause_content').remove();
                }
            }, 1111);
        })();
        break;
    case 'm.mgtv.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('ad-time-area2')[0] && document.getElementsByClassName('ad-time-area2')[0].style.display !== 'none'){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.setAttribute('src', null);
                        });
                    }
                }
                Array.from(document.getElementsByClassName('ad-fixed-bar')).forEach(function (div_){div_.remove();});
            }, 1111);
        })();
        break;
    case 'www.mgtv.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(typeof($)!='undefined'){
                    if(KillBuddha_no_ads){
                        if($('.as_fill_player.as_video_bg_url')[0]){
                            show();
                            $('video').each(function (i,video_) {
                                video_.currentTime = 1000;
                            });
                        }
                    }
                    $('.as-pause_container').css('display', 'none');
                    $('.as_stages-wrapper').css('display', 'none');
                    $('.m-agreement').remove();
                }
            }, 111);
        })();
        break;
    case 'm.miguvideo.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(typeof($)!='undefined'){
                    if(KillBuddha_no_ads){
                        if($('.skip_advert')[0]){
                            show();
                            $('video').each(function (i,video_) {
                                video_.currentTime = 1000;
                            });
                        }
                    }
                }
            }, 111);
        })();
        break;
    case 'm.pptv.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                Array.from(document.getElementsByClassName('ad')).forEach(function (div_){div_.remove();});
                Array.from(document.getElementsByClassName('swiper-slide')).forEach(function (div_){div_.remove();});
                Array.from(document.getElementsByClassName('foot_app')).forEach(function (div_){div_.remove();});
            }, 111);
        })();
        break;
    case 'player.aplus.pptv.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if (document.getElementsByClassName('p-video-vastad')[0]) {
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            if(video_.currentTime > 0){
                                video_.currentTime = 1000;
                            }
                        });
                    }
                }
            }, 111);
        })();
        break;
    case 'v.pptv.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(typeof($)!='undefined'){
                    if(KillBuddha_no_ads){
                        if ($('.roll-current')[0] && $('.roll-current')[0].duration !== 0) {
                            show();
                            $('.roll-current')[0].currentTime = 1000;
                        }
                        if (document.getElementsByClassName('p-video-vastad')[0]) {
                            Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                                if(video_.currentTime > 0){
                                    video_.currentTime = 1000;
                                }
                            });
                        }
                    }
                    $('#p-mark').css('display', 'none');
                    $('.w-video-vastad').css('display', 'none');
                }
            }, 111);
        })();
        break;
    case 'pad.tv.sohu.com':
    case 'm.tv.sohu.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('x-ad-panel')[0] && document.getElementsByClassName('x-ad-panel')[0].style.display !== 'none'){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.playbackRate = 7.5;
                        });
                    }
                }
                Array.from(document.getElementsByClassName('js-oper-pos')).forEach(function (div_){div_.remove();});
            }, 1111);
        })();
        break;
    case 'tv.sohu.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            var src = '';
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(typeof($)!='undefined' && $('.x-video-adv').find('video')[0]){
                        show();
                        $('.x-video-adv').find('video').each(function (i,video_) {
                            if(src === video_.src){
                                video_.muted = !0;
                                video_.playbackRate = 16;
                            }else{
                                video_.currentTime = 1000;
                            }
                            src = video_.src;
                        });
                    }
                }
                Array.from(document.getElementsByClassName('x-fox-btn')).forEach(function (div_){div_.display='none';});
                Array.from(document.getElementsByClassName('x-adv-pause-nonlinear-panel')).forEach(function (div_){div_.display='none';});
                Array.from(document.getElementsByClassName('x-adv-flogo-panel')).forEach(function (div_){div_.display='none';});
            }, 111);
        })();
        break;
    case 'm.v.qq.com':
    case '3g.v.qq.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('txp_ad')[0] && document.getElementsByClassName('txp_ad')[0].className === 'txp_ad'){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.currentTime = 1000;
                        });
                    }
                }
            }, 555);
        })();
        break;
    case 'v.qq.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(typeof($)!='undefined'){
                    if(KillBuddha_no_ads){
                        if($('.txp_ad').find('txpdiv').find('video').length !== 0){
                            $('.txp_ad').find('txpdiv').find('video').each(function (i,video_) {
                                show();
                                if (video_.duration !== video_.currentTime) {
                                    video_.setAttribute('src', 'https://qq.com');
                                }
                            });
                        }else{
                            var ad = !1;
                            var txp_none = 0;
                            $('.txp_ad_skip').each(function (i,div_) {
                                if (div_.className.indexOf('txp_none') < 0) {
                                    ad = !0;
                                }else{
                                    txp_none++;
                                }
                            });
                            if(ad && txp_none !== 0 && txp_none !== document.getElementsByClassName('txp_ad_skip').length){
                                show();
                                $('video').each(function (i,video_) {
                                    if (video_.duration !== video_.currentTime) {
                                        video_.currentTime = 1000;
                                    }
                                });
                            }
                        }
                    }
                    $('.txp_waterMark_pic').css('display', 'none');
                    if ($('.txp_ad')) {
                        $('.txp_ad').css('display', 'none');
                    }
                    if ($('.txp_zt_video').length !== 0 && $('.txp_zt_video')[0].display !== 'none') {
                        $('.txp_zt_video').css('display', 'none');
                    }
                }
            }, 111);
        })();
        break;
    case 'm.youku.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(KillBuddha_no_ads){
                    if(document.getElementsByClassName('x-advert')[0] && document.getElementsByClassName('x-advert')[0].style.display !== 'none'){
                        show();
                        Array.from(document.getElementsByTagName('video')).forEach(function (video_){
                            video_.setAttribute('src', null);
                        });
                    }
                }
                Array.from(document.getElementsByClassName('Corner-container')).forEach(function (div_){div_.remove();});
            }, 111);
        })();
        break;
    case 'v.youku.com':
    case 'v-wb.youku.com':
    case 'vku.youku.com':
        (function() {
            // * 请遵守最终用户许可协议 license:End-User License Agreement
            if(!KillBuddha_no_ads) return;
            setInterval(function (){
                if(typeof($)!='undefined'){
                    if(KillBuddha_no_ads){
                        if ($('.h5-ext-layer').find('div').find('video').length !== 0) {
                            show();
                            $('.h5-ext-layer').find('div').find('video').each(function (i,video_) {
                                if (video_.duration !== video_.currentTime) {
                                    video_.currentTime = 1000;
                                }
                            });
                        }
                        if ($('.advertise-layer').find('div').find('video').length !== 0) {
                            show();
                            $('.advertise-layer').find('div').find('video').each(function (i,video_) {
                                if (video_.duration !== video_.currentTime) {
                                    video_.currentTime = 1000;
                                }
                            });
                        }
                    }
                    $('.kui-watermark-youku-watermark').css('display', 'none');
                    $('.advertise-layer').css('display', 'none');
                }
            }, 111);
        })();
        break;
    }
})();