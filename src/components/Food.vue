<template>
<div class="food">
  <div class="food-box">
    <div class="food-image">
      <img :src="currentFood.image" alt="">
      <stars :rate="rated (currentFood.stars)" :totalReviews="currentFood.totalReviews"/>
    </div>
    <div class="food-info">
      <h2 class="food-title">{{ currentFood.name }}</h2>
      <span class="food-price">Rs {{ currentFood.price }}, 00</span>
      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addFoodToCart (currentFood)">
        Buy Now
      </btn>
      <btn btnColor="btn btn-large btn-info"
          @click.native="openModal ()">
        More Info
      </btn>
    </div>
    <modal>{{ currentFood.details }}</modal>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Btn from './Btn'
import stars from './Stars'
import modal from './Modal'

export default {
  name: 'Food',
  components: {
    Btn,
    stars,
    modal
  },

  computed: {
    ...mapGetters({
      currentFood: 'getCurrentFood'
    })
  },

  methods: {
    ...mapActions([
      'addFood',
      'showOrHiddenModal'
    ]),
    addFoodToCart (food) {
      this.addFood(food)
    },
    rated (rate) {
      return `${rate * 20}%`
    },
    openModal () {
      this.showOrHiddenModal()
    }
  }
}
</script>

<style scoped>
  .food-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .food-image {
    width: 300px;
  }

  .food-info {
    width: 400px;
    align-self: flex-start;
  }

  .food-title {
    font-weight: normal;
  }

  .food-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .food-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
