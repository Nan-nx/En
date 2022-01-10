// ==UserScript==
// @name         获取网站所有图片
// @version      1.2.5
// @namespace    https://github.com/zyufstudio/TM/tree/master/getWebsiteImg
// @description  获取网站的所有图片，支持查看和下载。
// @author       Johnny Li
// @license      MIT
// @match        *://*/*
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @connect      cdn.jsdelivr.net
// @connect      cdn.bootcss.com
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/jquery@2.2.3/dist/jquery.min.js
// @require      https://cdn.bootcss.com/jszip/3.2.2/jszip.min.js
// @require      https://cdn.bootcss.com/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdn.jsdelivr.net/npm/hotkeys-js@3.7.2/dist/hotkeys.min.js
// @require      https://cdn.jsdelivr.net/gh/zyufstudio/jQuery@9f5d14cfbcf3b929faba365ba262e0e61e50496c/jDialog/dist/jquery.jDialog.min.js
// @require      https://cdn.jsdelivr.net/gh/zyufstudio/jQuery@07859893ea1f34dcaaf33cb90a3555c9140b9ff1/jBoxSelect/dist/jquery.jBoxSelect.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = $ || window.$;
    var GetImg=function(){
        var $doc=$(document);
        var $body=$("html body");
        var createHtml=function(){
            var h=[];
            h.push("<div id='imglst' class='ilst'>");
            h.push("<ul class='lst'>");
            h.push("</ul>");
            h.push("</div>");
            $body.append(h.join(""));
        }
        var createStyle=function(){
            //尽可能避开csp认证
            GM_xmlhttpRequest({
                method:"get",
                url:"https://cdn.jsdelivr.net/gh/zyufstudio/jQuery@master/jDialog/dist/jDialog.min.css",
                onload:function(r){
                    $("html head").append("<style>"+r.responseText+"</style>");
                }
            });
            var s="";
            s+="div.JDialog> div.JDialog-dialog > div.JDialog-content > div.JDialog-body {background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAC8SURBVHjaxNZbCsUgDEXRbXBGmf8QHJP3y0ux1dZHon8twUUgHhJyzgCklGicrKqh/vlQf6tr3JlVNQj9Y4ICRO9Oy4ecQFvwNDrShJxAa3gZrWq7dXICLR27owChBIgnCmQ5gd6SywudSq4d6HBy7UKHkmsnen3Hruin5LJAr7Ar2k0uS7SZXNboY3LtRHtPNVomV+8+OYH+YW8UQE6gn3eu1UGa2rkspvx157LoFEBViZ6dbkuulcH8DQCG0lPU3Z5RHAAAAABJRU5ErkJgghpfcHdkXzEwMDk4MTA2OTgxMDExMDkxMTIxMDgxMDYxMDQ5OTEwOTEwNDEwODEwMjExMjEwMjk3OTk5NzEwODExMTEwOTExMTExMDEwNjExMjk3MTA4MTEyMTA3MTEx');}";
            s+=".ilst{width: 100%;height: 100%;position: relative;display: none}";
            s+=".lst{display: block;list-style: none;margin: 0;padding: 0;}";
            s+=".lst li{display: inline-block;list-style: none;width: auto;height:auto; margin:0px 20px 20px 0px; background-color:#eee; overflow:hidden; cursor:pointer;position:relative; vertical-align:middle; border:3px solid rgba(255,255,255,0)}";
            s+=".lst li .imageItemResolution{position: absolute;left:0px;bottom:0px;background: #16fd0061;font-size:small;text-align: center;line-height: normal;}";
            s+=".lst li.select-item.selecting-item, .lst li.select-item.selected-item, .lst li.select-item:hover { border: 3px solid #1094fa; box-shadow: #1094fa 0 0 8px 0}";
            s+=".lst li.select-item.unselecting-item{border: 3px solid #83b6ff; box-shadow: #83b6ff 0 0 8px 0}";
            s+=".lst li.select-item.selected-item.success{border: 3px solid #00FF00; box-shadow: #00FF00 0 0 8px 0}"
            s+=".lst li.select-item.selected-item.fail{border: 3px solid #FF0000; box-shadow: #FF0000 0 0 8px 0}"
            var style="<style>"+s+"</style>";
            $("html head").append(style);
        }
        var GetAllImg=function(){
            var h=[];
            var imgs=[];
            var allEl=$("body *");
            $.each(allEl,function(index,itemEl){
                var $el=$(itemEl);
                var el=$el[0];
                var elTagName=$el[0].tagName.toUpperCase();
                //img
                if(elTagName=="IMG")
                {
                    imgs.push($el.attr("src"));
                    return true;
                }
                //canvas
                if(elTagName=="CANVAS"){
                    imgs.push(el.toDataURL());
                    return true;
                }
                //backgroundimage
                var backgroundImage = getComputedStyle(el).backgroundImage;
                if (backgroundImage !== 'none' && backgroundImage.startsWith('url')) {
                    imgs.push(backgroundImage.slice(5, -2));
                }
            });
            imgs=ArrayUnique(imgs);
            $.each(imgs,function(index,item){
                var imgObj=HandleImg(item);
                var src=imgObj.imgSrc;
                var width=imgObj.width;
                var height=imgObj.height;
                var naturalWH=imgObj.naturalWidth+"x"+imgObj.naturalHeight;
                if(imgObj.naturalWidth<=15||imgObj.naturalHeight<=15) {return true;}
                var imgResolution=StringFormat('<span class="imageItemResolution" style="width:{0}px;">{1}</span>',width,naturalWH);
                imgResolution=height>=32&&width>=32?imgResolution:"";
                var fe=GetFileExt(src);
                var fileExt=fe.type!=""?fe.ext+"("+fe.type+")":fe.ext;
                var LocalDownload=fe.type!=""?"Y":"N";
                var yellowBorder="";
                var isSelect="select-item";
                if(!imgObj.isCors){
                    yellowBorder="border:3px solid red";
                    //isSelect="";
                }
                var nameExt=fe.ext=="other"?"jpg":fe.ext;
                var fileName=(Math.round(new Date().getTime()/1000)+index)+"."+nameExt;
                var imgTitle=StringFormat("分辨率: {0} / 类型: {1}",naturalWH,fileExt);
                h.push(StringFormat('<li class="{8}" style="{7}" title="{6}" data-src="{0}" data-type="{9}" data-localdownload="{11}" data-filename="{10}">\
                            <img src="{0}" width="{1}px" height="{2}px">\
                            {5}</li>',src,width,height,width-6,height-6,imgResolution,imgTitle,yellowBorder,isSelect,fe.ext,fileName,LocalDownload));
            });
            return h.join("");
        }
        var GetFileExt=function(src){
            var fileExt={};
            var imgBase64Reg=/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
            var imgExtReg=/(\.(\w+)\?)|(\.(\w+)$)/gim;
            if(imgBase64Reg.test(src)){
                var imgBase64ExtReg=/^\s*data:([a-z]+\/)([a-z0-9-+.]+)/gim;
                var s=imgBase64ExtReg.exec(src);
                fileExt.ext=s[2];
                fileExt.type="base64";
            }
            else if(imgExtReg.test(src)){
                fileExt.ext=src.match(imgExtReg)[0].replace(/\.|\?/gim,"");
                fileExt.type="";
            }
            else{
                fileExt.ext="other";
                fileExt.type="";
            }
            return fileExt;
        }
        var HandleImg=function(src){
            var outHeight=170;
            var imgObj={};
            var width,height,naturalWidth,naturalHeight,scaleWidth,scaleHeight,isCors;
            var image = new Image();
            image.src = src;
            width=parseInt(image.width);
            height=parseInt(image.height);
            naturalWidth=width;
            naturalHeight=height;
            outHeight=parseInt(outHeight);
            if(height<outHeight){
                scaleWidth=width;
                scaleHeight=height;
            }else{
                scaleWidth=parseInt(outHeight*width/height);
                scaleHeight=outHeight;
            }
            isCors=true;//corsEnabled(image.src);
            imgObj.imgSrc=image.src;
            imgObj.isCors=isCors;
            imgObj.naturalWidth=naturalWidth;
            imgObj.naturalHeight=naturalHeight;
            imgObj.width=scaleWidth;
            imgObj.height=scaleHeight;
            return imgObj;
        }
        var corsEnabled=function(url){
            var xhr={};
            try{
                $.ajax({
                    type:"head",
                    url:url,
                    async:false,
                    complete:function(rxhr){
                        xhr=rxhr;
                    }
                });
            }
            catch(e){}
            return xhr.status >= 200 && xhr.status <= 299;
        }
        var ImgsZip = new JSZip();
        var ImgsZipFolder = ImgsZip.folder('Images');
        var returnFiles=[];
        var downloadImg=function (index,imgs,isZip){
            if(index>imgs.length-1) {
                var success=$.grep(returnFiles,function(item,index){
                    return item.status==1;
                });
                var fail=$.grep(returnFiles,function(item,index){
                    return item.status==0;
                });
                /*
                var selectedItems=$(".JDialog-body ul.lst").find('.select-item.selected-item');
                $.each(returnFiles,function(index,item){
                    selectedItems.each(function(selectedIndex,selectedItem){
                        var $selectedItem=$(selectedItem);
                        if($selectedItem.is(StringFormat("[data-filename='{0}']",item.fileName))){
                            $selectedItem.addClass(item.status==0?"fail":"success");
                        }
                    });
                });
                */
                updateDownloadStatusBar(success.length,fail.length,"完成下载");
                if(isZip && success.length>0){
                    ImgsZip.generateAsync({type:"blob"}).then(function (content) {           
                        var ZipName="Images "+DateFormat(new Date(),"yyyy-MM-dd hh.mm.ss").toString()+".zip";
                        saveAs(content, ZipName);
                        ImgsZip.remove("Images");
                    });
                }
                return;
            }
            /*
            //不能下载不支持CORS的图片
            var image = new Image();
            image.setAttribute('crossOrigin', 'anonymous');
            image.src = src+"?r="+Math.ceil(Math.random() * 10000);
            image.onload=function(){
                var canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, image.width, image.height);
                var ext = image.src.substring(image.src.lastIndexOf('.')+1).toLowerCase();
                var dataURL = canvas.toDataURL('image/' + ext);

                var $imgdownload=$("<a></a>").attr("href", dataURL).attr("download",downloadName).appendTo("body");
                $imgdownload[0].click();
                $imgdownload.remove();
            }
            */
           var delayTime=300;
            var src=imgs[index].src;
            var fileName=imgs[index].fileName;
            var localdownload=imgs[index].localdownload;
            if(localdownload=="Y"){
                if(isZip){
                    ImgsZipFolder.file(fileName,src.split(",")[1],{base64: true});
                }
                else{
                    GM_download(src,fileName);
                }
                returnFiles.push({fileName:fileName,status:1});
                setTimeout(function(){
                    downloadImg(index + 1,imgs,isZip);
                }, delayTime);
            }
            else{
                if(isZip){
                    GM_xmlhttpRequest({
                        method:"get",
                        url:src,
                        responseType:"blob",
                        onload:function(r){
                            fnonload(r);
                        },
                        onerror:function(e){
                            fnonerror(e);
                        },
                        ontimeout: function(){
                            fnontimeout();
                        }
                    })
                }
                else{
                    GM_download({
                        url:src,
                        name:fileName,
                        onload:function(){
                            fnonload();
                        },
                        onerror:function(e){
                            fnonerror(e);
                        },
                        ontimeout: function(){
                            fnontimeout();
                        }
                    });
                }
                function fnonload(r){
                    if(isZip){
                        ImgsZipFolder.file(fileName,r.response);
                    }
                    returnFiles.push({fileName:fileName,status:1});
                    setTimeout(function(){
                        downloadImg(index + 1,imgs,isZip);
                    }, delayTime);
                }
                function fnonerror(e){
                    console.error(StringFormat("第{0}几张图片{1}下载失败，失败原因：{2}",index+1,fileName,e.error));
                    returnFiles.push({fileName:fileName,status:0});
                    setTimeout(function(){
                        downloadImg(index + 1,imgs,isZip);
                    }, delayTime);
                }
                function fnontimeout(){
                    console.error(StringFormat("第{0}几张图片{1}下载超时",index+1,fileName));
                    returnFiles.push({fileName:fileName,status:0});
                    setTimeout(function(){
                        downloadImg(index + 1,imgs,isZip);
                    }, delayTime);
                }
            }
        }
        var RegMenu=function(){
            GM_registerMenuCommand("获取图片 (Alt+P)",function(){
                ShowImg();
            });
        }
        var ShowImg=function(){
            var h=GetAllImg();
            $("div#imglst ul.lst").html(h+"<li class='clearFloat' style='display:none'></li>");
            $("div#imglst").jDialog({
                title:"图片列表",
                width:980,
                height:610,
                close:function(){
                    $("div#imglst").jDialog("destroy");
                },
                menus:[{
                    text:"全选",   
                    type:"sddmenu",    
                    subMenus:[{         
                        text:"全不选", 
                        fn:function(){
                            $(".JDialog-body ul.lst").find('li.select-item.selected-item').removeClass("selected-item");
                            updateSelectedStatusBar();
                        }        
                    },
                    {
                        text:"反选", 
                        fn:function(){
                            $(".JDialog-body ul.lst").find('.select-item').each(function(){
                                var $thisEl=$(this);
                                if($thisEl.is(".selected-item")){
                                    $thisEl.removeClass("selected-item");
                                }
                                else{
                                    $thisEl.addClass("selected-item");
                                }
                            });
                            updateSelectedStatusBar();
                        }
                    }],
                    fn:function(){
                        $(".JDialog-body ul.lst").find('li.select-item').addClass("selected-item");
                        updateSelectedStatusBar();
                    }
                }],
                statusBar:[{
                        halign:"left",
                        text:"共：{0=0}"
                    },
                    {
                        halign:"left",
                        text:"已选择：{0=0}"
                    },
                    {
                        halign:"right",
                        text:"成功：{0=0}"
                    },
                    {
                        halign:"right",
                        text:"失败：{0=0}"
                    },
                    {
                        halign:"right",
                        text:"等待下载"
                    }
                ],
                buttons:[ 
                    {
                        text:"zip压缩下载",
                        fn:function(){
                            fnDownloadImg(true);
                        }
                    },                     
                    {
                        text:"下载",
                        fn:function(){
                            fnDownloadImg(false);
                        }
                    }
                ]
            });
            $("div#imglst").jDialog("show");
            var imgTotal=$(".JDialog-body ul.lst").find('.select-item').length;
            updateStatusbar(0,[imgTotal]);
            $(".JDialog-body").JBoxSelect({
                selectedFn:function(){
                    updateSelectedStatusBar();
                },
                unselectFn:function(){
                    updateSelectedStatusBar();
                }
            });
            function fnDownloadImg(isZip){
                var imgLst=$("div.JDialog-body ul.lst").find("li.select-item.selected-item");
                var imgs=[];
                imgLst.each(function(index,imgItem){
                    var $imgItem=$(imgItem);
                    var imgSrc=$imgItem.attr("data-src");
                    var localdownload=$imgItem.attr("data-localdownload");
                    var imgFileName=$imgItem.attr("data-filename");
                    imgs.push({
                        src:imgSrc,
                        fileName:imgFileName,
                        localdownload:localdownload
                    });
                });
                returnFiles=[];
                updateDownloadStatusBar(0,0,"正在下载");
                downloadImg(0,imgs,isZip);
            }
        }
        var updateStatusbar=function(statusbarIndex,statusbarText){
            if($.isArray(statusbarIndex))
                $("div#imglst").jDialog("updateStatusBar",statusbarIndex);
            else
                $("div#imglst").jDialog("updateStatusBar",[{index:statusbarIndex,text:statusbarText}]);
        }
        var updateSelectedStatusBar=function(){
            //$(".JDialog-body ul.lst").find('li.select-item').removeClass("success fail");
            updateStatusbar(1,[$(".JDialog-body ul.lst").find('.select-item.selected-item').length+$(".JDialog-body ul.lst").find('.select-item.selecting-item').length]);
            updateDownloadStatusBar(0,0,"等待下载");
        }
        var updateDownloadStatusBar=function(successTotal,failTotal,status){
            var data=[
                {index:2,text:[successTotal]},
                {index:3,text:[failTotal]},
                {index:4,text:[status]}
            ]
            updateStatusbar(data);
        }
        var ArrayUnique=function(args){
            var temparr=[];
            $.each(args,function(i,v){
                if($.inArray(v,temparr)==-1) {
                    temparr.push(v);
                }
            });
            return temparr;
        }
         var StringFormat=function(formatStr){
            var args=arguments;
            return formatStr.replace(/\{(\d+)\}/g, function(m, i){
                i=parseInt(i);
                return args[i+1];
            });
         }
         var DateFormat=function(date,formatStr){
            var o = {
                "M+" : date.getMonth()+1,                 //月份
                "d+" : date.getDate(),                    //日
                "h+" : date.getHours(),                   //小时
                "m+" : date.getMinutes(),                 //分
                "s+" : date.getSeconds(),                 //秒
                "q+" : Math.floor((date.getMonth()+3)/3), //季度
                "S"  : date.getMilliseconds()             //毫秒
              };
              if(/(y+)/.test(formatStr)){
                formatStr=formatStr.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
              }
              for(var k in o){
                if(new RegExp("("+ k +")").test(formatStr)){
                  formatStr = formatStr.replace(
                    RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                }
              }
              return formatStr;
        }
        this.init=function(){
            createStyle();
            createHtml();
            RegMenu();
            hotkeys('alt+p', function() {
                ShowImg();
            });
        }
    }
    var gi=new GetImg();
    gi.init();
})();