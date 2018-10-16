<template>
  <div>
  	<ul>
  		<li v-for="data in datalist" @click="handelclick(data.id)">
  			<img :src="data.cover.origin">
  			<h3>{{data.name}}</h3>
  		</li>
  	</ul>
  </div>
</template>
<script type="text/javascript">
	import axios from "axios" 
	import router from "../router"
	export default {
		data(){
			return {
				datalist:[]
			}
		},
		mounted :function(){
			axios.get("/v4/api/film/now-playing?page=1&count=7").then((res)=>{
				this.datalist=res.data.data.films
				// console.log(res.data.data.films)
			}).catch((err)=>{
				console.log(err)
			})
		},
		methods:{
			handelclick(id){
				console.log(id)
				router.push(`/detail/${id}`)
			}
		}
	}
</script>
<style type="text/css" scoped lang="scss">
	div{
		border:0;
		width:100%
	}
	img{
		width:100%
	}

</style>