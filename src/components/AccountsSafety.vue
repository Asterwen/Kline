<template>
 <div class="wrap">
   <Header/>
    	<div class='accountsWrap'>
     		<AccountsLeft/>
            <div class="accountsRight">
              	<div class="accountsTitle">
                	<div class="title">账户与安全</div>
              	  <div class="rightLine"></div>
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
	                 	<div>
	                 		<a href="javascript:;">修改</a>
	                 	</div>
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
  name:"",
  data() {
    return {

    };
  },
   components:{
    AccountsLeft
  },
   methods: {
  },
};
</script>

<style>
 .wrap{
 	max-width: 100%;
   /* width: 100%;  */
  height: 100%;
  overflow: auto;
  position: relative;
  margin: 0 auto;
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
.accountsWrap {
  width: 75%;
  margin: 0 auto;
  position: relative;
  height: 100%; 
  display: flex;
  padding: 3% 0;
}
/* 右侧信息栏 */
.accountsRight {
  /* width: 455px; */
  /* */
  height: 445px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(214, 212, 212, 0.42);
  /* position: absolute;
  right: 8%;
  top: 10%; */
  /* flex:1; */
  margin-left:7%;
  position: relative;
}
.accountsRight .accountsTitle{
  width: 100%;
  height: 35px;
  line-height: 35px;
}
.accountsRight .accountsTitle .title{
  /* width:50px; */
  height:15px;
  font-size:15px;
  font-weight:500;
  color:#333333;
  margin-left:28px;
  margin-bottom: 20px;
}
.accountsRight .accountsTitle>.rightLine{
  width: 100%;
  height: 1px;
  background-color: #E3E3E3;

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
  font-size:14px;
  /* font-family:PingFang SC; */
  font-weight:500;
  color:rgba(102, 102, 102, 1);
  margin-left:25px;
}

.username a{
  color:#3075EE;
  position: absolute;
  left:40%;
}

.level .toRenzheng a{
  color:#3075EE; 
  position: absolute;
  left:40%;

}
.phoneNumber a{
  color:#3075EE;
  position: absolute;
  left:40%;

}
.email a{
  color:#3075EE;
  position: absolute;
  left:40%;
}
.level .more{
  margin-left: 130.5px;
  margin-right:20px;
}

.safetyTitle{
 margin-top:38.5px;
 margin-left:25px;
 color:#333;
 font-size:15px;
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
height: 20px;
background-color: #3075EE;
border-radius: 2px;
text-align: center;
line-height:20px;
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
