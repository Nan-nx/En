/*
 Unlock vip会员缓存下载 2022.01.08 网络搜集 

# 本地加载格式如下，需将脚本放到手机本地，方法不赘述
https:\/\/app\.bilibili\.com\/(x\/vip\/web\/user\/combine|vip\/home|x\/v2\/account\/mine|x\/v2\/account\/myinfo) url script-response-body Bibilivip.js
# 若网络挂载，可将url后部分改为https://github.com/Nan-nx/En/edit/master/Bilibili/Bibilivip.js



MITM = app.bilibili.com


*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = 'x/vip/web/user/combine';
const vip2 = 'vip/home';
const vip3 = 'x/v2/account/mine';
const vip4 = 'x/v2/account/myinfo';
if (url.indexOf(vip1) != -1) {
obj.data.account.name="公众号iosrule";
obj.data.account.rank=88888;

obj.data.vip.type=1;
obj.data.vip.status= 1;
obj.data.vip.due_date="2088-12-31";
obj.data.vip.vip_pay_type=0;
obj.data.account.face="http://i0.hdslb.com/bfs/face/1803dc5bb62fa6fc9433183c7a127a2fb5934cb9.jpg";
obj.data.point.balance=88888;
obj.data.music.count=88888;
obj.data.pay.couponBalance=88888;


body = JSON.stringify(obj);
//console.log(body)
	
}


if (url.indexOf(vip2) != -1) {
obj.is_vip=1;
body = JSON.stringify(obj);
//console.log(body)
	
}



if (url.indexOf(vip3) != -1||url.indexOf(vip4) != -1) {
obj.data.name="公众号iosrule";
obj.data.coins=9999999;
obj.data.rank=88888;
obj.data.bcoin=88888;
obj.data.level=88888;
obj.data.vip_type=1;
obj.data.following=88888;
obj.data.follower=88888;
obj.data.new_followers=88888;
obj.data.answer_status=0;
obj.data.vip.type=1;
obj.data.vip.status= 1;
obj.data.vip.due_date="2088-12-31";
obj.data.vip.vip_pay_type=0;
obj.data.face="http://i0.hdslb.com/bfs/face/1803dc5bb62fa6fc9433183c7a127a2fb5934cb9.jpg";


body = JSON.stringify(obj);
//console.log(body)
	
}


$done({body});
