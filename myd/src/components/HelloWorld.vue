<template>
	<div class="hello">
		
		<Header></Header>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive" @getSon='sendNum'></router-view>
		</keep-alive>
			<router-view v-if="!$route.meta.keepAlive" @getSon='sendNum'></router-view>
		
		<Footer :getPageNums='sonNum'></Footer>
	</div>
</template>

<script>
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				sonNum:"",
			}
		},
		props:['showMe'],
		components: {
			Header,Footer
		},
		methods: {
			sendNum(num) {
				this.sonNum=num
			},
			
		},
		mounted(){
		
			}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.hello {
			width: 1080px;
			/* padding: 82px 0 54px 0; */
			margin: 0 auto;
			background: url(../assets/img/bg.png) no-repeat;
			background-size:100% 100%;
			height: 100%;
			position: relative;
		}
		
</style>
