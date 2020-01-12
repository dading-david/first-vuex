<template>
  <div id="app">
    <!-- 获取computed中的count的值 -->
    <h1>{{count}}</h1>
    <p>{{myCount}}</p>
    <router-view />
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'; //引入mapState方法，用来获取store中state中的状态,引入mapGetter方法，用来获取store中的getters方法
  export default {
    name: 'App',
    computed: {
      ...mapState(['count']), //相当于get方法获取state中的count状态
      ...mapGetters(['myCount']) //相当于get方法获取getters中的myCount方法
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
