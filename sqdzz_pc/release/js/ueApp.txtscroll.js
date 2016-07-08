;(function(){
    window.ueApp = window.ueApp || {};
    ueApp.textScroll = function(opt){

        var defaults = {
            target : "",
            items : "",
            delay : 2000,
            loop : 1,
            direction : 0
        };

        var opt = $.extend({},defaults,opt);


        if(!opt.target){
            return false;
        }

        if(opt.delay <= 1000){
            console.log("间隔设置虚比1000ms大");
        }

        var _target = $(opt.target);
        var _item = $(opt.items);
        var lnum = _item.length;

        if(lnum<=1){
            return;
        }

        var _fitem = _item.eq(0);
        var _litem = _item.eq(lnum-1);
        var ftc = _fitem.clone();
        var ltc = _litem.clone();

        _target.append(ftc).prepend(ltc);

        var curIndex = 0;
        var preHeight = _item.height();

        _target.css({"-webkit-transform":"translateY(-"+preHeight+"px)","-webkit-transition":"0s"});

        function preScroll(){
            curIndex++;
            nowPos = (curIndex+1)*preHeight;
            _target.css({"-webkit-transform":"translateY(-"+nowPos+"px)"});
            if(curIndex == lnum){
                setTimeout(function(){
                    _target.css({"-webkit-transition":"0s","-webkit-transform":"translateY(-"+preHeight+"px)"});
                },1000);
                curIndex = 0;
            }else{
                _target.css({"-webkit-transition":"1s"});
            }

        }

        setInterval(preScroll,opt.delay);
    }

})();