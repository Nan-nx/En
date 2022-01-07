###  使用说明 :（2022.01.07更新）

* 收集整理的Quan X配置文件，均来自网络！！
* 只是搬运和同步更新大佬脚本，不负责维护脚本.
* 只测试自用脚本，其他大部分脚本未测试可用性.

* 注：Nan-nx/Script Forked from NobyDa/Script  [NobyDa](https://github.com/NobyDa)
* 注：Nan-nx/scripts Forked from chavyleung/scripts  [chavyleung](https://github.com/chavyleung)


###  自用机场推荐：https://b.luxury/waf/4yzbtm2WWSUi5Im82

* 部分订阅节点更新：（规则差异，请注意资源解析器的使用或是相应机场软件）
* 需机场条件下使用，Clash订阅 https://git.io/emzclashn
* 匹配资源解析器可使用， https://suo.yt/cssfBJA
* [genernal]字段下添加括号里内容（resource_parser_url= https://raw.githubusercontent.com/Nan-nx/En/master/Scripts/resource-parser.js）

### Quantumult_X 懒人配置：（任何懒人配置会覆盖原有配置，建议打开后直接复制相应字段使用）（2021.08.25更新）
* 【基于w37fhy的精简，修正，同时适用QuantumultX旧版 适用于iOS14不支持Task_gallery功能】
* [Nan-nx_diy.conf](https://raw.githubusercontent.com/Nan-nx/En/master/Nan-nx_diy.conf) ❗❗
* 以上配置支持Quantumult_X最新商店版，支持gallery订阅及Url测速，可自动切换最快速度节点。
* 同时支持B站大会员高帧，百度云会员高清观看倍速，酷我会员资源听取。

* 其他类型懒人配置
* [NobyDa 大佬精品](https://raw.githubusercontent.com/Nan-nx/En/master/NoByDa.conf)
* [QuantumultX_diy.conf](https://raw.githubusercontent.com/Nan-nx/Quantumult_X/master/QuantumultX_diy.conf)

###  部分 Quantumult_X 详细配置规则，可自行DIY！

*  Local
* static= 节点选择, ♻️ 自动选择, 🇭🇰 香港, 日本,🇸🇬 新加坡, 美国, PROXY, DIRECT, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Available.png
* 默认设置10分钟测速一次，当前使用节点延迟和最新测速延迟最低的节点相差100ms以上则切换为最新的最低延迟节点，否则继续延用节点
* url-latency-benchmark=♻️ 自动选择, server-tag-regex=.*, check-interval=600, tolerance=100, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Auto.png
* url-latency-benchmark=🇭🇰 香港, server-tag-regex=(?=.*(港|HK|(?i)Hong))^((?!(台湾|日本|新加坡|美国|韩国|狮城|南朝鲜|US|SG|JP|KR|TW|台灣|美國|韓國|獅城)).)*$, check-interval=600, tolerance=50, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hong_Kong.png
* url-latency-benchmark= 日本, server-tag-regex=(?=.*(日本|JP|(?i)Japan))^((?!(香港|台湾|新加坡|美国|韩国|狮城|南朝鲜|US|SG|KR|HK|TW|台灣|美國|韓國|獅城)).)*$, check-interval=600, tolerance=100, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Japan.png
* url-latency-benchmark=🇸🇬 新加坡, server-tag-regex=(?=.*(新加坡|狮城|SG|(?i)Singapore))^((?!(香港|台湾|日本|美国|韩国|南朝鲜|US|JP|KR|HK|TW|台灣|美國|韓國)).)*$, check-interval=600, tolerance=100, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Singapore.png
* url-latency-benchmark= 美国, server-tag-regex=(?=.*(美国|美國|US|洛杉矶|西雅图|(?i)States|American))^((?!(香港|台湾|日本|新加坡|韩国|狮城|南朝鲜|SG|JP|KR|HK|TW|台灣|韓國|獅城)).)*$, check-interval=600, tolerance=100, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/United_States.png
*  static= 漏网之鱼,  节点选择, ♻️ 自动选择, 🇭🇰 香港, 日本,🇸🇬 新加坡, 美国, PROXY, DIRECT, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Final.png

*  [rewrite_local]
* 本地js操作方法
* （添加重写，脚本类型：script-response-body，用以匹配的URL：https:\/\/app\.bilibili\.com\/(x\/vip\/web\/user\/combine|vip\/home|x\/v2\/account\/mine|x\/v2\/account\/myinfo)   脚本路径：Bibilivip.js（或 https://raw.githubusercontent.com/Nan-nx/En/master/Bibilivip.js（远端仓库））
直接挂载本地会报错，是因为没有在本地放置Bibilivip.js 文件（Bibilivip.js 文件应该放在：文件管理-Quantumult_X/Scripts里）
注：此类单一重写功能的脚本，写法一致。还不明白直接参考上述 [Nan-nx_diy.conf](https://raw.githubusercontent.com/Nan-nx/En/master/Nan-nx_diy.conf)可点击查看如何书写。

* [filter_remote]
*  ChinaIP 中国直连
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/ChinaIP.list, tag=🎯中国IP-直连, update-interval=86400, opt-parser=false , enabled=true
* 规则修正-直连
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list, tag=🎯规则修正-直连, update-interval=86400, opt-parser=false, enabled=true
*  Privacy 隐私
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Privacy.list, tag=📩隐私保护, update-interval=86400, opt-parser=false, enabled=true
*  Hijacking 运营商劫持或恶意网站
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list, tag=📩运营商劫持, update-interval=86400, opt-parser=false, enabled=true
*  Advertising 广告
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list, tag=📩轻量广告拦截, update-interval=86400, opt-parser=false, enabled=true
*  Global 全球加速
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list, tag=🚄全球加速, force-policy=Policy, update-interval=86400, opt-parser=false, enabled=true
*  Streaming 国际流媒体服务
* https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Streaming.list, tag=🚄国际流媒体服务, force-policy=Policy, update-interval=86400, opt-parser=false, enabled=true
*  重度广告拦截-拒绝
* https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/AdRule.list, tag=📩重度广告拦截-拒绝, force-policy=reject, update-interval=86400, opt-parser=false, enabled=false

*  [task_local] (稍微复杂，不要忘了添加主机名。另外，很多定时任务需要加载cookies方可使用，并且方式不太一直，新手不建议。)

*  bilibili
* 打开浏览器访问: https://www.bilibili.com 或 https://live.bilibili.com
* 2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.js, tag=bilibili, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bilibili.png,enabled=true
* 银瓜子转硬币
* 2 0 * * * https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.silver2coin.js, tag=bilibili银瓜子转硬币, img-url=https://raw.githubusercontent.com/Orz-3/task/master/bilibili.png,enabled=true

* 机场签到 (by evilbutcher & Neurogram )
* 使用BoxJs配置订阅及密码
* 45 4 8 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkin_env.js, tag=机场签到, img-url=https://raw.githubusercontent.com/Orz-3/Task/master/airport.png, enabled=true
* 0 5 8 * * * https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master//check_in/glados/checkincookie_env.js, tag=机场签到Cookie版, img-url=https://raw.githubusercontent.com/58xinian/icon/master/glados.png, enabled=false


### 本地配置：

* 建立本地文件夹目录（自带文件管理）
* iCloud Drive/QuantumultX/Scripts（若开启QuantumultX设置里的icloud同步）
* 我的iPhone/QuantumultX/Scripts（若开启QuantumultX设置里的icloud同步）

* WoringCopy挂载我的[仓库](https://github.com/Nan-nx.git)

* 挂载[视频教程](https://m.youtube.com/watch?t=3s&v=inCQFnDmRLo)


### 远程配置：

* [圈X视频教程第一期](https://youtu.be/G1oUtOA1J2w)
* 
* [圈X视频教程第二期](https://youtu.be/pLZDK9SACLQ)
* 
* [圈X视频教程第三期](https://youtu.be/kKa26Fj0MJA)
* 
* [圈X视频教程第四期](https://youtu.be/_8_xnEQHGbM)



### 免责声明：(任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明!)

* Nan-nx项目中涉及的任何解锁和解密分析脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断.

* 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, Nan-nx对于由此引起的任何隐私泄漏或其他后果概不负责.

* 您必须在下载后的24小时内从计算机或手机中完全删除以上内容.

* 一旦使用并复制了任何相关脚本或Script项目的规则，则视为您已接受此免责声明.

* 有问题可联系（可私信）： -----------------------------感谢您的打赏：
* ![微信公众号](https://user-images.githubusercontent.com/61365467/130927901-ec778929-f84b-4fb6-be0e-f54fbaf96098.jpg)  ![微信赞赏码](https://user-images.githubusercontent.com/61365467/130933671-855989f8-ceb8-4ca0-b111-738390022e76.png)



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### 特别感谢：


* [KOP-XIAO](https://github.com/KOP-XIAO)

* [w37fhy](https://github.com/w37fhy)

* [Tartarus2014](https://github.com/Tartarus2014)

* [nzw9314](https://github.com/nzw9314)

* [Qure](https://github.com/Koolson/Qure)

* [lhie1](https://github.com/lhie1)

* [ConnersHua](https://github.com/ConnersHua)

* [NobyDa](https://github.com/NobyDa)

* [DivineEngine](https://github.com/DivineEngine)

* [chavyleung](https://github.com/chavyleung)

* [yichahucha](https://github.com/yichahucha)

* [langkhach270389](https://github.com/langkhach270389)

* [Choler](https://github.com/Choler)

* [onewayticket255](https://github.com/onewayticket255)

* [NavePnow](https://github.com/NavePnow)

* [Meeta](https://github.com/MeetaGit)

* [Neurogram-R](https://github.com/Neurogram-R)

* [sazs34](https://github.com/sazs34)

* [guzhig](https://github.com/guzhig)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
