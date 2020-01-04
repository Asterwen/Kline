<template>
    <div class="bodyWrap">
        <Header/>
        <div class="accountMain">
          	<div class="mainLeft">
              <table>
                <tr>
                  <td><img src="../assets/img/personal.png"></td>
                  <td><a class="pading-l">个人信息</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td>账户与安全</td>
                </tr>
                <tr class="menuActive">
                  <td></td>
                  <td>身份认证</td>
                </tr>
                <tr>
                  <td><img src="../assets/img/message.png"></td>
                  <td><a class="pading-l">支持</a></td>
                </tr>
                <tr>
                  <td></td>
                  <td>问题反馈</td>
                </tr>

                <tr>
                  <td></td>
                  <td>问题列表</td>
                </tr>
              </table>
              
          		<div class="mainLeftBottom">
          			<div class="bottomLeft">
          				<img src="../assets/img/ico.png">
          			</div>
          			<div class="bottomRight">
          				<p>微信扫一扫</p>
          				<p>加入GKEX</p>
          				<p>加入官方社群</p>
          			</div>
          		</div>
          	</div>
          	<div class="mainRight">
          		<div class="listHeader">
            		<a class="active">个人身份验证</a>
          		</div>
	          	<div class="mainRightTable">
                  <div class="mainRightTop">
                      <div class="mainRightTopHead">
                          <p>
                            <a class="imgPersonal"><img class="personal1" src="../assets/img/personal1.png"></a>
                            <a href="">Lv.1 基础认证</a>
                            <img class="youkuohao" src="../assets/img/youkuohao.png"> 
                            <a class="imgIdcard"><img class="idcard" src="../assets/img/idcard.png"></a>
                            <a href="">Lv.2 高级认证</a></p>
                      </div>
                      <div class="mainRightTopMiddle">
                        <p>认证后获得以下权限</p>
                        <p>增加提现额度，24小时提现限额****元</p>
                        <p>增加可交易额度，24小时交易限额****元</p>
                      </div>
                  </div>
	              	<table>
	                  	<tr>
		                    <td>国家</td>
		                    <td><input type="" name="" placeholder="中国86"></td>
		                    <td class="con">目前仅支持中国大陆用户认证</td>
	                  	</tr>
	                  	<tr>
		                    <td>新手机号</td>
		                    <td><input type="" name="" placeholder="请输入手机号"></td>
		                    <td></td>
	                  	</tr>
	                  	<tr>
		                    <td>短信验证码</td>
		                    <td class="msg"><input type="" name="" placeholder="请输入验证码"><a href="" class="yzm">发送验证码</a></td>
		                    <td></td>
	                  	</tr>
                      <tr>
                        <td></td>
                        <td><a href="" class="complate">完成</a></td>
                        <td></td>
                      </tr>
	              	</table>
	          	</div>
          	</div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'identityCheckout_1',
  data () {
    return {
      	cur:0
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	* {
	  margin: 0;
	  padding: 0;
	}
  .bodyWrap{
    position: relative;
    height: 100%;
  }
  .accountMain{
    margin: 0 auto;
    width: 65%;
    height: 100%;
    font-family:PingFang SC;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #333333;
    font-size: 13px;
  }
  .accountMain .mainLeft,.accountMain .mainRight{
  	box-shadow:1px 1px 6px 1px rgba(214,212,212,0.42);
    border-radius:4px;
  }
  .accountMain .mainLeft{
  	float: left;
  	width: 25%;
  	height: 65%;
  }
  .accountMain .mainLeft .menuActive{
    background-color:#EAF1FD;
    border-left: 2px solid rgba(48,117,238,1);
  }
  .mainLeft table tr {
    width: 100%;
  }
  .mainLeft tr:nth-child(3n){
    border-bottom: 1px solid #E3E3E3;
  }
  .mainLeft td{
    line-height: 34px;
    font-size: 11px;
  }
  .mainLeft table tr td:nth-child(1){
    width: 30%;
    text-align: right;
    padding-right: 10px;
  }
  .mainLeft td:nth-child(2){
    width: 165px;
  }
  .mainLeft td img{
    width: 15px;
    height: 15px;
    border:1px dashed #333;
  }
  .mainLeft .mainLeftBottom .bottomLeft{
  	float: left;
  }
  .mainLeft .mainLeftBottom .bottomLeft{
  	float: left;
  }
  .mainLeft .mainLeftBottom .bottomRight{
  	margin-top: 35.5px;
  	padding-top: 5px;
    margin-left: 50%;
  }
  .mainLeft .mainLeftBottom .bottomRight p{
  	height: 20px;
  	line-height: 20px;
  }
  .mainLeftBottom div img{
  	width: 65px;
  	height: 65px;
  	margin-left: 30%;
  }

  /**
   * 以上为左侧
   */
  .accountMain .mainRight{
    float: left;
    width: 67.5%;
    margin-left: 7%;
    height: 80%;
  }
  .mainRight .listHeader{
    line-height: 50px;
    border-bottom: 1px solid #E3E3E3;
  }
  .mainRight .listHeader a{
    text-align: center;
    margin-left: 10px;
    display: inline-block;
    width: 88px;
    border-bottom: 1px solid #3075EE; 
  }
  .mainRightTop div{
    height: 54px;
  }
  .mainRightTop .mainRightTopHead{
    text-align: center;
    margin-top: 30px;
  }
  .mainRightTop .mainRightTopMiddle{
    width: 90%;
    border:1px dashed #333;
    margin:0 auto;
    font-size: 11px;
    color: #666666;
    padding-left: 14px;
    height: 60px;
    background-color: #F6FAFF;
  }
  .mainRightTop .mainRightTopMiddle p{
    margin-top: 2px;
  }
  .mainRightTop .imgPersonal,.mainRightTop .imgIdcard{
    display: inline-block;
    width:22px;
    height:22px;
    border-radius:50%;
  }
  .mainRightTop .imgPersonal{
    background:rgba(130,189,255,1);
  }
  .mainRightTop .imgIdcard{
    background:#E3E3E3;
  }
  .mainRightTop .personal1{
    width: 15px;
    height: 15px;
  }
  .mainRightTop .youkuohao{
    width: 13px;
    height: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .mainRightTop .idcard{
    width: 15px;
    height: 11px;
  }
  .mainRight .mainRightTable table{
    height: 100%;
    margin-top: 30px;
  }
  .mainRight table td{
    color: #666666;
    line-height: 44px;
    font-size: 11px;
  }
  .mainRight .mainRightTable table td:nth-child(1){
    width: 80px;
    padding-left: 20px;
  }
  .mainRightTable td input{
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    border-radius:2px;
    height: 25px;
    line-height: 25px;
    width: 180px;
    color: rgba(153,153,153,1);
    font-size: 11px;
    padding-left: 10px;
  }
  .mainRight .mainRightTable .con{
    font-size: 10px;
    padding-left: 10px;
  }
  .mainRightTable .msg input{
    width:110px;
  }
  .mainRightTable .msg .yzm{
    display: inline-block;
    line-height: 25px;
    border-radius:2px;
    width: 60px;
    border: 1px solid #3075EE;
    color: #3075EE;
    text-align: center;
    margin-left: 5px;
  }
  .mainRightTable td .complate{
    display: inline-block;
    border:1px solid rgba(227,227,227,1);
    border-radius:2px;
    color: #999999;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    width: 100%;
  }
</style>
