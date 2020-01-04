<template>
    <div class="bodyWrap">
        <Header/>
        <div class="listMain">
          <div class="listHeader">
            <a @click="cur=0" :class="{active:cur==0}">自选</a>
            <a @click="cur=1" :class="{active:cur==1}">RYU</a>
            <a @click="cur=2" :class="{active:cur==2}">KYTB</a>
            <a class="listInput"><input type="" name=""><img src="../assets/img/sousuo.png"></a>
            <a>计价单位</a>
            <a>CNY</a>
          </div>
          <div class="liatTable">
            <div v-show="cur==0">
              <table>
                <thead>
                  <td><img src="../assets/img/start.png"><a>币种</a></td>
                  <td>最新价</td>
                  <td>24H涨幅榜<img src="../assets/img/sort.png"></td>
                  <td>24H最低</td>
                  <td>24H最高</td>
                  <td>24H交易量</td>
                  <td>操作</td>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="../assets/img/start.png"><a>RYU-鬼蛟</a></td>
                    <td>45.99</td>
                    <td>-51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="../assets/img/start.png">RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td style="color: #02D180;">+51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="../assets/img/start.png">RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td>-51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="../assets/img/start.png">RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td style="color: #02D180;">+51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="../assets/img/start.png">RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td>-51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td>RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td style="color: #02D180;">+51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td>RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td>-51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td>RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td style="color: #02D180;">+51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>
                  <tr>
                    <td>RYU-鬼蛟</td>
                    <td>45.99</td>
                    <td>-51.12%</td>
                    <td>30.45</td>
                    <td>45.99</td>
                    <td>10，000份</td>
                    <td>
                      <a href="">简介</a>
                      <a href="">行情</a>
                      <a href="">交易</a>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div v-show="cur==1">
              RYU
            </div>
            <div v-show="cur==2">
              KYTB
            </div>
          </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'productList',
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
  .listMain{
    margin: 0 auto;
    width: 66%;
    height: 100%;
    box-shadow:0px 0px 5px 0px rgba(214,212,212,0.42);
    border-radius:4px;
    font-family:PingFang SC;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #333333;
  }
  .listHeader{
    margin-left: 20px;
    border-bottom: 1px solid rgba(227,227,227,1);
  }
  .listHeader a{
    line-height: 50px;
    height: 50px;
    width: 60px;
    text-align: center;
  }
  .listHeader .active{
    border-bottom: 1px solid rgba(48,117,238,1);
  }
  a{
    display: inline-block;
  }
  .listHeader .listInput{
    width: 47%;
    text-align: right;    
    position: relative;
  }
  .listHeader .listInput input{
    border:1px solid rgba(227,227,227,1);
    border-radius:3px;
    margin-right:16px;
  }
  td{
    font-size:13px;
    width: 15.1%;
    text-align: center;
    border-bottom: 1px solid rgba(227,227,227,1);
    line-height: 45px;
    height: 45px;
  }
  td a{
    color: #3075EE;
  }
  tr td:nth-child(3){
    color: #D41D16;
  }
  thead td img{
    width: 15px;
    height: 15px;
  }
  thead td img,thead td a,tbody tr td img,tbody tr td a{
    display: inline-block;
    vertical-align: middle;
  }
  tbody tr td img,.listHeader .listInput img{
    width: 11px;
    height: 11px;
  }
  .listHeader .listInput img{
    position: absolute;
    right: 21px;
    top:19px;
  }



</style>
