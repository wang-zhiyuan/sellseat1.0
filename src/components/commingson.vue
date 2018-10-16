<template>
  <div>
   <dl v-for="data in datalist">
   	<dt class="l"><img :src="data.poster.origin"></dt>
   	<dd class="r">
   		<h4>{{data.name}}</h4>
   		<p>{{data.intro}}</p>
   		<p></p>
   	</dd>
   </dl>
  </div>
</template>
<script type="text/javascript">
	import axios from "axios"
	export default {
		data(){
			return {
				datalist:[]
			}
		},
		mounted(){
			axios.get("/v4/api/film/coming-soon?page=3&count=7").then((res)=>{
				this.datalist = res.data.data.films
			}).catch((err)=>{
				console.log(err)
			})
		}
	}
</script>
<style type="text/css" scoped lang="scss">	
dl{
	display: inline-block;
	width:100%;
	padding: 20px 0;
}
dt{
	width:30%
}
img{
	width:100%
}
dd{
	box-sizing: border-box;
	width:70%;
	padding:10px;
	h4, p{
		height:30px;
		line-height:30px 
	}
}
</style>