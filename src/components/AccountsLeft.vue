<template>
    <div class="accountsLeft">
      <div class="accountsInfo">
        	<div class="infoTop">
            <p>
              	<img src="../assets/img/personal.png"><a href="javascript:;">个人信息</a>
            </p>
        </div>
         <div class="lineLeft"></div>
        	<div class="infoMiddle active">
            <p>
              <a href="javascript:;">账户与安全</a>
            </p>
        	</div>
        	<div class="infoBottom">
            <p>
              <a href="javascript:;">身份认证</a>
            </p>
        	</div>
          <div class="lineTop"></div>
      </div>
      <div class="accountsSupport">
        	<div class="accountsSup">
            <div class="supTop">
              	<p>
                	<img src="../assets/img/message.png"><a href="javascript:;">支持</a>
              	</p>
            </div>
            <div class="supMiddle">
              	<p>
                	<a href="javascript:;">问题反馈</a>
              	</p>
            </div>
            <div class="supBottom">
              	<p>
                	<a href="javascript:;">问题列表</a>
              	</p>
            </div>
          <div class="lineBottom"></div>

          </div>
      	</div>
      <div class="accountsScan">
          <img src="../assets/img/ico.png" alt="">
        	<div>
            <p class='scanning'>
              微信扫一扫
            </p>
            <p class="gkex">
              加入GKEX
            </p>
            <p class="gkex">
              加入官方社群
            </p>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
  name:"",
  data() {
    return {

    };
  },
};
</script>

<style >
/* 左侧信息栏 */
.accountsLeft {
  width: 230px;
  height: 420px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(214, 212, 212, 0.42);
  margin-left:13%;
  /* position: absolute;
  left: 8%;
  top: 10%; */
}

.infoTop,
.infoMiddle,
.infoBottom,.supTop,.supMiddle,.supBottom {
  width: 230px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
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
  font-size: 14px;
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
  font-size: 14px;
  /* margin: 0 auto; */
  text-align: center;
  margin-left: 16px
}


.infoBottom p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
}

.supTop p{
  /* width: 18px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-left: -56px
}

.supMiddle p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 14px;
  text-align: center;

}

.supBottom p{
  /* width: 36px; */
  height: 9px;
  color: #333333;
  font-weight: 500;
  font-size: 14px;
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
  	font-size:18px;
  	color:#333;
}
.accountsScan .gkex{
	font-size:16px;
	color: #999;
}
.accountsScan>div{
	height: 27px;
	float: left;
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
  height:40px;
  background:rgba(48, 117, 238, 1);
  position: absolute;
}

</style>
