/*
Surge：
京粉转链 = type=http-response,pattern=^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Wangsc1/All/master/Scripts/jd_jf.js

QuanX：
^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/Wangsc1/All/master/Scripts/jd_jf.js

hostname=api.m.jd.com
 */

const path1 = "serverConfig";
const path2 = "wareBusiness";
const path2h = "wareBusiness.style";
const path3 = "basicConfig";
const path4 = "pingou_item";
const consolelog = false;
const url = $request.url;
const body = $response.body;
const $tool = tool();

let cookie = $tool.getCache("jfCookie") || "";
let cscheme = $tool.getCache("jfChooseScheme") || "jd"; // "jx","js","jk" 京东、京喜、京东极速版、京东健康
let jsapp = [true, "true"].includes($tool.getCache("jfusejsapp")) || false; // 对极速版是否也跳转 app，注意即使跳转 app，也需要先加入购物车返回再结账，否则无法使用极速版优惠券
let browser = $tool.getCache("chooseBrowser") || "Safari";
let jfAutoScheme = $tool.getCache("jfAutoScheme"); // 本地不使用 BoxJs 可自行更改 let jfAutoScheme = true / false
let jfConvert = $tool.getCache("jfUseConvert");

let chooseScheme;
let chooseBrowser;
switch (cscheme) {
    case "jd":
        chooseScheme = "openjd";
        break;
    case "jx":
        chooseScheme = "openapp.jdpingou";
        break;
    case "jk":
        chooseScheme = "openApp.jdHealth";
        break;
    case "js":
        if (jsapp) {
            chooseScheme = "openjdlite";
            break;
        }
    case "browser":
        chooseScheme = "browser";
        break;
}
switch (browser) {
    case "Safari":
        chooseBrowser = "";
        break;
    case "Alook":
        chooseBrowser = "Alook://";
        break;
    default:
        chooseBrowser = $tool.getCache("jfDIYScheme");
}
const autoChoose = jfAutoScheme == undefined ? true : [true, "true"].includes(jfAutoScheme);
const useConvert = jfAutoScheme == undefined ? true : [true, "true"].includes(jfConvert);
let autoScheme;
let cookiesArr = [
    $tool.getCache("CookieJD"),
    $tool.getCache("CookieJD2"),
    ...cookieParse($tool.getCache("CookiesJD") || "[]").map((item) => item.cookie),
].filter((item) => !!item);

function cookieParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
            return [];
        }
    }
}

cookie = cookie ? cookie : cookiesArr[0];

if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);
    delete obj.serverConfig.httpdns;
    delete obj.serverConfig.dnsvip;
    delete obj.serverConfig.dnsvip_v6;
    $done({ body: JSON.stringify(obj) });
}

if (url.indexOf(path3) != -1) {
    let obj = JSON.parse(body);
    let JDHttpToolKit = obj.data.JDHttpToolKit;
    let jCommandConfig = obj.data.jCommandConfig;
    if (JDHttpToolKit) {
        delete obj.data.JDHttpToolKit.httpdns;
        delete obj.data.JDHttpToolKit.dnsvipV6;
    }
    if (jCommandConfig) {
        delete obj.data.jCommandConfig.httpdnsConfig;
    }
    $done({ body: JSON.stringify(obj) });
}

