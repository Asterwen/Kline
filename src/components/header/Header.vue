<template>
<div class="wrap_header">
  <div class="header">
      <div class="img"><img src="../../assets/img/logo.png"></div>
      <div class='gk_h'>GK</div>
      <div class='ex_h'>EX</div>
      <div class="list"><img src="../../assets/img/zhankai.png" alt=""></div>
      <div class="mister">首页</div>
      <div class="chart">行情图表</div>
      <div class="asset">资产管理<img class="xiala" src="../../assets/img/xiala1.png" alt=""></div>
      <div class="user"><img src="../../assets/img/geren.png" alt=""><img class="xiala" src="../../assets/img/xiala1.png" alt=""></div>
      <div class="weixin"><img src="../../assets/img/weixin.png" alt=""></div>
      <div class="load"><img src="../../assets/img/phone.png" alt=""></div>
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

/* 头部 */
.header{
 width: 100%;
 height: 60px;
 background-color: #0E0E28;
 /*position: relative;*/
 line-height: 52px;
 font-family:PingFang SC;
 font-size: 14px;
 z-index: 10;
}
.header div{
  display: inline;
}
.img{
  margin-left: 100px;
  width:43px;
  height:46px;
}
.gk_h,.ex_h{
  font-weight:500;
  color:rgba(255, 255, 255, 1);
}
.gk_h{
  font-size:30px;
  margin-left: -10px;
  vertical-align:middle;
}
.ex_h{
  font-size:18px;
  font-weight:500;
  color:rgba(255, 255, 255, 1);
  vertical-align:-webkit-baseline-middle;
}
.header div img{
  width:43px;
  height:46px;
}
.asset .xiala,.header .user .xiala{
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.header .list{
  margin-left: 30.5px;
}
.header .mister{
  margin-left: 61.5px;
  margin-right: 31.5px;
}
.header .asset{
  float: right;
  margin-right: 320px;
}
.header .list img {
  width: 22px;
  height: 22px;
}
.header .user,.header .weixin,.header .load{
  float: right;
}
.header .user{
  margin-right: -145px;
}
.header .weixin{
  margin-right: -205px;
  border-left: 0.5px solid rgba(153,153,153,1);
  border-right: 0.5px solid rgba(153,153,153,1);
  width: 40px;
  height: 40px;
  margin-top: 10px;
  text-align: center;
}
.header .load{
  margin-right: -250px;
}
.header .user img{
  width: 24px;
  height: 24px;
}
.header .weixin img{
  width: 24px;
  height: 20px;
  margin-bottom: 15px;
}
.header .load img{
  width: 12px;
  height: 18px;
}
</style>
