<template>
  <div class="wrap">
  	<Header/>
    <div class='accountsWrap'>
      <!-- 左侧信息栏 -->
        <AccountsLeft/>
      	<div class="accountsRight">
        	<div class="rightLine"></div>
        	<div class="accountsTitle">
          	<div class="title">账户与安全</div>
        </div>
        <div class="userInfo">
          	<div class="username">
            	<span>真实姓名</span>
            	<div><a href="javascript:;">去认证</a></div>
          	</div>
          	<div class="phoneNumber">
            	<span>手机号</span>
            	<div><a href="javascript:;">开启手机号认证</a></div>
          	</div>
          	<div class="email">
            	<span>邮箱</span>
            	<div><a href="javascript:;">开启邮箱认证</a></div>
          	</div>
          	<div class="level">
            	<span>身份认证等级</span>
            	<div class='toRenzheng'><a href="javascript:;">去认证</a></div>
            	<div class='more'><a href="javascript:;">提高认证级别，提高账户权限</a></div>
          	</div>

        </div>
        <div class="safetySet">
          	<div class="safetyTitle">安全设置</div>
         	<div class="loginPsd">
	            <span>登录密码</span>
	            <div><a href="javascript:;">修改</a></div>
	        </div>
          	<div class="phoneNum">
            	<span>手机验证</span>
            	<div><a href="javascript:;">设置</a></div>
            	<div class='number'><a href="javascript:;">18954675236</a></div>
          	</div>
          	<div class="emailCheck">
            	<span>邮箱验证</span>
            	<div><a href="javascript:;">设置</a></div>
          	</div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import AccountsLeft from './AccountsLeft'
export default {
  name: 'accountOverview',
  data () {
    return {
      	
    }
  },
  components:{
    AccountsLeft
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.wrap{
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
}
html,body {
  font-size: 13px;
}
a {
  text-decoration: none;
  color: #333;
}
.accountsWrap{
  width: 75%;
  margin: 0 auto;
  position: relative;
  height: 100%; 
}
/* 左侧信息栏 */
.accountsLeft {
  width: 230px;
  height: 470px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(214, 212, 212, 0.42);
  position: absolute;
  left: 200px;
  top: 30px;

}

.infoTop,
.infoMiddle,
.infoBottom,.supTop,.supMiddle,.supBottom {
  width: 230px;
  height: 50px;
  margin: 0 auto;
  line-height: 50px;
}
.supTop{
 padding-top:5px ;
}
.active {
  background: rgba(48, 117, 238, 0.1);
  /* opacity: 0.1; */
}

.infoTop p{
  /* width: 36px; */
  height: 9px;
  color: #333;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  vertical-align:middle;
  margin-left: -41px;
}
.infoTop p img,.supTop p img{
	border:1px dashed #666;
	width:22px;
	height: 20px;
	display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
}
.infoTop p a,.supTop p a{
	display: inline-block;
}

.infoMiddle p{
  /* width: 45px; */
  height: 9px;
  color: #333;
  font-weight: 500;
  font-size: 13px;
  /* margin: 0 auto; */
  text-align: center;
  margin-left: 14px
}


.infoBottom p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
}

.supTop p{
  /* width: 18px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 13px;
  text-align: center;
  margin-left: -56px
}

.supMiddle p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 13px;
  text-align: center;

}

.supBottom p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 13px;
  text-align: center;

}
.accountsScan img{
  width: 84px;
  height: 84px;
  /*position: absolute;
  top:176.5px;
  left:16.5px;*/
  float: left;
  margin-left: 16.5px;
}
.accountsScan{
	height: 100px;
	margin-top: 43px;
}
.accountsScan p{
  /* width: 41.5px; */
  /* */
  font-size: 12px;
  font-weight: 500;
  color: #999;
  line-height: 10px;
}
.accountsScan .scanning{
  	font-size:16px;
  	color:#333;
}
.accountsScan .gkex{
	font-size:13px;
	color: #999;
}
.accountsScan>div{
	height: 27px;
	float: left;
	/*position: absolute;
	top:181.5px;
	left:57px;*/
	margin: 5px 0 0 10px;
}
.accountsScan>div>p{
	margin-top: 10px;
}
.lineTop,.lineBottom {
  width: 230px;
  height: 1px;
  background: rgba(227, 227, 227, 1);
  
}
.lineLeft{
  width:2px;
  height:50px;
  background:rgba(48, 117, 238, 1);
  position: absolute;
  top:50px;
  left:0;
}
.lineTop{
  position: absolute;
  top: 150.5px;
  left: 0;
}
.lineBottom{
  position: absolute;
  top: 318.5px;
  left: 0;
}
/* 右侧信息栏 */
.accountsRight {
  /* width: 455px; */
  height: 445px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(214, 212, 212, 0.42);
  position: absolute;
  left: 485px;
  top: 20px;
}
.accountsRight .accountsTitle{
  width: 100%;
  height: 35px;
  line-height: 35px;
}
.accountsRight .accountsTitle .title{
  /* width:50px; */
  height:10px;
  font-size:16px;
  font-weight:500;
  color:#333333;
  margin-left:28px;
}
.accountsRight .rightLine{
  width: 100%;
  height: 1px;
  background-color: #E3E3E3;
  position: absolute;
  top:35px;
  left:0;
}
.username,
.phoneNumber,
.email ,.level{
  display: flex;
  margin-top:17.5px;
  /* justify-content: center; */
  /* align-items: center; */
}
.phoneNumber>span,
.username>span,.email>span,.level>span{
  font-size:13px;
  /* font-family:PingFang SC; */
  font-weight:500;
  color:rgba(102, 102, 102, 1);
  margin-left:25px;
}

.username a{
  color:#3075EE;
  margin-left: 99px;
}

.level .toRenzheng a{
  color:#3075EE; 
  margin-left: 80.5px;

}
.phoneNumber a{
  color:#3075EE;
  margin-left: 107.5px;

}
.email a{
  color:#3075EE;
  margin-left: 116.5px;
}
.level .more{
  margin-left: 110.5px;
  margin-right:20px;
}

.safetyTitle{
 margin-top:38.5px;
 margin-left:25px;
 color:#333;
 font-size:16px;
}
.loginPsd,
.phoneNum,
.emailCheck{
  display: flex;
  margin-top:17px;
  margin-left:25px;
  color:#666;
}
.loginPsd>div,
.phoneNum>div,
.emailCheck>div {
	width: 47px;
	height: 15px;
	background-color: #3075EE;
	border-radius: 2px;
	text-align: center;
	line-height:15px;
	margin-left:98px;
}
.phoneNum .number {
  background-color:#fff;
  margin-left:97px;
}
.phoneNum .number>a{
  color:#666;
}
.loginPsd>div>a,
.phoneNum>div>a,
.emailCheck>div>a {
  color:#fff;
}
</style>
