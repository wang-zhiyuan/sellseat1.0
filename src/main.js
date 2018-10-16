import Vue from "vue"
import app from "./App.vue"
import router from "./router"
import store from "../store"
new Vue({
	el:"#app",
	router,
	store,
	components:{
		app
	},
	template:`
		<app></app>
	`
})
