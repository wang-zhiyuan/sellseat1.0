<template>
	<div class="l"> 
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
	export default{
	}
</script>
<style type="text/css" lang="scss" scoped>
	div{
		position:fixed;
		top:50px;
		left:0;
		width:300px;
		background: black;
		color:white;
		height: 100%;
		z-index: 100;
		ul{
			list-style: none;
			background:black;
			li{
				padding:10px;
			}
		};
	};
	.l{
		float:left;
	}
</style>