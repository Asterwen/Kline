<template>
	<div class="body_login">
		<Header/>
		<div class="b-main">
		
			<div class="main">
		     	<div class="login_warp">
			     	<div class="loginbox fl">
			      		<!-- 三个选项卡按钮 -->
				       	<div class="login_header">
				         	<div @click="cur=0" :class="{active:cur==0}">手机注册</div>
				         	<div @click="cur=1" :class="{active:cur==1}">邮箱注册</div>
				       	</div>
				       	<div class="clear"></div>
				       	<form action="">
				       		<div class="login_content">
						        <!-- 在cur==0时此板块显示 其他时候此板块不显示 -->
						       	<div v-show="cur==0" class="Cbody_item">
							        <div class="form_item">
							        	<p>手机号</p>
							        	<select>
							        		<option> + 86</option>
							        		<option> + 123</option>
							        	</select>
							        	<input type="text" v-model="phoneValue" @input="handleInput(1)" @blur="animate()" name="fname" placeholder="手机号码">
							        </div>
							        <div class="form_item">
							        	<p>验证码</p>
							        	<input type="text" name="yzm" v-model="yzmValue" @input="handleInput(2)" minlength="6" maxlength="6" @blur="yzm()" placeholder="验证码">
							        	<input type="text" class="send" name="yzm" placeholder="发送验证码">
							        </div>
							        <div class="form_item">
							        	<p>输入密码</p>
							        	<input type="password" class="pass" name="password" placeholder="密码">
							        </div>
							        <div class="form_item">
							        	<p>确认密码</p>
							        	<input type="password" class="pass" name="password_confim" placeholder="确认密码">
							        </div>
							        <div class="xieyi">
							        	<input type="checkbox" name="xieyi" ><span>我已阅读并理解 </span><span class="xy">服务条款 风险与合规披露 隐私政策与声明</span>
							        </div>
							        <div class="form_item">
							        	<input class="sub" @click="onSubmit()" name="" value="注册">
							        </div>
							        <div class="login">
							        	<span>登录已有账户</span>
							        </div>
						       	</div>
						      	<!-- 在cur==1时此板块显示 其他时候此板块不显示 -->
						       	<div v-show="cur==1" class="Cbody_item">
							       	邮箱注册
							        
						       </div>
						    </div>
				       	</form>
				    </div>
			    </div>
		   	</div>
	   	
		</div>
		<Footer/>
	</div>	
</template>

<script>
export default {
  name: 'login',
  	data () {
    	return {
      		cur:0,
      		phoneValue:"",
      		yzmValue:""
    	}
	},
	methods:{
       animate(){
           	var re = /^1\d{10}$/;
           	let str = this.phoneValue;
           	if(!re.test(str)){
           	    alert('抱歉手机号不合法')
           	}
       	},
       	yzm(){
       		if(!this.yzmValue){
       			alert('验证码不能为空')
       		}
       	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.body_login{
		width: 100%;
	  	overflow: auto;
	  	position: relative;
	  	height: 100%;
	}
	.b-main{
		display: flex;
	    height: 100%;
	    background: url("../assets/img/index_banner.png") no-repeat;
	    background-size: cover;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;

	}
	.main{
		width:438px;
		min-height:650px;
		background:rgba(255,255,255,1);
		border:1px solid rgba(230,237,244,1);
		border-radius:2px;
		margin: 0 auto;
	}
	.login_header{
		text-align: center;
	}
	.clear{
		clear:both;
	}
	.form_item,.xieyi{
		margin-left: 58px;
	}
	.xieyi{
		margin-top: 27px;
	}
	.xieyi .xy{
		font-size: 10px;
		color: #3075EE;
		font-weight: bold;
	}
	.form_item p{
		font-size:12px;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:35px;
	}
	.form_item select{
		width: 80px;
		height: 38px;
	}
	.form_item input{
		width: 234px;
		height: 38px;
		border:1px solid rgba(229,229,229,1);
		border-radius:2px;
		padding-left: 10px;
	}
	.form_item .pass{
		width: 322px;
	}
	.form_item .sub{
		width: 335px;
		text-align: center;
		line-height: 41px;
		height: 54px;
		font-weight: 500;
		margin-top: 27px;
		background-color: #E5E5E5;
		border-radius: 2px;
		border:1px dashed #999;
	}
	.form_item .send{
		width: 72px;
	}
	.login{
		text-align: center;
		margin-top: 27px;
	}
	.login span{
		font-size: 10px;
		color: #3075EE;
		font-weight: bold;
	}
	.login_header div{
		background:rgba(245,245,245,1);
		width:219px;
		font-size:14px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		line-height:58px;
		float: left;
	}
	.login_header .active{
		background:#FFF;
	}

</style>
