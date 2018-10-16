<template>
	<div>
		<span class="l"><slot name="index"></slot>{{$store.state.title}}</span>
		<span class="r">迪丽热巴的卧室<slot name="person"></slot></span>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{

		}
	}
</script>
<style type="text/css" scoped>
	div{
		width:100%;
		height:50px;
		line-height: 50px;
		position: fixed;
		top:0;
		background: #000;
		color: #fff;
		z-index: 10
	}
</style>