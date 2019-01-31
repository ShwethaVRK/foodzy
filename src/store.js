import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    	 foodlist: [
      {
        'id': 1,
        'name': 'Farm Pizza',
        'price': 200,
        'image': './images/pizza.jpg',
        'rating': 4.4,
        'veg': true
	    },
      {
        'id': 2,
        'name': 'Chicken Pizza',
        'price': 300,
        'image': './images/pizza2.jpeg',
        'rating': 4.8,
        'veg': false
      },
      {
        'id': 3,
        'name': 'Penne Pasta',
        'price': 150,
        'image': './images/pasta.jpg',
        'rating': 4,
        'veg': true
	    },
      {
        'id': 4,
        'name': 'Salami Pasta',
        'price': 200,
        'image': './images/pasta2.jpeg',
        'rating': 4,
        'veg': false
	   },
		 {
        'id': 5,
        'name': 'Chocolate Moose',
        'price': 170,
        'image': './images/choco.jpg',
        'rating': 3.4,
        'veg': true
      },
	  {
        'id': 6,
        'name': 'Veggie Wrap',
        'price': 120,
        'image': './images/wrap2.jpg',
        'rating': 3.1,
        'veg': true
	  },
      {
        'id': 7,
        'name': 'Chicken Wrap',
        'price': 160,
        'image': './images/wrap.jpeg',
        'rating': 4.1,
        'veg': false
	  },
	  {
        'id': 8,
        'name': 'Burger Combo',
        'price': 160,
        'image': './images/burger.jpg',
        'rating': 4.1,
        'veg': false
	  }
    ], //
    cartFoods: [],
    currentFood: {},
    showModal: true,
    showPopupCart: true
  },

  getters: {
    getAllFoods: state => state.foods,
    getFoodsInCart: state => state.cartFoods,
    getCurrentFood: state => state.currentFood,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart
  },

  mutations: {
    ADD_FOOD: (state, food) => {
      state.cartFoods.push(food)
    },
    REMOVE_FOOD: (state, index) => {
      state.cartFoods.splice(index, 1)
    },
    CURRENT_FOOD: (state, food) => {
      state.currentFood = food
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart
    }
  },

  actions: {
    addFood: (context, food) => {
      context.commit('ADD_FOOD', food)
    },
    removeFood: (context, index) => {
      context.commit('REMOVE_FOOD', index)
    },
    currentFood: (context, food) => {
      context.commit('CURRENT_FOOD', food)
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL')
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART')
    }
  }
})
