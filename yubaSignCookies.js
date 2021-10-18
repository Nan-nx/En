/*
斗鱼鱼吧签到-lowking-v1.0
原脚本地址：https://raw.githubusercontent.com/demo2099/jscool/master/Task/yubaSign.js
由于原脚本不支持surge，所以我重写了一份

按下面配置完之后，打开https://yuba.douyu.com/homepage/hotwbs并登陆，打开获取cookie，刷新页面，提示获取鱼吧关注列表成功🎉

************************
Surge 脚本配置:
************************

[Script]
# > 斗鱼鱼吧签到
斗鱼鱼吧获取cookie = type=http-request,pattern=^https://yuba.douyu.com/wbapi/web/group/myFollow,script-path=yubaSign.js
斗鱼鱼吧签到 = type=cron,cronexp="0 0 0,1 * * ?",wake-system=1,script-path=yubaSign.js

[mitm]
hostname = yuba.douyu.com

************************
QuantumultX 本地脚本配置:
************************

[rewrite_local]
#斗鱼鱼吧获取cookie
^https://yuba.douyu.com/wbapi/web/group/myFollow? url script-request-header yubaSign.js

[task_local]
0 0 0,1 * * ? yubaSign.js

[mitm]
hostname = yuba.douyu.com

************************
LOON 本地脚本配置:
************************

[Script]
http-request ^https://yuba.douyu.com/wbapi/web/group/myFollow script-path=yubaSign.js, timeout=10, tag=斗鱼鱼吧获取cookie
cron "0 0 0,1 * * *" script-path=yubaSign.js, tag=斗鱼鱼吧签到

mitm = yuba.douyu.com
