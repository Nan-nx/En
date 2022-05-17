## <a href="https://t.me/Nan_nx"><img src="https://raw.githubusercontent.com/Nan-nx/Nan-nx/main/hello.gif" width="65px"/></a>

#### [Nan-nx配置](https://raw.githubusercontent.com/Nan-nx/En/master/Nan-nx.conf)

<a href="https://github.com/Nan-nx/En"><img src='https://img.shields.io/badge/Quan_X-v2.0-brown'/></a> 
<a href="https://github.com/Nan-nx/Scriptable"><img src='https://img.shields.io/badge/Scriptable-v1.0-orange'/></a>
<a href="https://github.com/Nan-nx/Book"><img src='https://img.shields.io/badge/Book-v3.0-red'/></a> 
[![GitHub license](https://img.shields.io/github/license/Nan-nx/En.svg)](https://github.com/Nan-nx/En/blob/master/LICENSE) 
<a href="https://t.me/Nan_nx"><img src='https://img.shields.io/badge/By-Nan--nx-green'/></a>

#### 部分脚本配置示例

Weibo
```properties
[rewrite_local]
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/(photos/pic_recommend_status|live/media_homelist)|video/tiny_stream_video_list|photo/info|remind/unread_count) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
[mitm]
hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com
```

Display netflix ratings（IMDb、douban）
```properties
[rewrite_local]
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
# 单集评分
^https?:\/\/ios(-.*)?\.prod\.ftl\.netflix\.com\/iosui\/warmer/.+type=show-ath url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js
[mitm]
hostname = ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com
```

Display jd historical price
```properties
[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js
[mitm]
hostname = api.m.jd.com
```

Display taobao historical price
```properties
# 不生效或失效的需要卸载 tb 重装，注意不开脚本进 tb 会失效
[rewrite_local]
^http://.+/amdc/mobileDispatch url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
[mitm]
hostname = trade-acs.m.taobao.com
```

DingDing clock in
```properties
[task_local]
0 9,18 * * 1-5 https://raw.githubusercontent.com/yichahucha/surge/master/clock_in.js
```
