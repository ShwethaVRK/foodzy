<template>
<div class="list-of-food">
  <ul class="listOfFoods">
    <li v-for="(food, index) in foods" :key="index" class="food">
      <img :src="food.image"  width="100%" alt="">
      <router-link to="/food-details">
        <h2 class="food-name"
            @click="addCurrentFood(food)">
          {{ food.name }}
        </h2>
      </router-link>
      <div class="food-price">
        <span>Rs {{ food.price }}, 00</span>
        <span>10 x {{ Math.round(food.price / 10) }}, 00 </span>
      </div>

      <btn btnColor="btn btn-large btn-sucess"
          :cartIcon="true"
          @click.native="addFoodToCart(food)">
        Add to cart
      </btn>
    </li>
  </ul>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Btn from './Btn'

export default {
  name: 'ListOfFood',
  props: ['foods'],

  components: {
    Btn
  },
  mounted(){
    console.log(this.foods)
  },

  methods: {
    ...mapActions([
      'addFood',
      'currentFood'
    ]),

    addFoodToCart (food) {
      this.addFood(food)
    },
    addCurrentFood (food) {
      this.currentFood(food)
    }
  }
}
</script>

<style scoped>
  .listOfFoods {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .food {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .food-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .food-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .food-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

</style>
