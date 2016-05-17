/**
 * Created by f2er on 14-5-21.
 */
/**
 * Created by f2er on 14-4-1.
 */
;(function(factory) {
    // CMD/SeaJS
    if(typeof define === "function") {
        define(['ks.ZeroClipboard'], factory);
    }
    // No module loader
    else {
        factory('', window['ue'] = window['ue'] || {}, '');
    }

}(function(require, exports, module) {

    var ZeroClipboard;

    if(typeof require === 'function'){
        window.ZeroClipboard = ZeroClipboard = require("ks.ZeroClipboard");
    } else {
        ZeroClipboard = window.ZeroClipboard;
    }

    function Copy(ops){
        if(this.constructor !== Copy){
            return new Copy(ops);
        }

        var _default = {
            btnId :"",
            txtId : "",
            container : "",
            success : function(){alert("已复制到剪切板，可通过ctrl+v粘贴");}
        }
        ops = this.options = $.extend(_default, ops);
        this.init();
        if (!this.is_init){
            ZeroClipboard.setMoviePath( 'http://s1.img4399.com/score/js/ZeroClipboard.swf?1769' ); //和copy.php不在同一目录需设置setMoviePath
            //ZeroClipboard.setMoviePath( 'http://s1.img4399.com/score/js/ZeroClipboard10.swf?1769' );
            this.is_init = true;
        }

    }

    Copy.prototype.close = function(){
        $("#ZeroClipboard_hold" + this.clip.id).remove();
    }

    Copy.prototype.init = function (){
        var _this = this,
            options = this.options;

        var clip = this.clip = new ZeroClipboard.Client(); //创建新的Zero Clipboard对象
        clip.setText( '' ); // will be set later on mouseDown //清空剪贴板
        clip.setHandCursor( true ); //设置鼠标移到复制框时的形状
        clip.setCSSEffects( true ); //启用css
        clip.addEventListener( 'load', function(client) {
            // alert( "movie is loaded" );
        } );
        clip.addEventListener( 'complete', function(client, text) { //复制完成后的监听事件
            // alert("Copied text to clipboard: " + text );
            //clip.hide(); // 复制一次后，hide()使复制按钮失效，防止重复计算使用次数
            options.success(clip);
        } );
        clip.addEventListener( 'mouseOver', function(client) {
            // alert("mouse over");
        } );
        clip.addEventListener( 'mouseOut', function(client) {
            // alert("mouse out");
        } );
        clip.addEventListener( 'mouseDown', function(client) {
            // set text to copy here
            clip.setText( $("#"+options.txtId).val() || $("#"+options.txtId).text() );
            // alert("mouse down");
        } );
        clip.addEventListener( 'mouseUp', function(client) {
            // alert("mouse up");
            //alert("已复制到剪切板，可通过ctrl+v粘贴");
        } );
        clip.glue( options.btnId, options.container);
    }

    if( {}.toString.call(module) == '[object Object]' ){
        module.exports = Copy;
    }else{
        exports.copy = Copy;
    }

}));