import Vue from 'vue'
import Router from 'vue-router'
import AllFoods from './components/AllFoods.vue'
import Food from './components/Food.vue'
import CartCheckout from './components/CartCheckout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'All Foods',
      component: AllFoods
    },
    {
      path: '/food-details',
      name: 'Food',
      component: Food
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout
    }
  ]
})
