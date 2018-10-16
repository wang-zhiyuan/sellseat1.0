<template>
	<div>
		<img :src="imgpath">
		<h3>影片简介</h3>
		<ul>
			<li>导演:{{director}}</li>
			<li>主演:<span v-for="data in actors">{{data.name + "|"}}</span></li>
			<li>{{synopsis}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import axios from "axios"
	export default{
		data(){
			return{
				imgpath:null,
				director:null,
				actors:null,
				synopsis:null
			}
		},
		mounted(){
			console.log(this.$route.params.wzyid)
			axios.get(`/v4/api/film/${this.$route.params.wzyid}?__t=1539614741461`).then((res)=>{
				console.log(res.data)
				this.imgpath=res.data.data.film.cover.origin
				this.director=res.data.data.film.director
				this.actors=res.data.data.film.actors
				this.synopsis=res.data.data.film.synopsis
				this.$store.commit("chagnetitle",res.data.data.film.name)
				console.log(res.data.data.film.cover.origin)
			})
		},
	}
</script>
<style type="text/css">
	img{
		width:100%;
	}
</style>