var Snake = function() {
	var run;
	var ts = this;
	var fast = 100;//最快能到达速度
	var leve =1;
	
	this.show = function(){
		for(var i=0;i<this.poz.length;i++){
			var p = this.poz[i];
			$("#content tr:eq("+p[0]+")").children("td:eq("+p[1]+")").html("蛇");
		
		}
		
	}

	this.hide = function(){
		for(var i=0;i<this.poz.length;i++){
			var p = this.poz[i];
			$("#content tr:eq("+p[0]+")").children("td:eq("+p[1]+")").html("&nbsp;");
		
		}
		
	}
	this.showspeed = function(){
		$("#speed").html(leve);
		
	}
	this.header = function(){
		var index = this.poz.length-1;	
		return this.poz[index];
	}
	this.move = function(){
		var head = ts.header();
		var next = [head[0]+ts.facey, head[1]+ts.facex];
		if(next[0]>22||next[0]<0||next[1]>12||next[1]<0){
			ts.over();
			return false;
		}
		for(var i=0;i<ts.poz.length;i++){
			var p = ts.poz[i];
			if(next[0]==p[0]&&next[1]==p[1]){
				ts.over();
				return false;	
			}
		
		}
		ts.hide();
		if(next[0]!=window.game.food[0]||next[1]!=window.game.food[1]){
			ts.poz.shift();
		}else{//迟到食物
			if(ts.speed>(fast+30)){
				ts.speed = ts.speed-30;
				ts.stop();
				ts.begin();
				leve++;
				ts.showspeed();
				window.game.msg("分数+10，速度+1");
			}
			window.game.addscore();
			window.game.setfood();
		}

		ts.poz.push(next);
		ts.show();
	}
	
	this.over = function(){
		window.game.over();
		ts.stop();
		ts.hide();
		ts = null;	
	}
	
	
	this.turny = function(y){
		if(this.facey==-y)return false;
		this.facex = 0;
		this.facey = y;
		this.move();
	}
	this.turnx = function(x){
		if(this.facex==-x)return false;
		this.facey = 0;
		this.facex = x;
		this.move();
	}
	
	this.begin = function(){
		run = setInterval(this.move, this.speed);
			
	}
	
	this.stop = function(){
		clearInterval(run);
	}
	
	this.init = function(){
		
		this.speed = 500;
		this.facex = 1;//水平向右
		this.facey = 0;//垂直向下
		
		this.poz = [[3,3],[3,4],[3,5]];
		this.show();
		this.begin();
	}
	this.init();
	
};
