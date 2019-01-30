<template>
 <listOfFoods :products="getAllFood"/>
</template>

<script>
import { mapGetters } from 'vuex'
import listOfFoods from './ListOfFoods'

export default {
  components: {
    listOfFoods
  },
  computed: {
    ...mapGetters([
      'getAllFood'
    ])
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

  .food-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
</style>
