/* 
脚本功能：plane vpn恢复订阅
脚本作者：king
下载地址：https://apple.co/3Hc4ZH5
更新时间：2022.2.17
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
[rewrite_local]
# plane vpn恢复订阅@king
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/plane%20vpn.js
hostname = buy.itunes.apple.com
********************************
*/


var objc = JSON.parse($response.body);
      
    objc = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1000000000,
    "app_item_id": 1000000000,
    "bundle_id": "com.tech.pipe",
    "application_version": "437",
    "download_id": 99999999999999,
    "version_external_identifier": 999999999,
    "receipt_creation_date": "2111-11-11 11:11:11 Etc/GMT",
    "receipt_creation_date_ms": "4476654671000",
    "receipt_creation_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "request_date": "2111-11-11 11:11:11 Etc/GMT",
    "request_date_ms": "1555555555555",
    "request_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "original_purchase_date": "2111-11-11 11:11:11 Etc/GMT",
    "original_purchase_date_ms": "1555555555555",
    "original_purchase_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "original_application_version": "433",
    "in_app": [{
      "quantity": "1",
      "product_id": "yearautorenew",
      "transaction_id": "520000631442654",
      "original_transaction_id": "520000631442654",
      "purchase_date": "2111-11-11 11:11:11 Etc/GMT",
      "purchase_date_ms": "1555555555555",
      "purchase_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
      "original_purchase_date": "2111-11-11 11:11:11 Etc/GMT",
      "original_purchase_date_ms": "1555555555555",
      "original_purchase_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
      "expires_date": "2111-11-11 11:11:11 Etc/GMT",
      "expires_date_ms": "4476654671000",
      "expires_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
      "web_order_line_item_id": "520000240955544",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "yearautorenew",
    "transaction_id": "520000631442654",
    "original_transaction_id": "520000631442654",
    "purchase_date": "2111-11-11 11:11:11 Etc/GMT",
    "purchase_date_ms": "1555555555555",
    "purchase_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "original_purchase_date": "2111-11-11 11:11:11 Etc/GMT",
    "original_purchase_date_ms": "1555555555555",
    "original_purchase_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "expires_date": "2111-11-11 11:11:11 Etc/GMT",
    "expires_date_ms": "4476654671000",
    "expires_date_pst": "2111-11-11 11:11:11 America/Los_Angeles",
    "web_order_line_item_id": "520000000000000",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "99999999"
  }],
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "pending_renewal_info": [{
    "auto_renew_product_id": "yearautorenew",
    "original_transaction_id": "520000000000000",
    "product_id": "yearautorenew",
    "auto_renew_status": "1"
  }]
};

$done({body: JSON.stringify(objc)});
