import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import movie from '../components/movie.vue'
import commingson from '../components/commingson.vue'
import nowplaying from '../components/nowplaying.vue'
import detail from '../components/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/home',
        component: home
    },
    {
    	path:'/movie',
    	component:movie,
    	children:[
    		{
    			path:'commingson',
    			component:commingson
    		},
    		{
    			path:"nowplaying",
    			component:nowplaying
    		},
    		{
    			path:"/",
    			redirect:"nowplaying"
    		}
    	]
    },
    {
        path:'/detail/:wzyid',
        component:detail
    },
    {
        path:"*",
        redirect:"/home"
    }

  ]
})
