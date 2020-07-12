<template>
	<div class="footer">
		<router-link v-for='itm in myFooter' :to="itm.path">
			<img v-if="getPageNums==itm.pagenumss" :src="itm.actSrc" alt="">
			<img v-else="getPageNums==itm.pagenumss" :src="itm.src" alt="">
			<span class='pageName'>{{itm.pageNume}}</span>
		</router-link>
		
	</div>
</template>

<script>
	export default{
		props:['getPageNums'],
		data(){
			return {
				getPageNum:'',
				showPic:true,
				ceshi:'1',
			}
		},
		computed: {
			myFooter() {
				return this.$store.getters.footerGet
			}
		},
		components: {
			
		},
		created(){
			
		}
	}
</script>

<style scoped="scoped">
	.footer{
		display: flex;
		flex-direction: row;
		width: 1000px;
		height: 200px;
		margin: 0 auto;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 54px;
	}
	.footer a{
		width: 244px;
		height: 139px;
		position: relative;
	}
	.footer span{
		position: absolute;
		left:50%;
		transform: translateX(-50%);
		top: 75px;
		font-size: 36px;
		font-weight: bold;
		color: white;
	}
</style>
