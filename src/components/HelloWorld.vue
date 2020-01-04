 <template>
  <div class="hello">
    <Header/>
    <!-- <h2>我的走势图</h2>  -->
    <div class="kTitle">
      <p class='kSymbol'>{{klineParams.symbolName}}</p>
    </div>
    <Vue-kline :klineParams="klineParams" :klineData="klineData" ref="callMethods" ></Vue-kline>
    <Footer/>
  </div>
</template>

<script>
import VueKline from "vue-kline"
export default {
  components: {
    VueKline,
  },
  name: 'HelloWorld',
  data() {
    return {
      getMsg: null,
      websock:null,
      meg: "first vue-cli test, welcome you coming",
      klineParams: {
        width: 1200,
        height: 608,
        theme: "white",
        language: "zh-cn",
        ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],
        symbol: "RYU-鬼蛟",
        symbolName: "RYU-鬼蛟/CNY",
        intervalTime: 5000,
        depthWidth: 46
      },
      klineData: {
        // success: true,
        // data: {
        //   depths: {
        //     asks: [

        //     ],
        //     bids: [
        //     ]
        //   },
        //   lines: [
 
        //   ]
        // }
      }
    };
  },
  mounted() {
    this.initWebScoket()
  },
  methods: {
    // 初始化webscoket
    initWebScoket(){
        const ws = 'ws://211.149.173.61:8081/ws'
        // 实例化WebSocket
        this.websock = new WebSocket(ws);
        this.websock.onopen = this.websocketonopen;  //监听初次连接
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onerror = this.websocketonerror;
        
    },
    getTime(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds()
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      if (hour >= 0 && hour <= 9) {
          hour = "0" + hour;
      }
      if (minutes >= 0 && minutes <= 9) {
          minutes = "0" + minutes;
      }
      if (seconds >= 0 && seconds <= 9) {
          seconds = "0" + seconds;
      }
      var currentdate = year + '-' + month + '-' + strDate+ ' ' + hour + ':' + minutes + ':00';
      return currentdate;
    },
    websocketonopen(){ //连接建立之后执行send方法发送数据
        const that = this
        let param = {
          "type": 1,
          "time_type": 1,
          "gk_id": 1
        }
        this.websock.send(JSON.stringify(param))
        let param1 = {
          "type": 2, 
          "time_type": 1,
          "gk_id":1,
          "message_type": 1,
          "time": ""
        }
        this.websock.send(JSON.stringify(param1))
        this.getMsg = setInterval(function(){
          that.getMessage()
        },10000)
        return
      },
      getMessage(){
        let timeNow = this.getTime()

        let param = {
          "type": 2, 
          "time_type": 1,
          "gk_id":1,
          "message_type": 1,
          "time": timeNow,
          "lenth": 30
        }
        this.websock.send(JSON.stringify(param))
      },
    websocketonerror(){//连接建立失败重连
        this.initWebSocket();
      },
    websocketonmessage(e){ //数据接收
        const that = this
        that.redata = JSON.parse(e.data);
        let newData = that.klineData
        newData.data.depths = that.redata.data.depths;
        newData.data.lines.pop()
        newData.data.depths.asks.pop()
        newData.data.depths.bids.pop()
        for(let i=0; i<that.redata.data.lines.length; i++){
          newData.data.depths.asks.push(that.redata.data.depths.asks[i])
          newData.data.depths.bids.push(that.redata.data.depths.bids[i])
          newData.data.lines.push(that.redata.data.lines[i])
        }
        that.klineData = newData
        console.log(newData)
        // refreshKlineData()
        this.$refs.callMethods.kline.chartMgr.getChart().updateDataAndDisplay(that.klineData.data.lines);
      },
    websocketsend(Data){//数据发送
        this.websock.send(Data);
      },
    websocketclose(e){  //关闭
        let actions3 = {"type": 3};
        this.websocketsend(JSON.stringify(actions3));
      },
   
  },
  destroyed() {
      this.websock.onclose = this.websocketclose;
  },
  watch: {
    // 切换交易类型
    symbolName(){
      // 关闭当前交易
      this.websock.onclose = this.websocketclose;
      //  开启新的交易
      this.initWebScoket()
    }
  }
}
</script>

<style>
#chart_show_indicator,#chart_show_tools,#chart_toolbar_theme,.chart_dropdown_t,#chart_tabbar a{
  visibility: hidden;
}
.selected{
  color:#ffac00;
}
.hello,#kline_container{
  margin:0 auto;
}
.kTitle{
  width: 1200px;
  height: 100px;
  margin: 40px auto;
  box-shadow:0px 0px 5px 0px rgba(214,212,212,0.42);
  border-radius:4px;
  
}
.kSymbol{
  height: 100%;
  line-height: 100px;
  margin-left:2%;
}
</style>
