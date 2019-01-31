<template>
<div class="main-menu">  
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">AllFoods</router-link>
        </li>
        <li class="link">
        <router-link to="/food-details">Food</router-link>
        </li>
        <li class="link">
        <router-link to="/checkout">Checkout</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>

  <!--<div class="row">
    <img v-for="img in images" v-bind:src="img"/>
  </div>-->
</div>
</template>

<script>
export default {
  name: 'MainMenu',
    mounted() {
      console.log('Component mounted, ')
  },
    data() {
      return {
        images: ['./assets/bg.jpeg',
        ]
      }
    }

}

</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: lightcoral;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav {
    width: 600px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>
