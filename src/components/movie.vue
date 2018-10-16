<template>
	<div class="all">
		<router-link tag="div" class="l nowplaying" activeClass="markma" to="/movie/nowplaying">正在热映</router-link >
		<router-link tag="div" class="r commingson" activeClass="markma" to="/movie/commingson">即将上映</router-link >
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css" scoped lang="scss">
	.all{
		width:100%;
		height:40px;
	}
	.commingson,.nowplaying{
		width:50%;
		line-height: 40px;
		text-align: center;
		font-size: 18px;
	}
	.markma{
		border-bottom: 3px solid #f60;
	}

	
</style>