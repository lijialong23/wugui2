<template>
	<div class="act faths">
		<div class='actTop'>
			<el-radio-group v-model="radio1">
				<el-radio-button :label="1">{{actGet.syhd}}</el-radio-button>
				<el-radio-button :label="0">{{actGet.hshd}}</el-radio-button>
			</el-radio-group>
		</div>
		<div id='addme'>
		
		<div class='actMain'>
				<div>
					<div v-for="(itm,index) in arr">
						<div class='bussnis'>
							<div class='cont_ps'>
								<img :src="itm.imgUrl" alt="" class='nameList'>
							</div>
						</div>
						<div v-show="index!=arr.length-1" class=bot_line></div>
					</div>
					
				</div>
				
			
		</div>
			
		</div>
	</div>
</template>

<script>
	import bbss from '@/getip.js'
	export default{
		data() {
			return {
				key: 'value',
				radio1:'1',
				arr:[],
				chooseNum:1
			}
		},
		created(){
			this.$emit('getSon','2')
		},
		
		watch:{
			choseLn:{
				handler(news,old){
					bbss.bbss(ip=>{
						this.getBussOne({isCh:news.isCh,activityType:news.activityType,systemFlag:ip})
					})
					
				},
				immediate:true,
				deep:true
			}
		},
		beforeRouteLeave(to,from,next){
			from.meta.keepAlive=false
			next()
		},
		computed: {
			actGet() {
				return this.$store.getters.activityGet
			},
			choseLn(){
				return {
					isCh:this.$store.state.langues,
					activityType:this.radio1
				}
			}
		},
		methods: {
			goBusn(index) {
				this.$router.push({name:'BussnisInfo',query:{id:index}})
			},
			
			getBussOne(params){
				this.$http.get(`${this.baseUrl}/mobile/login/extensionActivities`,{params:params}).then(res=>{
					console.log(res)
					this.arr=res.data.rows
				}).catch(error=>{
					console.log(error)
				})
			}
		},
	}
</script>

<style>
	.bot_line{
		width: 640px;
		height: 1px;
		background: black;
		margin-left: 105px;
	}
	.cont_ps{
		display: flex;
		flex-direction: row;
		
	}
	.cont_ps .nameList{
		display: block;
		width: 650px;
		height: 240px;
		margin: 0 auto;
	}
	.bus_info{
		color: #595A5A;
		font-size: 18px;
		text-align: start;
	}
	.bus_tit{
		color: #C6A970;
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 30px;
		text-align: start;
	}
	
	.actMain{
		width: 880px;
		padding: 16px 0 26px 0;
		border-radius: 17px;
		box-shadow: 14px 14px 5px #888888;
		margin: 0 auto;
		background: white;
		height: 1530px;
		overflow-y: auto;
	}
	 .actMain::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
	.actMain::-webkit-scrollbar {
            width:6px;    
            height: 6px;
        }
	#addme{
		overflow:hidden;
		border-radius: 17px;
		width: 880px;
		margin: 0 auto;
	}
	.bussnis{
		width: 650px;
		margin-left:95px;
		padding: 56px 0 56px 0;
		cursor: pointer;
	}
	.actTop{
		padding:0 91px 7px 91px;
		margin: 0 auto;
		height: 106px;
	}
	.actTop .el-radio-group{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.actTop .el-radio-button{
		width: 447px;
		height: 106px;
		
	}
	.actTop .el-radio-button__inner{
		background:none;
		border: none;
		font-size: 42px;
		color: #293949;
		width: 447px;
		height: 106px;
		line-height: 106px;
		background: #D1B886;
	}
	.actTop .el-radio-button:first-child .el-radio-button__inner{
		border: none;
		border-radius:0 30px 0 30px;
		padding: 0;
	}
	.actTop .el-radio-button:last-child .el-radio-button__inner{
		border: none;
		border-radius: 7px;
		border-radius:30px 0px 30px 0px;
		padding: 0;
	}
	.actTop .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		color: white;
		background: radial-gradient(ellipse, #fff, #E2CBAE, #BBA57B);
		box-shadow: none;
		border-bottom: 3px solid #A88951;
	}
</style>
