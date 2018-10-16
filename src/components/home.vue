<template>
	<div class="all">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="data in homelist">
		      	<img :src="data.cover.origin">
		      </div>
		    </div>
		</div>
		<ul>
			<li v-for="data in datalist">
				<img :src="data.cover.origin">
				<h3>{{data.name}}</h3>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import axios from "axios"
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.css"
	export default{
		data(){
			return{			
				datalist:[],
				homelist:[]

			}
		},
		mounted:function(){
			axios.get("/v4/api/film/now-playing?__t=1539502233416&page=1&count=5").then(res=>{
				this.datalist = res.data.data.films
				this.homelist = res.data.data.films
				this.$nextTick((res)=>{		
					var swiper = new Swiper('.swiper-container');
				})
			}).catch(err=>{
				console.log(err)
			})
			// axios.get("/v4/api/billboard/home?__t=1539580374013").then((res)=>{
			// 	this.homelist=res.data.data
			// 	console.log(res.data.data.billboards)
			// }),
		}
	}
</script>
<style type="text/css"  lang="scss">
	.all{
		width:100%;
		height:40px;
		div{
			width:100%;
			line-height: 40px;
			text-align: center;
			font-size: 18px

		}
		img{
			width:100%
		}

	}	
</style>