if (url.indexOf(path2) != -1 || url.indexOf(path4) != -1) {
    if (!$tool.isQuanX) {
        $done({ body });
    }
    let obj = JSON.parse(body);
    const floors = obj.floors;
    const commodity_info = floors[floors.length - 1];
    const others = obj.others;
    const domain = obj.domain;
    const shareUrl =
        url.indexOf(path4) != -1
            ? domain.h5Url
            : url.indexOf(path2h) != -1
            ? others.property.shareUrl
            : commodity_info.data.property.shareUrl;
    autoScheme = url.indexOf(path2h) != -1 ? "openApp.jdHealth" : "openjd";
    //const scheme = !autoChoose ? chooseScheme : url.indexOf(path4) != -1 ? "openapp.jdpingou" : url.indexOf(path2h) != -1 ? "openApp.jdHealth" : url.indexOf("lite_"+path3) != -1 ? "openjdlite" : "openjd";
    let getHistory = "";
    let convertURL = "";
    let jxconvertURL = "";
    if (useConvert) {
        convertURL = convert(shareUrl);
        jxconvertURL = url.indexOf(path4) != -1 ? convert(shareUrl, true) : undefined;
    }
    Promise.all([getHistory, convertURL, jxconvertURL])
        .then((detail) => {
            let msg = "";
            if (detail[1] == "useJXOrigin") detail[1] = detail[2];
            let convertmsg = detail[1].convertURL ? detail[1].msg : detail[1];
            msg += convertmsg ? convertmsg : "‼️ 该商品暂无返利信息";
            let oprnUrl = detail[1].convertURL ? detail[1].convertURL : "";
            $tool.notify("京粉佣金", "", msg, oprnUrl);
        })
        .finally(() => {
            $done({ body });
        });
}

function convert(url, isOriginJXURL) {
    return new Promise((resolve) => {
        if (!cookiesArr[0]) {
            $tool.setCache("false", "jfUseConvert");
            resolve("");
        } else {
            let id;
            if (
                url.includes("item.m.jd") ||
                url.includes("item.jd") ||
                (!autoChoose && chooseScheme == "openApp.jdHealth")
            ) {
                id = url.match(/(\d+)\.html/)[1];
                url = `https:\/\/item.m.jd.com\/product\/${id}.html`;
            } else if (url.includes("m.jingxi") || url.includes("wq.jd.com")) {
                id = url.match(/sku=(\d+)/)[1];
                url = `https:\/\/wq.jd.com\/item\/view?sku=${id}`;
                if (isOriginJXURL || (!autoChoose && chooseScheme == "openjdlite"))
                    url = `https:\/\/m.jingxi.com\/item\/jxview?sku=${id}`;
                autoScheme = "openapp.jdpingou";
            } else if (url.includes("kpl.m.jd")) {
                id = url.match(/wareId=(\d+)/)[1];
                url = `https:\/\/kpl.m.jd.com\/product?wareId=${id}`;
                autoScheme = jsapp ? "openjdlite" : "browser";
            } else {
                url = url;
                //url = url.replace(/\//g, "\\/");
            }
            let body = {
                funName: "getSuperClickUrl",
                param: {
                    materialInfo: url,
                    ext1: "200|100_3|",
                },
            };
            let t = +new Date();
            let options = {
                url: `https://api.m.jd.com/api?functionId=ConvertSuperLink&appid=u&_=${t}&body=${encodeURI(
                    JSON.stringify(body)
                )}&loginType=2`,
                headers: {
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    Connection: "keep-alive",
                    Cookie: cookie,
                    Host: "api.m.jd.com",
                    Referer: "https://servicewechat.com/wxf463e50cd384beda/114/page-frame.html",
                    "User-Agent":
                        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.4(0x18000429) NetType/WIFI Language/zh_CN",
                    "content-type": "application/json",
                },
            };
            $tool.get(options, function (err, resp, data) {
                if (!err) {
                    data = JSON.parse(data);
                    console.log("JD Convert Data:\n" + data);
                    if (data.code === 200) {
                        let r = {};
                        let scheme = autoChoose ? autoScheme : chooseScheme;
                        if (data.data.promotionUrl) {
                            r.msg = `〽️ 佣金比例 ➩ ${data.data.wlCommissionShare}%   ║   💴 预估佣金 ➩ ${data.data.wlCommission}¥`;
                            r.convertURL =
                                scheme == "browser"
                                    ? chooseBrowser + data.data.promotionUrl
                                    : `${scheme}://virtual?params=%7B%22category%22:%22jump%22,%22des%22:%22m%22,%22sourceValue%22:%22babel-act%22,%22sourceType%22:%22babel%22,%22url%22:%22${data.data.promotionUrl}%22%7D`;
                        } else {
                            r.msg = `‼️ 该商品暂无返利信息，${data.data.formatContext.trim()}`;
                            r.convertURL =
                                scheme == "browser"
                                    ? chooseBrowser + data.data.originalContext
                                    : `${scheme}://virtual?params=%7B%22category%22:%22jump%22,%22des%22:%22m%22,%22sourceValue%22:%22babel-act%22,%22sourceType%22:%22babel%22,%22url%22:%22${data.data.originalContext}%22%7D`;
                        }
                        resolve(r);
                    } else if (data.code === 105) {
                        if (autoScheme == "openapp.jdpingou") resolve("useJXOrigin");
                        else resolve("");
                    } else if (data.code === 430) {
                        $tool.setCache("false", "jfUseConvert");
                        resolve("");
                    } else {
                        resolve(JSON.stringify(data));
                    }
                } else {
                    console.log("JD Convert Error:\n" + err);
                    resolve();
                }
            });
        }
    });
}

