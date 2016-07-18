import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
	'/page/:pageNum': {
		name: 'page',
		component: {}
	}
})
router.redirect({
	'/': '/page/1'
})
router.beforeEach((transition) => {
  if (transition.to.path !== '/page/0') {
    transition.next()
  } else {
    transition.abort()
  }
})

router.start(App, 'app')
new Vue({
	el: 'body',
	components: {
		App
	}
})