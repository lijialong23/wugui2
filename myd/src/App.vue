<template>
  <div id="app">
   <HelloWorld></HelloWorld>
  </div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
	data() {
		return {
			key: ''
		}
	},
	components: {
		HelloWorld,
	},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
 *{
		margin: 0;
		padding: 0;
	}
	.el-loading-spinner i{
		font-size: 34px;
		color: white;
		}
		.el-loading-spinner .el-loading-text{
			font-size: 34px;
			color: white;
		}
</style>
