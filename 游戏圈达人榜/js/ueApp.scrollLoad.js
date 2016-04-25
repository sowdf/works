;(function(){
	window.ueApp = window.ueApp || {};

	ueApp.scrollLoad = function(opt){
		var defaults = {
			target : "",
			item : "",
			url : "",
			field : "",
			initIndex : 0,
			per : 0,
			type : "get",
			jsonp : "",
			data : "",
			temp : "'<li>名字'+data[i].name+'；年龄：'+data[i].age+'</li>'",
			endCallback : function(){}
		};

		var opts = $.extend(defaults,opt);
		var loadStatue = false;
		var winH = $(window).height();
		var thatTarget = $(opts.target);
		var thatItem = $(opts.item);
		var tarTop = thatTarget.offset().top;
		var curIndex = opts.initIndex;

		$(window).bind("scroll",function(){
			if(loadStatue){
				return;
			}
			var $this = $(this);
			var curTop = $this.scrollTop();
			var tarH = thatTarget.height();
			if(curTop+winH > tarTop+tarH){
				loadData();
			}
		});

		function loadData(){
			loadStatue = true;

			var url = opts.url + (opts.field?opts.field:"") + (curIndex?curIndex:"");

			if(opts.type == "jsonp"){
				$.ajax({
					url : url,
					dataType : "jsonp",
					jsonp : opts.jsonp,
					success : function(data){
						if(eval(opts.data).length == 0){
							opts.endCallback();
							return;
						}
						curIndex += opts.per;
						var html = "";
						for(var i in data){
							html += eval(opts.temp);
						}
						thatItem.append(html);
						loadStatue = false;
					}
				});
			}else{
				$.getJSON(url,function(data){
					console.log(eval(opts.data));
					if(eval(opts.data).length == 0){
						opts.endCallback();
						return;
					}
					curIndex += opts.per;
					var html = "";
					for(var i in data){
						html += eval(opts.temp);
					}
					thatItem.append(html);
					loadStatue = false;
				});
			}
		}
		
	}

})();