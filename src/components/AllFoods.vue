<template>
<div class="all-foods">
 <listOfFoods :foods="foodlist"/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import listOfFoods from './ListOfFoods'

export default {
  name: 'AllFoods',
  components: {
    listOfFoods
  },
  computed: {
    ...mapGetters([
      'getAllFoods'
    ])
  },
  data(){
    return {
      foodlist: [
      {
        'id': 1,
        'name': 'Farm Pizza',
        'price': 200,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/pizza.jpg',
        'rating': 4.4,
        'veg': true
      },
      {
        'id': 2,
        'name': 'Chicken Pizza',
        'price': 300,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/pizza2.jpeg',
        'rating': 4.8,
        'veg': false
      },
      {
        'id': 3,
        'name': 'Penne Pasta',
        'price': 150,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/pasta.jpg',
        'rating': 4,
        'veg': true
      },
      {
        'id': 4,
        'name': 'Salami Pasta',
        'price': 200,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/pasta2.jpeg',
        'rating': 4,
        'veg': false
     },
     {
        'id': 5,
        'name': 'Chocolate Moose',
        'price': 170,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/choco.jpg',
        'rating': 3.4,
        'veg': true
      },
    {
        'id': 6,
        'name': 'Veggie Wrap',
        'price': 120,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/wrap2.jpg',
        'rating': 3.1,
        'veg': true
    },
      {
        'id': 7,
        'name': 'Chicken Wrap',
        'price': 160,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/wrap.jpeg',
        'rating': 4.1,
        'veg': false
    },
    {
        'id': 8,
        'name': 'Burger Combo',
        'price': 160,
        'image': 'https://brave-hodgkin-b336b7.netlify.com/images/burger.jpg',
        'rating': 4.1,
        'veg': false
    }
    ]
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

  .food-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
</style>
