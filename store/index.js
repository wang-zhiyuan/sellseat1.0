import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

var store = new vuex.Store({
	state:{
		title:"卖座电影"
	},
	mutations:{
		chagnetitle(state,data){
			console.log(state)
			console.log(data)
			state.title = data
		}
	}
})
export default store