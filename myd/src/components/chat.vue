<template>
  <div>
    <div class='chatRoom' ref='chatRoom'>
      <div v-for="itm in msList">
        <div v-if="itm.type==1">
          {{itm.msg}}进入聊天室
        </div>
        <div v-else>
          <div style="height: 30px;" >
            <div :class="itm.userId=='keFu'?'rigs':'lefts'">
             {{itm.msg}}
            </div>
          </div>
        </div>
        
      </div>
    </div>


    <div>
      <input type="text" v-model="msg" placeholder="请输入内容">
      <button @click="send">发送</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Chat',
    data(){
      return {
        msg:'',
        userId:'',
        socket:null,
        msList:[]
      }
    },
    mounted(){
      this.initSocket()
    },
    destroyed(){
      this.socket.close()
    },
    methods:{
      send(){
        if(this.msg){
          this.sendMsg(2,this.msg)
        }
      },
      sendMsg(type,msg){
        this.socket.send(JSON.stringify({
          type:type,msg:msg,userId:'keFu'
        }))
      },
      add(){
        this.$nextTick(()=>{
          this.$refs.chatRoom.scrollTop=this.$refs.chatRoom.scrollHeight
        })
      },
      initSocket(){
        let that=this
        const url="ws://localhost:3000/"
        let socket = new WebSocket(url)
        this.socket = socket
        this.socket.onopen=function(){
          console.log('已经链接')

        }
        this.socket.onmessage=function(str){
          console.log(str)
          if(str.data!="\"\""){
            let getms=JSON.parse(str.data)
            that.msList.push(getms)
            that.add()
          }
        }
        this.socket.onclose=function(){
          console.log('短接链接')
        }
        this.socket.onerror=function(err){
          console.log('连接失败')
          console.log(err)
        }
      }
    }
  }
</script>

<style>
  .chatRoom{
    width: 400px;
    height: 600px;
    overflow-y: auto;
    border: 1px solid gray;
  }
  .lefts{
    float: left;
  }
  .rigs{
    float: right;
  }
</style>