function dateFormat(cellval) {
    const date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate;
}

function tool() {
    const isSurge = typeof $httpClient != "undefined";
    const isQuanX = typeof $task != "undefined";
    const node = (() => {
        if (typeof require == "function") {
            const request = require("request");
            return { request };
        } else {
            return null;
        }
    })();
    const notify = (title, subtitle, content, open_url) => {
        if (isSurge) {
            let opts = {};
            if (open_url) opts["url"] = open_url;
            if (JSON.stringify(opts) == "{}") {
                $notification.post(title, subtitle, content);
            } else {
                $notification.post(title, subtitle, content, opts);
            }
        }
        if (isQuanX) {
            let opts = {};
            if (open_url) opts["open-url"] = open_url;
            if (JSON.stringify(opts) == "{}") {
                $notify(title, subtitle, content);
            } else {
                $notify(title, subtitle, content, opts);
            }
        }
        if (isLoon) {
            let opts = {};
            if (open_url) opts["openUrl"] = open_url;
            if (JSON.stringify(opts) == "{}") {
                $notification.post(title, subtitle, content);
            } else {
                $notification.post(title, subtitle, content, opts);
            }
        }
        if (node) {
            let content_Node = content + (open_url == undefined ? "" : `\n\n跳转链接：${open_url}`);
            console.log(`${title}\n${subtitle}\n${content_Node}\n\n`);
        }
    };
    const setCache = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key);
        if (isSurge) return $persistentStore.write(value, key);
    };
    const getCache = (key) => {
        if (isQuanX) return $prefs.valueForKey(key);
        if (isSurge) return $persistentStore.read(key);
    };
    const adapterStatus = (response) => {
        if (response.status) {
            response["statusCode"] = response.status;
        } else if (response.statusCode) {
            response["status"] = response.statusCode;
        }
        return response;
    };
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "GET";
            $task.fetch(options).then(
                (response) => {
                    callback(null, adapterStatus(response), response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge)
            $httpClient.get(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        if (node) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
    };
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options };
            options["method"] = "POST";
            $task.fetch(options).then(
                (response) => {
                    callback(null, adapterStatus(response), response.body);
                },
                (reason) => callback(reason.error, null, null)
            );
        }
        if (isSurge) {
            $httpClient.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
        if (node) {
            node.request.post(options, (error, response, body) => {
                callback(error, adapterStatus(response), body);
            });
        }
    };
    return { isQuanX, isSurge, notify, setCache, getCache, get, post };
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear(),
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds(),
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            if (k == "y+") {
                fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
            } else if (k == "S+") {
                var lens = RegExp.$1.length;
                lens = lens == 1 ? 3 : lens;
                fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
            } else {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
                );
            }
        }
    }
    return fmt;
};
