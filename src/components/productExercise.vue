<template>
    <div class="bodyWrap">
        <Header/>
        <div class="exerciseMain">
          <div class="exerciseHeader">
            <p>产品简介</p>
          </div>
          <div class="mainBody">
            <div class="mainLeft">
              <p><img src="../assets/img/product2.png"></p>
            </div>
            <div class="mainRight">
              <table>
                <tr>
                  <td>产品名称:</td>
                  <td>RYU-鬼蛟</td>
                </tr>
                <tr>
                  <td>权益数量:</td>
                  <td>104份</td>
                </tr>
                <tr>
                  <td>可行权产品:</td>
                  <td>1件</td>
                </tr>
                <tr>
                  <td>行权人:</td>
                  <td>张三</td>
                </tr>
                <tr>
                  <td>行权地址:</td>
                  <td>北京市昌平区</td>
                </tr>
              </table>
              <p class="agent">
                <input type="checkbox" name=""> <span>我同意</span><span class="pAgent">《GKEX平台行权规范》</span>
              </p>
              <p>
                <a href="">确认行权</a>
              </p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'productExercise',
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
  .exerciseMain{
    margin: 0 auto;
    width: 65%;
    height: 100%;
    box-shadow:0px 0px 5px 0px rgba(214,212,212,0.42);
    border-radius:4px;
    font-family:PingFang SC;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #333333;
  }
  .exerciseMain .exerciseHeader{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid rgba(227,227,227,1);
  }
  .exerciseHeader p{
    margin-left: 20px;
  }
  .mainBody{
    height: 100%;
    width: 100%;
    margin-top: 60px;
  }
  .mainLeft{
    float: left;
    border: 1px dashed #333;
    margin-left: 20%;
    width: 180px;
    height: 174px;
  }
  .mainBody .mainLeft img{
    width: 180px;
    height: 174px;
  }
  .mainBody .mainRight table tr td,.mainRight p{
      color: #666;
      font-size: 12px;
    }
  .mainRight{
    float: left;
    margin-left: 57.5px;
  }
  .mainRight tr td{
    width: 90px;
    line-height: 22px;
  }
  .mainRight p{
    margin-top: 24px;
  }
  .mainRight .agent .pAgent{
    color: #3075EE;
  }
  .mainRight p a{
    display: inline-block;
    width: 180px;
    height:30px;
    background:rgba(48,117,238,1);
    border-radius:2px;
    line-height: 30px;
    text-align: center;
    color: #FFF;
  }

</style>
