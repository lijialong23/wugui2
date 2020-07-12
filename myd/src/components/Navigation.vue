<template>
	<div class="faths">
		<div class='nvaTop'>
			<el-radio-group v-model="radio1">
				<el-radio-button label="1F"></el-radio-button>
				<el-radio-button label="2F"></el-radio-button>
				<el-radio-button label="3F"></el-radio-button>
				<el-radio-button label="4F"></el-radio-button>
			</el-radio-group>
		</div>
		<div class="nvaMain">
			<div class='floor_one floors'>
				<img v-if="radio1=='1F'" src="../assets/img/floor_one.jpg" alt="">
				<img v-if="radio1=='2F'" src="../assets/img/floor_two.jpg" alt="">
				<img v-if="radio1=='3F'" src="../assets/img/floor_three.jpg" alt="">
				<img v-if="radio1=='4F'" src="../assets/img/floor_four.jpg" alt="">
				<div class='floor_main'>
					<div class="floor_left">
						<div class='floor_left_left'>
							<div class='floor_left_top floors_tit' v-for="itm in new1">
								<p class='articles' v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radio2" v-if='itm.name'>
									<el-radio-button  :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>	
								</el-radio-group>
							</div>
							
						</div>
						<div class='floor_left_rig'>
							<div class='floor_left_top floors_tit' v-for="itm in new2">
								<p class='guw'  v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radio2" v-if='itm.name'>
									<el-radio-button :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>
									
								</el-radio-group>
							</div>
						</div>
					</div>
					<div class="floor_left">
						<div class='floor_left_left'>
							<div class='floor_left_top floors_tit' v-for="itm in new3">
								<p class='articles' v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radio2" v-if='itm.name'>
									<el-radio-button  :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>	
								</el-radio-group>
							</div>
							
						</div>
						<div class='floor_left_rig'>
							<div class='floor_left_top floors_tit' v-for="itm in new4">
								<p class='guw'  v-if="itm.tit" :style="{background:itm.bgcolor}">{{itm.tit}}</p>
								<el-radio-group v-model="radio2" v-if='itm.name'>
									<el-radio-button :label="itm.address">
										<span>{{itm.name}}</span><span>{{itm.address}}</span>
									</el-radio-button>
									
								</el-radio-group>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import bbss from '@/getip.js'
	export default {
			data() {
				return {
					key: 'value',
					color:'red',
					radio1: '1F',
					radio2: '',
					num:0,
					new1:[],
					new2:[],
					new3:[],
					new4:[],
					}
				},
				created() {
					this.$emit('getSon', '3')
				},
				mounted(){
				},	
				watch:{
					allStat:{
						handler(news,old){
							bbss.bbss(ip=>{
								this.getBtn({wfloor:news.wfloor,isCh:news.isCh,systemFlag:ip})
							})
							console.log(news)
							
						},
						immediate:true,
						deep:true
					},
					radio2(news,old){
						console.log(news)
						this.$router.push({name:'ActInfo',query:{wcode:news,redirect:this.$route.fullPath}})
					}
				},
				computed:{
					nrs(){
						return this.$store.getters.navigationGet
					},
					allStat(){
						return {
							wfloor:this.radio1,
							isCh:this.$store.state.langues,
						}
					},
					
				},
				methods: {
					getBtn(params){
					this.$http.get(this.baseUrl+'/mobile/login/travelGuider',{params:params}).then(res=>{
							console.log(res)
							this.num=0
							this.new1=[]
							this.new2=[]
							this.new3=[]
							this.new4=[]
							this.fir(res.data.rows)
							
						}).catch(err=>{
							console.log(err)
						})
						
						
					},
					fir(arr){
						arr.forEach((itm,index)=>{
							this.num++
							if(this.num<=30){
								this.new1.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
								
							}else if(this.num<=60){
								this.new2.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
								
							}else if(this.num<=90){
								this.new3.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
							}else if(this.num<=120){
								this.new4.push({'tit':itm.tit,'bgcolor':itm.bgcolor})
							}
							
							itm.lists.forEach(itms=>{
								this.num++
								if(this.num<=30){
									this.new1.push(itms)
									
								}else if(this.num<=60){
									this.new2.push(itms)
								}else if(this.num<=90){
									this.new3.push(itms)
								}else if(this.num<=120){
									this.new4.push(itms)
								}
								
							})
							
						})
						
					},
					
					
				},
				
			}
</script>

<style>
	.floor_main .el-radio-button:first-child .el-radio-button__inner {
		border: none;
		border-radius: 0px;
	}
	
	.floor_main .el-radio-button:last-child .el-radio-button__inner {
		border: none;
		border-radius: 0px;
	}
	.floor_main .el-radio-button__orig-radio:checked+.el-radio-button__inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #A4A4A4;
		border: none;
		width: 168px;
		padding: 0;
	}
	.el-radio-button__orig-radio:checked+.el-radio-button__inner{
		box-shadow: none;
	}
	.floor_main .el-radio-button__orig-radio:checked+.el-radio-button__inner{
		background: #CAB281;
	}
	.floor_main .el-radio-button__inner {
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

	.floor_left_left{
		width: 168px;
	}
	.floors_tit{
		margin-bottom: 4px;
	}		
	.floors_tit p {
		font-size: 14px;
		width: 168px;
		height: 27px;
		text-align: center;
		line-height: 27px;
		background: #A4A4A4;
		color: white;
		
	}
	
	.floor_left{
		height: 964px;
		width: 393px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.floor_main {
		width: 987px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* padding-bottom:228px; */
	}

	.floors {
		width: 1017px;
		margin: 0 auto;
		background: white;
		padding-top: 26px;
		border-radius: 17px;
		box-shadow: 14px 14px 5px #888888;
	}

	.floors img{
		display: block;
		margin: 0 auto;
		margin-bottom: 41px;
	}
	.nvaTop {
		padding: 0 86px 44px 86px;
		margin: 0 auto;
		height: 73px;
	}

	.nvaTop .el-radio-group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.nvaTop .el-radio-button {
		width: 163px;
		height: 73px;

	}

	.nvaTop .el-radio-button__inner {
		background: none;
		border: none;
		font-size: 42px;
		color: #293949;
		width: 163px;
		height: 73px;
		border-radius: 10px;
	}

	.nvaTop .el-radio-button:first-child .el-radio-button__inner {
		border: none;
		border-radius: 7px;
	}

	.nvaTop .el-radio-button:last-child .el-radio-button__inner {
		border: none;
		border-radius: 7px;
	}

	.nvaTop .el-radio-button__orig-radio:checked+.el-radio-button__inner {
		color: white;
		background: radial-gradient(ellipse at 50% 130%, #fff, #E2CBAE, #BBA57B);
		box-shadow: none;
		border: none;
	}
</style>
