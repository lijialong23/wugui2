<template>
	<div class='faths'>
		<div class='topss'>
			
			<el-carousel indicator-position="none" :autoplay='falses' :loop='falses' arrow="never" ref='carousel'>
				
				<el-carousel-item v-for='itm in 1'>
					<div class='showbtn'>
						<div class='comList'>
							<div class='woq' v-for="(itm,index) in new1 ">
								<p class='articles' v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radioss" v-if='itm.address'>
									<el-radio-button  :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>	
								</el-radio-group>
							</div>
							
						</div>
						<div class='comList'>
							<div class='woq'  v-for="(itm,index) in new2 ">
								<p class='articles' v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radioss" v-if='itm.address'>
									<el-radio-button  :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>	
								</el-radio-group>
							</div>
							
						</div>
						<div class='comList'>
							<div class='woq'  v-for="(itm,index) in new3 ">
								<p class='articles' v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radioss" v-if='itm.address'>
									<el-radio-button  :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>	
								</el-radio-group>
							</div>
							
						</div>
					</div>
					
				</el-carousel-item>
			</el-carousel>

		</div>
		<div class='pinlei' :class="{'nomyla':index==2}" v-for="(itm,index) in peileis">
			<p class='lefss'>{{itm.type}}:</p>
			
			
			<p class='rigss' :class="{'spacill':index==2}">
				<el-radio-group v-model="radio1" v-if='index==0'>
					<el-radio-button :label="indexs" v-for='(itms,indexs) in itm.lists' v-if="itms!=addMe">{{itms}}</el-radio-button>
					<el-radio-button label="" v-for='(itms,indexs) in itm.lists' v-if="itms==addMe">{{itms}}</el-radio-button>
				</el-radio-group>
				<el-radio-group v-model="radio2" v-if='index==1'>
					<el-radio-button :label="itms" v-for='(itms,indexs) in itm.lists' v-if="itms!=addMe">{{itms}}</el-radio-button>
					<el-radio-button label="" v-for='(itms,indexs) in itm.lists' v-if="itms==addMe">{{itms}}</el-radio-button>
				</el-radio-group>
				<el-radio-group v-model="radio3" v-if='index==2'>
					<el-radio-button :label="itms" v-for='(itms,indexs) in itm.lists' v-if="itms!=addMe">{{itms}}</el-radio-button>
					<el-radio-button label="" v-for='(itms,indexs) in itm.lists' v-if="itms==addMe">{{itms}}</el-radio-button>
				</el-radio-group>
			</p>
		</div>
	</div>
</template>

<script>
	import bbss from '@/getip.js'
	export default {
		data() {
			return {
				radio1: '',
				lefone:'',
				radio2: '',
				radio3: '',
				radioss:'',
				falses: false,
				tfalse:false,
				showNone:'',
				num:0,
				new1:[],
				new2:[],
				new3:[],
				new4:[],
				
			}
		},
		created() {
			this.$emit('getSon', '1')
		},
		mounted(){
			
		},
		watch:{
			threeData:{
				handler(news,old){
					console.log(news)
					bbss.bbss(ip=>{
						this.gtList({firstLetter:news.firstLetter,wType:news.wType,isCh:news.isCh,wFloor:news.wFloor,systemFlag:ip})
					})
					
				},
				immediate:true,
				deep:true
			},
			
			radioss(news,old){
				console.log(news)
				this.$router.push({name:'BussnisInfo',query:{wcode:news,botList:JSON.stringify(this.threeData),redirect:this.$route.fullPath}})
			}
		},
		computed: {
			
			peileis() {
				return this.$store.getters.searchGet 
			},
			threeData(){
				return {
					firstLetter:this.radio3,
					wType:this.radio1,
					wFloor:this.radio2,
					isCh:this.$store.state.langues
				}
			},
			addMe(){
				if(this.$store.state.langues=='0'){
					return this.showNone='无'
				}else{
					return this.showNone='None'
				}
			}
			
		},
		methods: {
			firs(arr){
				arr.forEach((itm,index)=>{
					this.num++
					if(this.num<=40){
						this.new1.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
						
					}else if(this.num<=80){
						this.new2.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
						
					}else if(this.num<=120){
						this.new3.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
					}else if(this.num>120){
						this.new4.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
					}
					
					itm.lists.forEach(itms=>{
						this.num++
						if(this.num<=40){
							this.new1.push(itms)
							
						}else if(this.num<=80){
							this.new2.push(itms)
						}else if(this.num<=120){
							this.new3.push(itms)
						}else if(this.num>120){
							this.new4.push(itms)
						}
						
					})
					
				})
				
			},
			async gtList(params){
				let res=await this.$http.get(this.baseUrl+'/mobile/login/floorShop2',{params:params}).then(res=>{
					console.log(res)
					return res.data.rows
				}).catch(function(err){
					console.log(err)
				})
				this.num=0
				this.new1=[]
				this.new2=[]
				this.new3=[]
				this.new4=[]
				this.firs(res)
				
				
			},
		
			
			
			
		},
		
	}
