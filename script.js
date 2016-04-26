document.addEventListener("DOMContentLoaded",function(){
	new Vue({
		el:'#calc',
		data: function(){
			return{				
				first:"",
				second:"",
				result:0
			}
		},
		methods:{			
			plus:function(){
					this.result=parseInt(this.first)+parseInt(this.second);
			},
			minus:function(){
					this.result=parseInt(this.first)-parseInt(this.second);
			},
			multiply:function(){
					this.result=parseInt(this.first)*parseInt(this.second);
			},
			division:function(){
					this.result=parseInt(this.first)/parseInt(this.second);
			}
		},

	});
})	