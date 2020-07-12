<template>
	<div class="nbcs faths">
		<div class='pos'>
			<img :src="showPic" alt="" class='bigpp'>
			<img src="../assets/img/ic_back.png" alt="" class='nbr' @click="goBack()">
		</div>
			
	</div>
</template>

<script>
	import bbss from '@/getip.js'
	export default{
		data() {
			return {
				key:'',
				showPic:''
			}
		},
		mounted(){
			console.log(this.$route)
		},
		watch: {
			lanss:{
				handler(news,old){
					// bbss.bbss(ip=>{
					// 	this.getGif({isCh:news.isCh,wCode:news.wCode,systemFlag:ip})
					// })
					this.getGif({isCh:news.isCh,wCode:news.wCode})
				},
				immediate:true,
				deep:true
			}
		},
		computed: {
			lanss() {
				return {isCh:this.$store.state.langues,wCode:this.$route.query.wcode}
			}
		},
		methods: {
			getGif(params) {
				this.$http.get(this.baseUrl+'/mobile/login/guiderDetail',{params:params}).then(res=>{
					console.log(res)
					this.showPic=res.data.rows[0].wNaviImg
				}).catch(err=>{
					console.log(err)
				})
			},
			goBack(){
				this.$router.push(this.$route.query.redirect)
			}
		},
	}
</script>

<style scoped="scoped">
	.nbcs{
		width: 1080px;
	}
	.bigpp{
		display: block;
		width: 80%;
		height: 1620px;
		margin: 0 auto;
		border-radius: 17px;
		box-shadow: 14px 14px 5px #888888;
	}
	.pos{
		position: relative;
	}
	.nbr{
		position: absolute;
		left: 10px;
		bottom: 0;
		width: 99px;
		height: 102px;
		cursor: pointer;
	}
</style>
