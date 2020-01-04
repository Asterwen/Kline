<template>
    <div class="bodyWrap">
        <Header/>
        <div class="accountMain">
          	<div class="mainLeft">
          		<p><img src="../assets/img/qianbao.png"><a class="qianbao">资产管理</a></p>
          		<p>账户总览</p>
          		<p class="menuActive"><a>行权账户</a></p>
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
            		<a class="active">已行权</a>
          		</div>
	          	<div class="listTableOne">
	              	<table>
	                	<thead>
		                  	<td>产品</td>
		                  	<td>行权数量</td>
		                  	<td>状态</td>
	                	</thead>
	                	<tbody>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>1件</td>
			                    <td>行权审核中</td>
		                  	</tr>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>2件</td>
			                    <td>派送中</td>
		                  	</tr>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>3件</td>
			                    <td>已收货</td>
		                  	</tr>
	                	</tbody>
	              	</table>
	          	</div>
	          	<div class="listHeader">
            		<a class="active">可行权</a>
          		</div>
	          	<div class="listTableTwo">
	              	<table>
	                	<thead>
		                  	<td>产品</td>
		                  	<td>权益数量</td>
		                  	<td>冻结</td>
		                  	<td>操作</td>
	                	</thead>
	                	<tbody>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>104</td>
			                    <td>2</td>
			                    <td class="actBut"><a>行权</a></td>
		                  	</tr>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>4</td>
			                    <td>2</td>
			                    <td class="actBut"><a>行权</a></td>
		                  	</tr>
		                  	<tr>
			                    <td>RYU-鬼蛟</td>
			                    <td>94</td>
			                    <td>0</td>
			                    <td class="actBut"><a>行权</a></td>
		                  	</tr>
	                	</tbody>
	              	</table>
	          	</div>
          	</div>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
  name: 'exerciseAccount',
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
  	height: 320px;
  	text-align: center;
  }
  .mainLeft>p:nth-child(3){
    padding-bottom: 10px;  
    border-bottom: 1px solid rgba(227,227,227,1);
  }
  .accountMain .mainLeft .menuActive a{
  	width: 100%;
  	display: inline-block;
  	background-color:#EAF1FD;
    border-left: 1px solid rgba(48,117,238,1);
  }
  .accountMain .mainRight{
  	float: left;
  	width: 67.5%;
  	margin-left: 7%;
  	height: 80%;
  }
  .mainLeft p {
  	height: 40px;
  	line-height: 40px;
    width: 100%;

  }
  .mainLeft p img{
    width: 12px;
    height: 14px;
    margin-right: 8px;
  }
  .mainLeft p a,.mainLeft p img{
    display: inline-block;
    vertical-align: middle;
  }
  .mainLeft p .qianbao{
    padding-right: 20px;
  }
  .mainLeft .mainLeftBottom .bottomLeft{
  	float: left;
  }
  .mainLeft .mainLeftBottom .bottomLeft{
  	float: left;
  }
  .mainLeft .mainLeftBottom .bottomRight{
  	margin-top: 42.5px;
  	padding-top: 5px;
  }
  .mainLeft .mainLeftBottom .bottomRight p{
  	height: 20px;
  	line-height: 20px;
  }
  .mainLeftBottom div img{
  	width: 65px;
  	height: 65px;
  	margin-left: 13.5px;
    margin-right: 5px;
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
  td{
  	line-height: 34px;
  	border-bottom: 1px solid #E3E3E3;
  	font-size: 11px;
  }
  .mainRight .listTableOne table td{
  	color: #666666;
  	text-align: center;
  	width: 200px;
  }
  .mainRight .listTableTwo table td{
  	text-align: center;
  	width: 150px;
  }
  .listTableTwo table tbody .actBut a{
  	display: inline-block;
  	width: 45px;
  	line-height: 20px;
  	height: 20px;
  	color: #3075EE;
  	border:1px solid rgba(48,117,238,1);
  }
</style>
