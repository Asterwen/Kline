<template>
	<div class="b_body">
		<Header/>
		<div class="body_main">
			<div class="banner">
				<div class="gkex"><span class="gk">GK </span><span class="ex">EX</span></div>
				<div class="num">数字资产交易平台正式上线</div>
				<div class="num_img">
					<div class="img1">
						<img src="../assets/img/num1.png">
						<div class="text_1">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
					</div>
					<div class="img2">
						<img src="../assets/img/num2.png">
						<div class="text_2">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
					</div>
					<div class="img3">
						<img src="../assets/img/num3.png">
						<div class="text_3">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
					</div>
					<div class="img4">
						<img src="../assets/img/num4.png">
						<div class="text_4">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
					</div>
					<!-- <img src="../assets/img/num2.png">
					<img src="../assets/img/num4.png">
					<img src="../assets/img/num3.png">
					<div class="img_text">
						
						<div class="text_2">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
						<div class="text_3">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
						<div class="text_4">
							<p class="big_t">数组资产交易平台</p>
							<p class="small_t">正式上线</p>
						</div>
					</div> -->
				</div>
			</div>
			<div class="main">
				<div class="menu">
		         	<span @click="cur=0" :class="{active:cur==0}">24H涨幅榜</span>
		         	<span @click="cur=1" :class="{active:cur==1}">上新榜</span>
		       	</div>
		       	<div class="m_table">
		       		<div v-show="cur==0">
		       			<table>
			         		<thead>
			         			<td>产品名称</td>
				         		<td>最新价</td>
				         		<td>24H涨幅榜</td>
				         		<td>24H最低</td>
				         		<td>24H最高</td>
				         		<td>24H交易量</td>
			         		</thead>
			         		<tbody>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td>-51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td style="color: #02D180;">+51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td>-51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td style="color: #02D180;">+51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td>-51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td style="color: #02D180;">+51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td>-51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td style="color: #02D180;">+51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>
			         			<tr>
			         				<td>RYU-鬼蛟</td>
				         			<td>45.99</td>
				         			<td>-51.12%</td>
				         			<td>30.45</td>
				         			<td>45.99</td>
				         			<td>10，000份</td>
			         			</tr>

			         		</tbody>
			         	</table>
		       		</div>
		         	<div v-show="cur==1">
		         		
		         	</div>
		       	</div>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>
export default {
  name: 'index',
  	data () {
    	return {
    		cur:0
    	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.b_body{
		width: 100%;
	 	/*height: 100%;*/
	  	overflow: auto;
	  	position: relative;
	}
	.body_main{
		height: 100%;
		margin-bottom: 180px;
	}
	.banner{
		background: url("../assets/img/index_banner.png") no-repeat;
		height: 676px;
		color: #FFF;
		text-align: center;
	}
	.banner .gkex{
		padding-top: 148px;
		font-weight:bold;
		color:rgba(254,254,254,1);
		line-height:49px;
	}
	.banner .gkex .gk{
		font-size:52px;
	}
	.banner .gkex .ex{
		font-size:30px;
	}
	.banner .num{
		margin-top: 38px;
		font-size:52px;
	}
	.banner .num_img{
		width: 1024px;
		width: -moz-calc(100% - 40px);
		width: -webkit-calc(100% - 40px);
		width: calc(100% - 40px);
		margin: auto;
		margin-top: 75px;
		position: relative;
	}
	.banner .num_img div{
		display:inline;
	}
	.banner .num_img img{
		margin-left: 18px;
		object-fit: cover;
	}
	.text_1,.text_2,.text_3,.text_4{
		position:absolute;
		top: 20px;
		z-index:2;
	}
	.img1 img{
		position:absolute;
		left: 13.5%;
	}
	.img2 img{
		position:absolute;
		left: 32%;
	}
	.img3 img{
		position:absolute;
		left: 50.5%;
	}
	.img4 img{
		position:absolute;
		left: 69%;
	}
	.text_1{
		left: 15.5%;
	}
	.text_2{
		left: 34%;
	}
	.text_3{
		left: 52.5%;
	}
	.text_4{
		left: 71%;
	}
	.big_t{
		font-size: 22px;
	}
	.small_t{
		font-size: 17px;
		margin-left: -112px;
	}
	.main{
		width: 60%;
		box-shadow:0px 0px 5px 0px rgba(214,212,212,0.42);
		border-radius:4px;
		margin: 0 auto;
		margin-top: 40px;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		line-height: 40px;
	}
	.menu{
		border-bottom: 1px solid rgba(227,227,227,1);
	}
	.menu span{
		font-size:16px;
		margin-left: 36.5px;
		padding:10px 10px 9px 20px;
	}
	.active{
		color: #3075EE;
		border-bottom: 2px solid #3075EE;
	}
	table{
		width: 100%;
	}
	td{
		font-size:14px;
		width: 18.5%;
		text-align: center;
		border-bottom: 1px solid rgba(227,227,227,1);
	}
	tr td:nth-child(3){
		color: #D41D16;
	}

</style>
