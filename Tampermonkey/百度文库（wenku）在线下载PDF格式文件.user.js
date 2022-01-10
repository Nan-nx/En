// ==UserScript==
// @name         百度文库（wenku）在线下载PDF格式文件
// @namespace    http://ekozhan.com
// @version      0.2.0
// @description  百度文库文档页面打印PDF，chrome浏览器最好能安装一下 adblock 插件，下载后的pdf文件可以在 https://pdf2docx.com/zh/ 上转换成docx
// @author       eko.zhan, HelloCodeMing
// @match        *://wenku.baidu.com/view/*
// @grant        unsafeWindow
// @license      GPL-2.0
// @icon         https://www.baidu.com/cache/icon/favicon.ico
// ==/UserScript==

; (function () {
  'use strict'
  //等待3秒页面加载完毕后再单击阅读更多按钮
  window.setTimeout(function () {
    insert()
  }, 300)

  //insert print btn
  function insert() {
    if ($('#btnPrintStyle').length == 0) {
      $('head').append(
        [
          '<style id="btnPrintStyle">',
          '.ez-btn{background-color: #f7603e;border-radius: 6px;color: #fff;border: 0;height: 30px;line-height: 30px;width: 92px;margin-top: 2px;display: block;position: relative;left: 9px;float: left;font-size: 16px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: left;padding-left: 15px;transition: opacity .3s;}',
          '.ez-btn:hover{background-color:#ff4e26;}',
          '.ez-btn[title]:hover:after {content: attr(_title);position: absolute;top: -4px;left: 105%;min-width: 100px;max-width: 300px; padding: 4px 10px;background: #000000;color: #ffffff;border-radius: 4px;text-align:left;z-index:2021;}',
          '.ez-panel{z-index:2021;display:none;position: absolute;width: 300px;font-size:14px;background: #ffffff;color: #ff4e26;  border-radius: 4px;  border: 1px solid #ff4e26;  padding: 6px;  margin: 2px;}',
          '#doc-header-test .doc-value{margin-right: 10px !important;padding-right: 10px;}',
          '@media print {body {display: block !important;}}',
          '</style>'
        ].join(' ')
      )
    }
    $('.topbar-container').append('<button class="ez-btn">免费下载</button>')
    $('body').append(
      [
        '<div class="ez-panel">',
        '常见问题：<br/>',
        '1、<a href="https://greasyfork.org/zh-CN/forum/discussion/46222/x" target="_blank">点击免费下载后，如何打印成pdf文件？</a>',
        '<br/>2、<a href="https://greasyfork.org/zh-CN/forum/discussion/44509/x" target="_blank">文字重叠重影该如何解决？</a>',
        '<br/>3、<a href="https://greasyfork.org/zh-CN/forum/discussion/47744/x" target="_blank">图片空白，或者图片只有一半的情况如何处理？</a>',
        '<br/>4、<a href="https://greasyfork.org/zh-CN/forum/discussion/46249/x" target="_blank">页数超过100页的文档该如何打印成pdf？</a>',
        '<br/>5、<a href="https://greasyfork.org/zh-CN/forum/discussion/47743/x" target="_blank">打印出来的pdf文件里文字断裂，或者图片表格上下页分开如何处理？</a>',
        '<div>'
      ].join('')
    )
    var t = null
    $('.ez-btn').hover(
      function () {
        $('.ez-panel')
          .css({
            top: $('.ez-btn').offset().top + 'px',
            left: $('.ez-btn').offset().left + 70 + 'px'
          })
          .show()
      },
      function () {
        if (t) window.clearTimeout(t)
        t = window.setTimeout(function () {
          $('.ez-panel').hide()
        }, 10 * 1000)
      }
    )
    $('.ez-btn').click(function () {
      prePrint()
    })
    $('body').mousedown(function (e) {
      if (e.button == 2) {
        //imgHandle()
      }
      return true
    })
  }
  //main function
  function prePrint() {
    $('.ez-panel').remove()
    // add by eko.zhan at 2019-12-14 17:35
    $('head')
      .find('link')
      .each((index, item) => {
        if (
          $(item)
            .attr('href')
            .indexOf('/common_toc/common/style/main') != -1
        ) {
          $(item).remove()
        }
      })

    $('.read-all').click()
    $('.header-wrapper').remove()
    $('.no-full-screen').remove()
    $('.lazy-load').remove()
    $('.reader-topbar').remove()

    jQuery.fn.extend({
      remove: function () {
        return false
      }
    })
    var _h = document.body.scrollHeight,
      _tmp = 0
    var _t = window.setInterval(function () {
      $(window).scrollTop(_tmp)
      _tmp = _tmp + 700
      _h = document.body.scrollHeight
      if (_tmp > _h) {
        window.clearInterval(_t)
        doPrint()
      }
    }, 300)
  }

  /**
   * 图片处理，将 div background img 处理成 img 标签，利用 img clip:rect style 来处理图片
   * 暂时未找到 img clip:rect 的规律
   * //FIXME
   */
  function imgHandle() {
    $('div.reader-pic-item').each(function (i, item) {
      var _style = $(item)[0].style
      var _imgUrl = _style.backgroundImage.substring(
        5,
        _style.backgroundImage.length - 2
      )

      var imgPanel = '<img src="' + _imgUrl + '"/>'
      $(item)[0].style.backgroundImage = null

      var p = document.createElement('p')
      $($(item)[0].attributes).each(function (i, attr) {
        $(p).attr(attr.nodeName, attr.nodeValue)
      })
      $(p).append(imgPanel)
      $(item)
        .parent()
        .html(p)
    })
  }

  /**
   * 调用浏览器打印
   */
  function doPrint() {
    //imgHandle()
    window.setTimeout(function () {
      window.print()
    }, 3000)
  }
})()