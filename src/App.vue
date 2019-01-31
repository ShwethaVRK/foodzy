<template>
  <div id="app" class="container">
    <img alt="Foodzy logo" class="center" src="./assets/logo.png">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click.native="showPopupCart()">
         Cart
        <!-- <span class="btn-circle" v-if="hasFood()">
           {{ getFoodsInCart.length }}
        </span> -->
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="getPopupCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MainMenu from './components/MainMenu.vue'
import Btn from './components/Btn.vue'
import Popupcart from './components/Popupcart.vue'
import MaskCustom from './components/MaskCustom.vue'

export default {
  name: 'App',
  components: {
    MainMenu,
    Btn,
    Popupcart,
    MaskCustom
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart'
    ]),
    hasProduct () {
      return this.getFoodsInCart.length > 0
    },
    showPopupCart () {
      this.showOrHiddenPopupCart()
    }
  },
  computed: {
    ...mapGetters([
      'getFoodsInCart',
      'getPopupCart'
    ])
  }
}
</script>

<style>
  @import './assets/style.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
