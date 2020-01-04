<template>
<div class="warp_footer">
    <div class="footer">
      <div class="footLogo">
        <div class="imger"><img src="../../assets/img/logo.png"></div>
        <div class='gk_f'>GK</div>
        <div class='ex_f'>EX</div>
      </div>
      <div class="knowUs">
         <div class="aboutUs">
        <ul>
          <li class="divOne">关于我们</li>
          <li>加入我们</li>
          <li>行情图表</li>
        </ul>
      </div>
      <div class="problem">
        <ul>
          <li class="divOne">常见问题</li>
          <li>登录注册</li>
          <li>账号密码</li>
        </ul>
      </div>
      <div class="server">
        <ul>
          <li class="divOne">服务</li>
          <li>客服中心</li>
          <li>联系客服</li>
        </ul>
      </div>
      <div class="tAndSearch">
        <ul>
          <li class="divOne">2019年11月05日 12:00:44</li>
          <li>
            <input type="text" placeholder="1254553qq.com">
            <a class="search">搜索</a>
          </li>
        </ul>
      </div>
      </div>
     
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

<style>
.warp_footer{
  /*margin-top: 30px;*/
  width: 100%;
  background-color: #28292D;
  position: relative;
  bottom:0;
  left:0;
  height: 105px;
}
ul li{
  list-style: none;
  padding: 0px;
  margin: 0px;
  height: 20px;
}
/* 底部 */
.footer{
  /*width: 75%;*/
  /*height: 95px;*/
  /* margin: 0 auto; */
  line-height: 90px;
  position: relative;
  display: flex;
}
.footer .footLogo{
  width: 20%;
  margin: 0 auto;
}
.footer .gk_f,.footer .ex_f{
  font-weight:500;
  color:rgba(255, 255, 255, 1);
}
.footer .gk_f{
  font-size:30px;
  vertical-align:middle;
  margin-left: -4px;
}
.footer .ex_f{
  font-size:18px;
  margin-left: 1px;
  margin-top: 4px
}
.footer div{
  height: 100px;
  float: left;
  /* margin-left: 30px; */
}
.footer .imger{
  margin-left: 10%;
}
.footer .imger img{
  width:43px;
  height:46px;
}
.footer .konwUs{
width: 80%;
}
.footer .aboutUs{
  margin-left: -5%;
}
.footer div li{
  font-size: 12px;
  line-height:16px;
}
.footer div .divOne{
  font-family:PingFang SC;
  font-weight:bold;
  color:rgba(255,255,255,1);
  margin-top: 18px;
  font-size:13px;
  line-height:26px;
  height: 26px;
}
.footer .problem,.footer .server{
  margin-left: 85px
}
.footer .tAndSearch{
  text-align: center;
  position: relative;
  width: 305px;
  margin-left: 80px;
}
.footer .tAndSearch ul li input{
  outline: none;
  padding:10px;
  border-radius: 26px;
  opacity:0.4;
  width: 240px;
}
.footer .tAndSearch ul li a{
  position: absolute;
  right: 21px;
  bottom: 16px;
  border-radius: 26px;
  background-color: #FFF;
  height: 39px;
  width: 65px;
  line-height: 38px;
  font-size:12px;
  font-weight:bold;
  color:rgba(48,117,238,1);
}
</style>
