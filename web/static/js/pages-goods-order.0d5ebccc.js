(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-order"],{"0595":function(t,i,a){var s=a("6c3c");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=a("4f06").default;e("5ac4d400",s,!0,{sourceMap:!1,shadowMode:!1})},"0c44":function(t,i,a){"use strict";var s,e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-navigator",{staticClass:"action",attrs:{url:"/pages/index/index","open-type":"switchTab","hover-class":"none"}},[a("v-uni-view",{staticClass:"cuIcon-home"})],1)],1),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("安全支付")])],2),a("v-uni-view",{staticClass:"cu-card dynamic"},[a("v-uni-view",{staticClass:"cu-item shadow"},[a("v-uni-view",{staticClass:"cu-list menu"},[a("v-uni-view",{staticClass:"cu-item arrow "},[a("v-uni-view",{staticClass:"content address ",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAddress.apply(void 0,arguments)}}},[t.address?[a("v-uni-view",{staticClass:"text-bold margin-top-sm text-sm"},[t._v(t._s(t.address.username)+"，"+t._s(t.address.mobile))]),t.is_ziti?a("v-uni-view",{staticClass:"margin-bottom-sm text-sm text-cut",staticStyle:{width:"80%"}},[t._v(t._s(t.address.detail)+t._s(t.address.details))]):t._e()]:[a("v-uni-text",{staticClass:"cuIcon-location"}),a("v-uni-text",[t._v(t._s(t.is_ziti?"请选择配送地址":"请选择取货人信息"))])]],2)],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-card dynamic"},t._l(t.goods,(function(i,s){return a("v-uni-view",{key:s,staticClass:"cu-item shadow "},[a("v-uni-view",{staticClass:"cu-list "},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-shop text-red"}),a("v-uni-text",{},[t._v(t._s(i.name))]),a("v-uni-text",{staticClass:"text-sm text-red"},[t._v("（"+t._s(i.send_say)+"）")])],1)],1)],1),t._l(i.child,(function(i,s){return a("v-uni-view",{key:s,staticClass:"cu-list padding-lr "},[a("v-uni-view",{staticClass:"content "},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"flex-sub "},[a("v-uni-image",{staticClass:"png radius bg-gray",attrs:{src:i.goods_thumb,mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"flex-treble text-df "},[a("v-uni-view",{staticClass:"margin-bottom"},[t._v(t._s(i.goods_title))]),a("v-uni-view",{staticClass:"text-gray text-sm"},[a("v-uni-text",{staticClass:"text-price text-red"},[t._v(t._s(i.price))]),a("v-uni-text",{staticClass:"margin-lr"},[t._v(t._s(i.sku_opt))]),a("v-uni-text",{staticClass:"text-gray"},[t._v("x "+t._s(i.num))])],1)],1)],1)],1)],1)})),a("v-uni-view",{staticClass:"solid-top margin-top-sm"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-input",{attrs:{placeholder:"请输入您要备注的信息"},model:{value:t.marks[s],callback:function(i){t.$set(t.marks,s,i)},expression:"marks[index]"}})],1)],1)],2)})),1),a("v-uni-view",{staticClass:"cu-card dynamic"},[a("v-uni-view",{staticClass:"cu-item shadow"},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-red"}),a("v-uni-text",{},[t._v("支付方式")])],1)],1),a("v-uni-view",[a("v-uni-radio-group",{staticClass:"block",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.onPayway.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("微信支付")]),a("v-uni-radio",{class:1==t.payway?"checked":"",attrs:{checked:"",value:"1"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("钱包支付")]),a("v-uni-radio",{class:2==t.payway?"checked":"",attrs:{value:"2"}})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"cu-tabbar-height"}),a("v-uni-view",{staticClass:"cu-bar bg-white tabbar border foot"},[a("v-uni-view",{staticClass:"padding-lr flex-treble"},[t._v("应付金额："),a("v-uni-text",{staticClass:"text-price text-red text-bold"},[t._v(t._s(t.total))])],1),a("v-uni-view",{staticClass:"bg-gradual-green submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPay.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1)},n=[];a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}))},"5c40":function(t,i,a){"use strict";a.r(i);var s=a("f55d"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},6524:function(t,i,a){"use strict";a.r(i);var s=a("0c44"),e=a("5c40");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);a("a00f");var c,o=a("f0c5"),r=Object(o["a"])(e["default"],s["b"],s["c"],!1,null,"0fa6807a",null,!1,s["a"],c);i["default"]=r.exports},"6c3c":function(t,i,a){var s=a("24fb");i=s(!1),i.push([t.i,'.png[data-v-0fa6807a]{width:%?120?%;height:%?120?%}.cu-card>.cu-item[data-v-0fa6807a]{margin-bottom:0}.address[data-v-0fa6807a]::before{content:"";left:0;right:0;bottom:0;height:2px;position:absolute;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px}',""]),t.exports=i},a00f:function(t,i,a){"use strict";var s=a("0595"),e=a.n(s);e.a},f55d:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{address:"",message:"",payway:1,is_pay:!1,total:0,goods:"",type:0,marks:{},is_ziti:0}},onLoad:function(t){this.type=t.type,this.getGoods()},onShow:function(){t("log",this.address," at pages/goods/order.vue:123")},methods:{onPay:function(){var t=this,i={};if(!this.address)return this.Toast(this.is_ziti?"请选择收货地址":"请选择取货人信息","none"),!1;i.a_id=this.address.id,i.type=this.type,i.mark=JSON.stringify(this.marks),i.pay_type=this.payway,this.fq_post("fanqie/goods/order",i,(function(i){1==t.payway?e(i.data,t):t.showMs(i.message,(function(){uni.switchTab({url:"/pages/user/index"})}))}))},onPayway:function(t){this.payway=t.detail.value},getGoods:function(){var t=this;this.fq_get("fanqie/goods/order",{type:this.type},(function(i){t.goods=i.data.goods,t.goods||t.showMs("数据错误",(function(){uni.switchTab({url:"/pages/index/index"})})),t.total=i.data.total,t.address=i.data.address,t.is_ziti=i.data.is_ziti}))},onAddress:function(){uni.navigateTo({url:"/pages/goods/address?order=1"})}}};function s(t,i){WeixinJSBridge.invoke("getBrandWCPayRequest",t.config,(function(a){switch(a.err_msg){case"get_brand_wcpay_request:cancel":i.fq_del("fanqie/goods/order",{id:t.order_id},(function(t){i.showMs("取消支付",(function(){uni.switchTab({url:"/pages/index/index"})}))}));break;case"get_brand_wcpay_request:fail":i.fq_del("fanqie/goods/order",{id:t.order_id},(function(t){i.showMs("支付异常,截图联系客服"+t.err_code+t.err_desc+t.err_msg,(function(){uni.switchTab({url:"/pages/index/index"})}))}));break;case"get_brand_wcpay_request:ok":i.showMs("支付成功",(function(){uni.switchTab({url:"/pages/user/index"})}));break}}))}function e(t,i){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",s,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",s),document.attachEvent("onWeixinJSBridgeReady",s)):s(t,i)}i.default=a}).call(this,a("0de9")["log"])}}]);