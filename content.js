Con = function() {
	
	var maxx = 22;
	var maxy = 12;
	
	var score = 0;
	
	function rd(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}
	
	this.setfood = function(){
		var randx = rd(0,maxx);
		var randy = rd(0,maxy);
		if(window.snake){
			for(var i=0;i<window.snake.poz.length;i++){
				var p = window.snake.poz[i];
				if(randx==p[0]&&randy==p[1]){
					this.setfood();
					return true;
				}
			
			}
		}
		this.food = [randx, randy];
		$("#content tr:eq("+this.food[0]+")").children("td:eq("+this.food[1]+")").html("糖");
	}
	

	
	this.hidefood = function(){
		$("#content tr:eq("+this.food[0]+")").children("td:eq("+this.food[1]+")").html("&nbsp;");
	}
	
	this.setscore = function(){
		$("#score").html(score);
	}
	
	this.addscore = function(){
		score = score+10;
		this.setscore();
	}
	
	this.over = function(){
		alert("游戏结束，你的得分是："+score);
		this.hidefood();
	}
	
	this.msg = function(msg){
		$("#msg").html(msg);
		setTimeout(function(){$("#msg").html("&nbsp;");},800);
	}

	this.init = function(){
		
		this.setfood();
		
		
		
	}
	this.init();

	
};
