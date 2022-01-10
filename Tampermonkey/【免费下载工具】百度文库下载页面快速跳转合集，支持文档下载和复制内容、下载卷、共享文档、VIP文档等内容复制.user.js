// ==UserScript==
// @name         【免费下载工具】百度文库下载页面快速跳转合集，支持文档下载和复制内容、下载卷、共享文档、VIP文档等内容复制
// @namespace    zhuayuanmi
// @version      1.0.14
// @description  百度文库下载页快速跳转，含多个免费下载工具，可以根据自己的需要选择不同的工具来使用，文档下载和复制内容、下载卷、共享文档、VIP文档等内容复制。
// @author       zhuayuanmi
// @icon         https://www.baidu.com/cache/icon/favicon.ico
// @match        http://wenku.baidu.com/*
// @match        https://wenku.baidu.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
    $("head").append (
        '<link '
        + 'href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" '
        + 'rel="stylesheet" type="text/css">'
    );
    var content = document.getElementById('reader-container-inner-1');
 
    let divEle = document.getElementById('hqdiv');
    if(!divEle){
        var para = document.createElement("div");
        para.innerHTML = '<div style="position:fixed;left:10px;top:200px;width:55px;height:100px;z-index:999;" id="hqdiv"></div>';
        document.body.appendChild(para);
        $("#hqdiv").append('<ul id="hq-nav-bar" />');
    }
 
    //添加子节点
    $("#hq-nav-bar").append('<li class="level-one" id="hqdownload1"><i class="fa fa-arrow-circle-down"></i><ul class="level-two"><li>瞄瞄文库</li></ul></li><li class="level-one" id="hqdownload2"><i class="fa fa-arrow-down"></i><ul class="level-two"><li>小河解析</li></ul></li><li class="level-one" id="hqdownload3"><i class="fa fa-download"></i><ul class="level-two"><li>文库API</li></ul></li><li class="level-one" id="hqdownload4"><i class="fa fa-cloud-download"></i><ul class="level-two"><li>VXX解析</li></ul></li>');
 
    document.getElementById("hqdownload1").onclick = function() {
 
        var defaulturl = window.location.href;
        let newurl = window.location.href.replace(defaulturl,"http://verymatch.xyz/wk.php");
        window.open(newurl);
    };
 
    document.getElementById("hqdownload2").onclick = function() {
 
        var defaulturl = window.location.href;
        let newurl = window.location.href.replace(defaulturl,"http://bdwk.519235.com/?url=" + defaulturl);
        window.open(newurl);
    };
 
    document.getElementById("hqdownload3").onclick = function() {
 
        var defaulturl = window.location.href;
        let newurl = window.location.href.replace(defaulturl,"http://dk.ttupp.com/wenku/?url=" + defaulturl);
        window.open(newurl);
    };
 
    document.getElementById("hqdownload4").onclick = function() {
 
        let newurl = window.location.href.replace("wenku.baidu.com","wenku.baiduvvv.com");
        window.open(newurl);
    };
 
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }
    addGlobalStyle(`
#hq-nav-bar {
  max-width: 50px;
  border: 1px solid #19A97B;
  border-radius: 4%;
  background-color: white;
  -webkit-box-shadow: -2px 3px 2px 0px rgba(5, 0, 0, 0.11);
  -moz-box-shadow:    -2px 3px 2px 0px rgba(5, 0, 0, 0.11);
  box-shadow:         -2px 3px 2px 0px rgba(5, 0, 0, 0.11);
  }
  #hq-nav-bar>li {
  color: white;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75em;
  list-style: none;
  }
  #hq-nav-bar>li.level-one {
  font-size: 1.5em;
  text-align: center;
  border-top: 1px solid #19A97B;
  cursor: pointer;
  }
  #hq-nav-bar>li.level-one:first-child {
  border-top: none;
  }
  #hq-nav-bar>li.level-one:hover {
  background: rgba(255,255,255,1);
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(233,238,242,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(233,238,242,1)));
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(233,238,242,1) 100%);
  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(233,238,242,1) 100%);
  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(233,238,242,1) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(233,238,242,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e9eef2', GradientType=0 );
  }
  #hq-nav-bar>li.selected {
  background: #3f8eb9;
  -webkit-box-shadow: inset 1px 1px 10px 1px rgba(0,0,0,0.45);
  -moz-box-shadow: inset 1px 1px 10px 1px rgba(0,0,0,0.45);
  box-shadow: inset 1px 1px 10px 1px rgba(0,0,0,0.45);
  }
  #hq-nav-bar>li>i {
  color: #19A97B;
  margin: 25%;
  }
  .level-one {
  position: relative;
  }
  .level-two {
  display: none;
  position: absolute;
  height: 50px;
  width: 100px;
  background: #19A97B;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.65em;
  text-align: center;
  }
 
  .level-two:after {
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 9px 9px 9px 0;
  border-color: transparent  #19A97B;
  display: block;
  width: 0;
  z-index: 1;
  left: -9px;
  top: 15px;
  }
 
  .level-two li {
  margin: 15px;
  }
 
  .level-one:hover > .level-two {
  display: block;
  }
 
  .level-two {
  left: 130%;
  top: 0;
  }
    `);
})();