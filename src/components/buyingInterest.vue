<template>
    <div class="bodyWrap">
        <Header/>
        <div class="buyMain">
          	<div class="buyMainLeft">
              <p class="input"><input type="" name=""><img src="../assets/img/sousuo.png"></p>
              <p class="product">产品</p>
              <ul>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/xingxing.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/xingxing.png"><a>RYU-鬼蛟</a></li>
                <li><img src="../assets/img/xingxing.png"><a>RYU-鬼蛟</a></li>
              </ul>
            </div>
            <div class="buyMainRight">
              <div class="buyMainRightTop">
                <p>
                  <a class="title">
                    RYU-鬼蛟/CNY
                  </a>
                  <a class="aount">
                    权益 
                  </a>
                  <a>
                    可用10/冻结12，CNY：可用888/冻结54568
                  </a>
                </p>
              </div>
              <div class="buyMainRightMiddle">
                <div class="middleOne">
                  111
                </div>
                <div class="middleTwo">
                  <div class="middleCur">
                    <span @click="mcur=0" :class="{active:mcur==0}">买入权益</span>
                    <span @click="mcur=1" :class="{active:mcur==1}">卖出权益</span>
                  </div>
                  <div class="m_cur">
                    <div v-show="mcur==0">
                      123
                    </div>
                    <div v-show="mcur==1">
                      123
                    </div>
                  </div>
                </div>
                <div class="middleThree">
                  <p class="middleHeader">深度合并</p>
                  <table class="tableOne">
                    <thead>
                      <tr>
                        <th>价格(CNY)</th>
                        <th>数量</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>

                    </tbody>
                  </table>
                  <p class="middleP"><a>46.50</a> <img src="../assets/img/jiangdi.png"></p>
                  <table class="tableTwo">
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                      <tr>
                        <td>46.50</td>
                        <td>46.50</td>
                      </tr>
                  </table>
                </div>
              </div>
              <div class="clear"></div>
              <div class="buyMainRightBottom">
                <div class="menu">
                  <span @click="cur=0" :class="{active:cur==0}">当前委托</span>
                  <span @click="cur=1" :class="{active:cur==1}">历史委托</span>
                </div>
                <div class="m_table">
                  <div v-show="cur==0">
                    <table>
                      <thead>
                        <td>委托时间</td>
                        <td>产品</td>
                        <td>方向</td>
                        <td>已成交量|委托量</td>
                        <td>成交均价|委托价</td>
                        <td>成交均价|委托价</td>
                        <td>操作</td>
                      </thead>
                      <tbody>
                        <tr>
                          <td>15:44</td>
                          <td>RYU-鬼蛟</td>
                          <td>买入</td>
                          <td>17|53.685</td>
                          <td>45.62|53.685</td>
                          <td>待完成</td>
                          <td><a href="">撤销</a></td>
                        </tr>
                        <tr>
                          <td>15:44</td>
                          <td>RYU-鬼蛟</td>
                          <td>买入</td>
                          <td>17|53.685</td>
                          <td>45.62|53.685</td>
                          <td>待完成</td>
                          <td><a href="">撤销</a></td>
                        </tr>
                        <tr>
                          <td>15:44</td>
                          <td>RYU-鬼蛟</td>
                          <td>买入</td>
                          <td>17|53.685</td>
                          <td>45.62|53.685</td>
                          <td>待完成</td>
                          <td><a href="">撤销</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-show="cur==1">
                    123
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'buyingInterest',
  data () {
    return {
      	cur:0,
        mcur:0
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
  .buyMain{
    margin: 0 auto;
    width: 65%;
    height: 100%;
    font-family:PingFang SC;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #333333;
    font-size: 13px;
  }
  .buyMainLeft{
    width: 25%;
    height: 70%;
    box-shadow:1px 1px 6px 1px rgba(214,212,212,0.42);
    border-radius:4px;
    font-size: 12px;
  }
  .buyMain .buyMainLeft .input{
    position: relative;
  }
  .buyMain .buyMainLeft input{
    width:150px;
    height:18px;
    border:1px solid rgba(227,227,227,1);
    border-radius:3px;
    height: 18px;
    margin-left: 10px;
  }
  .buyMainLeft>p>img{
    width: 10px;
    height: 10px;
    position: absolute;
    right: 15px;
    top:7px;
  }
  .buyMainLeft .product{
    margin-left: 24px;
  }
  .buyMainLeft p,.buyMainLeft ul li{
    height: 25px;
    line-height: 25px;
  }
  .buyMainLeft ul li{
    width: 100%;
  }
  .buyMainLeft ul li:nth-child(2n-1){
    background-color: #E3E3E3;
  }
  .buyMainLeft ul li,.buyMainLeft ul a{
    display: inline-block;
    vertical-align: middle;
  }
  .buyMainLeft ul li img {
    margin-left: 14.5px;
    margin-right: 11px;
    width: 11px;
    height: 11px;
  }
  .buyMainLeft , .buyMainRight{
    float: left;
  }
  .buyMainRight{
    width: 70%;
    margin-left: 30px;
    font-size: 12px;
    height: 100%;
  }
  .buyMainRight .buyMainRightTop,.buyMainRight .buyMainRightMiddle,.buyMainRight .buyMainRightBottom,.buyMainRightMiddle .middleOne,.buyMainRightMiddle .middleTwo,.buyMainRightMiddle .middleThree{
    box-shadow:1px 1px 6px 1px rgba(214,212,212,0.42);
    border-radius:4px;
  }
  .buyMainRightTop .title{
    font-size: 17px;
    margin-left: 15.5px;
  }
  .buyMainRightTop .aount{
    margin-left: 30px;
    margin-right: 30px;
  }
  .buyMainRight .buyMainRightTop p a{
    display: inline-block;
    height: 45px;
    line-height: 45px;
  }
  .buyMainRightMiddle,.buyMainRight .buyMainRightBottom{
    margin-top: 20px;
  }
  .buyMainRightMiddle .middleOne,.buyMainRightMiddle .middleTwo,.buyMainRightMiddle .middleThree{
    float: left;
    height: 360px;
  }
  .buyMainRight .buyMainRightBottom .menu{
    height: 45px;
    line-height: 45px;
    border-bottom:1px solid #E3E3E3;
  }
  .buyMainRight .buyMainRightBottom .m_table table td{
    font-size: 12px;
    color: #666666;
    width: 9%;
    height: 39.5px;
    line-height: 39.5px;
    border-bottom: 1px solid #E3E3E3;
    text-align: center;
  }
  .m_table td:nth-child(4),.m_table td:nth-child(5),.m_table td:nth-child(6){
    width: 20%;
  }
  .menu span{
    margin-left: 36.5px;
    padding:10px 5px 11.5px 5px;
  }
  .middleCur span{
    padding:10px 5px 9px 5px;
  }
  .active{
    color: #3075EE;
    border-bottom: 2px solid #3075EE;
  }
  .buyMainRightMiddle .middleOne{
    width: 38.5%;
    border:1px solid red;
  }
  .clear{
    clear: both;
  }
  .buyMainRightMiddle .middleTwo{
    width: 28%;
    border:1px solid red;
    margin-left: 4.5%;
  }
  .buyMainRightMiddle .middleTwo .middleCur{
    height: 37px;
    line-height: 37px;
    padding-left: 10px;
    border-bottom: 1px solid #E3E3E3
  }
  .buyMainRightMiddle .middleThree{
    width: 23%;
    margin-left: 4.5%;
  }
  .buyMainRightMiddle .middleThree table td,th{
    font-size: 10px;
  }
  .buyMainRightMiddle .middleThree img{
    width: 5px;
    height: 6.5px;
  }
  .buyMainRightMiddle .middleThree .middleHeader{
    font-size: 13px;
    padding-left: 10px;
    line-height: 37px;
    height: 37px;
    border-bottom: 1px solid #E3E3E3;
  }
  .tableOne,.tableTwo{
    width: 100%;
    margin-top: 10px;
  }
  .middleThree .middleP{
    height: 20px;
    line-height: 20px;
    padding-left: 10px;
    border-top: 1px solid #E3E3E3;
    border-bottom: 1px solid #E3E3E3;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .middleThree .middleP a{
    display: inline-block;
    color: #D41D16;
    font-size: 14px;
  }
  .tableOne td,.tableTwo td{
    width: 50%;
    line-height: 16px;
    height: 16px;
    text-align: center;
  }
  .tableOne td:nth-child(1){
    color: #D41D16;
  }
  .tableTwo td:nth-child(1){
    color: #02D180;
  }
  
</style>
