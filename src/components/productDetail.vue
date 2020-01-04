<template>
    <div class="bodyWrap">
        <Header/>
        <div class="productMain">
            <div class="mainHeader">
            	<p>产品简介</p>
            </div>
            <div class="mainBody">
            	<div class="mainLeft">
            		<table>
            			<tr>
            				<td>产品名称:</td>
            				<td>RYU-鬼蛟/CNY</td>
            			</tr>
            			<tr>
            				<td>出品工作室:</td>
            				<td>RYU工作室</td>
            			</tr>
            			<tr>
            				<td>预售时间:</td>
            				<td>2019-11-19</td>
            			</tr>
            			<tr>
            				<td>发行时间:</td>
            				<td>2019-11-19</td>
            			</tr>
            			<tr>
            				<td>权益发行总量:</td>
            				<td>20000</td>
            			</tr>
            			<tr>
            				<td>行权标准:</td>
            				<td></td>
            			</tr>
            			<tr>
            				<td>预售价格:</td>
            				<td>586,5252</td>
            			</tr>
            		</table>
            		<p>
            			RYU-鬼蛟/CNY的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的p2p网络。比特币是一种p2p形式的数字货币。点对点的传输意味着一个去中心化的支付系统。 与大多数货币不同，比特币不依靠特定货币机构发行，它依据特定算法，通过大量的计算产生，比特币经济使用整个p2p网络中众多节点构成的分布式数据库来确认并记录所有的交易行为，并使用密码学的设计来确保货币流通各个环节安全性。p2p的去中心化特性与算法本身可以确保无法通过大量制造比特币来人为操控币值。
            		</p>
            	</div>
            	<div class="mainRight">
            		<p><img src="../assets/img/product1.png"></p>
            		<p><img src="../assets/img/product2.png"></p>
            		<p><img src="../assets/img/product3.png"></p>
            	</div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'productDetail',
  data () {
    return {
      	
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
  	.productMain{
	  	margin: 0 auto;
	  	width: 65%;
	    height: 100%;
	    box-shadow:0px 0px 5px 0px rgba(214,212,212,0.42);
		  border-radius:4px;
		  font-family:PingFang SC;
		  margin-top: 60px;
      margin-bottom: 60px;
  	}
  	.mainHeader{
  		border-bottom: 1px solid rgba(227,227,227,1);
  	}
  	.mainHeader p{
	  	height: 60px;
	  	line-height: 60px;
	  	color: #333333;
	  	font-size:13px;
  	
  	}
  	.mainBody{
  		margin-top: 40px;
  	}
  	.mainBody .mainLeft table tr td,.mainLeft p{
	  	color: #333333;
	  	font-size: 12px;
  	}
  	.mainBody .mainLeft table tr td{
  		line-height: 20px;
  		padding-right: 5px;
  	}
  	.mainLeft table,.mainHeader p,.mainLeft p{
  		margin-left: 39px;
  	}
  	.mainLeft{
  		float: left;
  		width: 60%;
  	}
  	.mainRight{
  		float: left;
  		width: 40%;
  		margin-left: 57.5px;
  		width: 166px;
  	}
  	.mainRight img{
  		width: 166px;
  		height: 107px;
      border:1px dashed #333;
      margin-bottom: 20px;
  	}





</style>
