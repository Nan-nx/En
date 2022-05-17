## <a href="https://t.me/Nan_nx"><img src="https://raw.githubusercontent.com/Nan-nx/Nan-nx/main/hello.gif" width="65px"/></a>

#### [配置引用](https://raw.githubusercontent.com/Nan-nx/En/master/Bilibili/Bilibili.conf)

<a href="https://github.com/Nan-nx/En"><img src='https://img.shields.io/badge/Quan_X-v2.0-brown'/></a> 
<a href="https://github.com/Nan-nx/Scriptable"><img src='https://img.shields.io/badge/Scriptable-v1.0-orange'/></a>
<a href="https://github.com/Nan-nx/Book"><img src='https://img.shields.io/badge/Book-v3.0-red'/></a> 
<a href="https://t.me/Nan_nx"><img src='https://img.shields.io/badge/By-Nan--nx-green'/></a>

#### 关于Bibilivip.js
[Bibilivip.js](https://raw.githubusercontent.com/Nan-nx/En/master/Bilibili/Bibilivip.js)

> 代码已同时兼容 Surge & QuanX, 使用同一份签到脚本即可

> 目前可签 bilibili 直播 (直播!直播!直播!) + 银瓜子转硬币

> 2020.1.11 QuanX 在`190`版本开始, 获取 Cookie 方式需要从`script-response-body`改为`script-request-header`

> 2020.3.16 添加银瓜子转硬币脚本 感谢[@lcandy2](https://github.com/lcandy2) PR

#### 其他Bilibili配置 (QuanX)

```properties
[MITM]
*.bilibili.com

[rewrite_local]
# 189及以前版本
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-response-body bilibili.cookie.js
# 190及以后版本
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-request-header bilibili.cookie.js

[task_local]
1 0 * * * bilibili.js
# 如需银瓜子转硬币，添加以下内容 
1 0 * * * bilibili.silver2coin.js
```

#### 其他说明

1. 先在浏览器登录 `(先登录! 先登录! 先登录!)`
2. 先把`*.bilibili.com`加到`[MITM]`
3. 再配置重写规则:
   - Surge: 把两条远程脚本放到`[Script]`
   - QuanX: 把`bilibili.cookie.js`和`bilibili.js`传到`On My iPhone - Quantumult X - Scripts` (传到 iCloud 相同目录也可, 注意要打开 quanx 的 iCloud 开关)
4. 打开浏览器访问: https://www.bilibili.com 或 https://live.bilibili.com
5. 系统提示: `获取Cookie: 成功`
6. 最后就可以把第 1 条脚本注释掉了

> 第 1 条脚本是用来获取 cookie 的, 用浏览器访问一次获取 cookie 成功后就可以删掉或注释掉了, 但请确保在`登录成功`后再获取 cookie.

> 第 2 条脚本是签到脚本, 每天`00:00:10`执行一次.

#### 常见问题

1. 无法写入 Cookie

   - 检查 Surge 系统通知权限放开了没
   - 如果你用的是 Safari, 请尝试在浏览地址栏`手动输入网址`(不要用复制粘贴)

2. 写入 Cookie 成功, 但签到不成功

   - 看看是不是在登录前就写入 Cookie 了
   - 如果是，请确保在登录成功后，再尝试写入 Cookie

3. 为什么有时成功有时失败

   - 很正常，网络问题，哪怕你是手工签到也可能失败（凌晨签到容易拥堵就容易失败）

