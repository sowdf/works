;(function(factory) {
    // CMD/SeaJS
    if(typeof define === "function") {
        define(factory);
    }
    // No module loader
    else {
        factory('', window['ue'] = window['ue'] || {}, '');
    }

}(function(require, exports, module) {
    function ShareTo(options){
        /* * @module 自定义分享 */
        var shareoOption = shareoOption || {};
        var gameShareConfig = {
            "desc": "描述",//描述
            "pic": "",
            "href": "http://www.4399.com",
            "gameId": '1916',
            "summary":"内容摘要",//内容摘要
            "title":"分享标题"// 分享标题(可选)
        };
        options=$.extend(gameShareConfig,options)
        shareoOption.shareType = {
            qq: { url:options.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/ desc:options.desc , /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/ title: options.title, /*分享标题(可选)*/ summary: options.summary, /*分享摘要(可选)*/ pics: options.pic, /*分享图片(可选)*/ site: options.site, /*分享来源(可选) 如：QQ分享*/ style: '201', width: 32, height: 32 },
            qzone: { url: options.href, showcount: '1', /*是否显示分享总数,显示：'1'，不显示：'0' */ desc: options.desc, /*默认分享理由(可选)*/ summary: options.summary, /*分享摘要(可选)*/ title: options.title, /*分享标题(可选)*/ site: options.site, /*分享来源 如：腾讯网(可选)*/ pics: options.pic, /*分享图片的路径(可选)*/ style: '203', width: 98, height: 22 },
            forumn: { "id_3387": options.gameId },
            weixin: { "appid": '', "imgUrl": options.pic, "link": options.href, "desc": options.desc, "title": options.title },
            sinawb: { "pic": options.pic, "url": options.href, "title": options.title },
            qqwb: { "title": options.title, "pic": options.pic, "url": options.href },
            tieba : { "url":options.href, "title":options.title, "desc":options.desc, "pic":options.pic, "summary":options.summary }
        };
        shareoOption.request = { qq: "http://connect.qq.com/widget/shareqq/index.html", qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey", weixin: "", sinawb: "http://service.weibo.com/share/share.php", qqwb: "http://share.v.t.qq.com/index.php?c=share&a=index", tieba: "http://tieba.baidu.com/f/commit/share/openShareApi" };
        var ueToShare = ueToShare || {}; ueToShare.joinUrl = function (shareType, url) { var href = url, param = []; for (var i in shareType) { param.push(i + "=" + encodeURIComponent(shareType[i])); } var _url = href + ( href.indexOf("?") > 0 ? "&" : "?") + param.join("&"); return _url; };
        // ueToShare.init = function () {

        $("#j-shareto").find('a').each(function (index, element) { var _type = $(this).attr('data-type'); if (_type == "weixin") { return; } if (_type == "forumn") { var _url = gameShareConfig.forumnReqUrl; }else{ var _url = ueToShare.joinUrl(shareoOption.shareType[_type], shareoOption.request[_type]); } $(this).attr('href', _url); });
        // };//init
    }//ShareTo
    if( {}.toString.call(module) == '[object Object]' ){
        module.exports = ShareTo;
    }else{
        exports.shareTo = ShareTo;
    }
}));