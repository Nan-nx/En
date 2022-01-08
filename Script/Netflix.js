[rewrite_local]
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://ghproxy.com/https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://ghproxy.com/https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
[mitm]
hostname = ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com
