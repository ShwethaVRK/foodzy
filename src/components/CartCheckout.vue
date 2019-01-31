<template>
<div class="cart-checkout">
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <li v-for="food in foodlist" :key="food" class="checkout-food">
        <img :src="food.image" alt="" class="food-image">
        <h3 class="food-name">{{ food.name }}</h3>
        <span class="food-price">Rs {{ food.price }}.00 </span>
        <button class="food-remove" @click="remove(food)">X</button>
      </li>
      </transition-group>
    </ul>
    <div v-if="!hasFood()" class="checkout-message">
      <h3>No Foods List...</h3>
      <router-link to="./">Back to list of Foods List</router-link>
    </div>
    <h3 class="total" v-if="hasFood()">
      Total: Rs {{ totalPrice() }}.00
    </h3>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CartCheckout',
  
  data() {
    return {
            foods: ['id', 'name', 'price' , 'image' , 'rating' , 'veg']
        };
  },

  computed: {
    ...mapGetters([
      'getFoodsInCart'
    ])
  },

  methods: {
    ...mapActions([
      'removeFood'
    ]),
    hasFood() {
      return this.getFoodsInCart.length > 0
    },
    totalPrice() {
      return this.getFoodsInCart.reduce((current, next) =>
        current + next.price, 0)
    },
    remove(index) {
      this.removeFood(index)
  }
}
}
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-food {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-food * {
    place-self: center;
  }
  .food-image {
    grid-column: 1/2;
    width: 50%;
  }

  .food-name {
    box-sizing: border-box;
  }

  .food-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .food-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