</script>

<style>
	.woq{
		margin-bottom: 2px;
	}
	.comList{
		margin-right: 60px;
	}
	.showbtn .articles{
		height: 27px;
		background: #A4A4A4;
		line-height: 27px;
		color: white;
	}
	.showbtn .el-radio-button:first-child .el-radio-button__inner {
		border: none;
		border-radius: 0px;
	}
	
	.showbtn .el-radio-button:last-child .el-radio-button__inner {
		border: none;
		border-radius: 0px;
	}
	.showbtn .el-radio-button__orig-radio:checked+.el-radio-button__inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #A4A4A4;
		border: none;
		width: 168px;
		padding: 0;
	}
	.showbt .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		box-shadow: none;
	}
	.showbtn .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		background: #CAB281;
	}
	.showbtn .el-radio-button__inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: none;
		height: 27px;
		font-size: 14px;
		border: none;
		width: 168px;
		padding: 0;
		line-height: 27px;
	}
	.showbtn{
		width:625px;
		height: 825px;
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		margin: 0 auto;
		margin-top: 70px;
	}
	
	
	.pinlei .el-radio-group{
		width:710px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		align-content: stretch;
		height: 100px;
	}
	.pinlei .spacill .el-radio-group{
		height: 120px;
	}
	.pinlei .spacill .el-radio-button{
		width: 64px;
		height: 38px;
		padding:0;
		text-align: center;
		line-height: 38px;
	}
	.pinlei .el-radio-button__inner:hover{
		color:#4d3a18;
	}
	.pinlei .el-radio-button__inner{
		padding: 4px 30px 6px 30px;
		font-size: 30px;
		border-radius: 7px;
		background: none;
		border: none;
		color: #4d3a18;
	}
	.pinlei .spacill .el-radio-button__inner{
		padding:4px 16px 6px 16px;
	}
	.pinlei .el-radio-button:first-child .el-radio-button__inner{
		border: none;
		border-radius: 7px;
	}
	.pinlei .el-radio-button:last-child .el-radio-button__inner{
		border-radius: 7px;
	}
	.pinlei .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		color: white;
		background: #CAB281;
		box-shadow: none;
		border: none;
	}
	.pinlei .el-radio-button{
		text-align: center;
		border-radius: 7px;
		margin-right: 8px;
		color: #070002;
	}
	.pinlei {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		padding-left: 103px;
		margin-bottom: 42px;
	}
	.nomyla {
		margin-bottom: 0;
	}

	.pinlei .lefss {
		font-size: 42px;
		width:170px;
		text-align: right;
		color: white;
	}

	.pinlei .changbg {
		background: red;
	}

	.pinlei .rigss {
		width: 710px;
		margin-left: 18px;
	}
	.topss {
		padding-bottom: 41px;
		border-radius: 17px;
		position: relative;
	}

	.faths .el-carousel__container {
		height: 1240px;
		width: 720px;
		background: white;
		border-radius: 17px;
		margin: 0 auto;
		box-shadow: 14px 14px 5px #888888;
	}

	.faths .el-carousel--horizontal {
		box-shadow: 14px 14px 5px #888888;
		border-radius: 17px;
		overflow-y: auto;
		
		width: 720px;
		margin: 0 auto;
	}

	

</style>
