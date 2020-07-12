<template>
	<div class='header'>
		<img src="../assets/img/ic_logo.png" />
		<el-radio-group v-model="isCollapse" @change='getStorge'>
			<el-radio-button :label="true">中</el-radio-button>
			<el-radio-button :label="false">EN</el-radio-button>
		</el-radio-group>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				isCollapse:true,
			}
		},
		components: {
			
		},
		computed: {
			mylans() {
				return this.$store.getters.isLang
			}
		},
		methods: {
			getStorge(e){
				if(e){
					this.$store.dispatch('getLan','0')
					
				}else{
					this.$store.dispatch('getLan','1')
					
				}
				
			}
		},
	}
</script>

<style>
	.header{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 147px;
			padding-top: 82px;
		}
		.header img{
			width: 294px;
			height: 87px;
			margin-left: 73px;
		}
	.header .el-radio-group{
		margin-right: 56px;
		margin-top: 34px;
	}
		.header .el-radio-button{
			width: 108px;
			height: 60px;
		}
		.header .el-radio-button__inner{
			width: 100%;
			height: 60px;
			padding: 0;
			line-height: 60px;
			font-size: 28px;
		}
		.header .el-radio-button:last-child .el-radio-button__inner{
			border-radius:0 50px 50px 0 !important;
		}
		.header .el-radio-button:first-child .el-radio-button__inner{
			border-radius: 50px 0 0 50px;
		}
		.header .el-radio-button__orig-radio:checked+.el-radio-button__inner{
			background: #4d3a18;
			box-shadow:-1px 0 0 0 #4d3a18;
			border-color:#4d3a18 ;
		}
		.header .el-radio-button__inner:hover{
			color:#4d3a18;
		}
</style>
