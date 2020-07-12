<template>
	<div class="faths">
		<img src="../assets/img/member.png" alt="">
	</div>
</template>

<script>
	export default{
		data() {
			return {
				key: 'value'
			}
		},
		created(){
			this.$emit('getSon','4')
		}
	}
</script>

<style scoped="scoped">
	img{
		display: block;
		margin: 0 auto;
		width: 896px;
		height:1685px;
		box-shadow: 14px 14px 5px #888888;
		border-radius: 17px;
	}
</style>
