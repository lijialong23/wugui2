<template>
	<div class="fathss">
		<img src="../assets/img/ic_back.png" alt="" class='nbr' @click="goBack()">
		<div class='pre_btns'>
			<img v-if="showBig" src="../assets/img/ic_previouss.png" alt="" @click="setPre()">
			<img v-else="showBig" src="../assets/img/ic_previous.png" alt="" @click="setPre()">
		</div>
		<div class='next_btns'>
			<img v-if="showBigs" src="../assets/img/ic_next.png" alt="" @click="setNext()">
			<img v-else="showBigs" src="../assets/img/ic_nexts.png" alt="" @click="setNext()">
		</div>
		<el-carousel indicator-position="none" :autoplay='falses' :loop='falses' arrow="never" @change='cardId' ref='carousel'>
			<el-carousel-item v-for='(itm,index) in arr'>
				<img class='banTop' :src="itm.wlogo" alt="">
				<div>
					<h2 class='banTit'>{{itm.wname}}</h2>
					<p class='banCont'>{{itm.wcontent}}</p>
					<div class='banBots'>
						<img src="../assets/img/ic_map.png" class="mapss" alt="" v-if="tub">
						<p>
						<span class="firs" v-if="getBot">{{getBot}}</span>
						<span v-if="getBot">|</span>
						<span class='mids' v-if="mylists.wFloor">{{mylists.wFloor}}</span>
						<span v-if="mylists.wFloor">|</span>
						<span class='lats' v-if="mylists.firstLetter">{{mylists.firstLetter}}</span>
	
					</p>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import bbss from '@/getip.js'
	export default {
		data() {
			return {
				key: '详情页',
				showBig: true,
				showBigs: true,
				mybar: 0,
				arr: [],
				falses: false,
				tfalse: false,
				lefone: '',
				barr:['工艺','古玩','文创','美术','服务配套','珠宝','综合','无'],
				namess:'',
				mylists:{}
			}
		},
		mounted() {
			this.mylists=JSON.parse(this.$route.query.botList)
			if(this.arr.length==1){
				this.showBig=true
				this.showBigs=false
			}
		},
		watch:{
			choseLn:{
				handler(news,old){
					bbss.bbss(ip=>{
						this.getImg({isCh:news,address:this.$route.query.wcode,systemFlag:ip})
					})
					
				},
				immediate:true,
				deep:true
			}
		},
		methods: {
			getImg(params){
				this.$http.get(this.baseUrl+'/mobile/login/floorShop',{params:params}).then(res=>{
					this.arr=res.data.rows
				}).catch(err=>{
					console.log(err)
				})
			},
			goBack() {
				this.$router.push(this.$route.query.redirect)
			},
			setNext(index) {
				if (this.mybar == this.arr.length - 1) {} else {
					this.$refs.carousel.next()
				}
			},
			setPre() {
				if (this.mybar == 0) {} else {
					this.$refs.carousel.prev()
				}
			},
			cardId(e) {
				this.mybar = e
				if (e == 0) {
					this.showBig = true

				} else {
					this.showBig = false
				}

				if (e == this.arr.length - 1) {
					this.showBigs = false
				} else {
					this.showBigs = true
				}
			},


		},
		
		computed: {
			choseLn(){
				return this.$store.state.langues
			},
			tub(){
				if(this.mylists.wType || this.mylists.firstLetter || this.mylists.wFloor){
					return 1
				}else{
					return 0
				}
			},
			getBot(){
				let qList=this.mylists.wType
				if(qList){
					return this.namess=this.barr[qList]
				}
			}
		},

	}
</script>

<style>
	.nbr {
		position: absolute;
		left: 72px;
		bottom: 0;
		width: 99px;
		height: 102px;
		cursor: pointer;
	}

	.mapss {
		width: 33px;
		height: 36px;
	}

	.fathss {
		position: relative;
	}

	.next_btns,
	.pre_btns {
		position: absolute;
		right: 0;
		top: 47%;
		z-index: 10000000;
		cursor: pointer;
	}

	.pre_btns {
		left: -853px;
		top: 46%;
	}

	.next_btns {
		right: 84px;
		top: 46%;
	}

	.el-carousel__arrow--right {
		display: block !important;
	}

	.el-carousel__arrow--left {
		display: block !important;
	}

	.banBots {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0 auto;
		font-size: 26px;
		color: #C6AA76;
		position: absolute;
		left: 50%;
		bottom: 75px;
		transform: translateX(-50%);
	}

	.banBots .mids {
		padding: 0 26px;
	}

	.banBots .lats {
		padding-left: 26px;
	}

	.banBots .firs {
		padding: 0 26px 0 45px;
	}

	.fathss .el-carousel__container {
		height: 1685px;
		width: 720px;
		background: white;
		border-radius: 17px;
		margin: 0 auto;
		box-shadow: 14px 14px 5px #888888;
	}

	.fathss .el-carousel--horizontal {
		box-shadow: 14px 14px 5px #888888;
		border-radius: 17px;
		overflow-y: auto;

		width: 720px;
		margin: 0 auto;
	}

	.banTit {
		font-size: 52px;
		color: #070002;
		margin-bottom: 60px;
		margin-top: 96px;
	}

	.banTop {
		width: 509px;
		height: 295px;
		margin-top: 55px;
	}

	.banCont {
		height: 320px;
		width: 596px;
		margin: 0 auto;
		font-size: 22px;
		line-height: 32px;
		color: #595A5A;
		text-align: left;
	}
</style>
