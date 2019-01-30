<template>
<div class="main-menu">
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">AllFoods</router-link>
        </li>
        <!--<li class="link">
          <router-link to="/smartphones">Smartphones</router-link>
        </li>
        <li class="link">
          <router-link to="/notebooks">Notebooks</router-link>
        </li>
        -->
      </ul>
    </nav>
    <slot></slot>
  </header>
</div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
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
