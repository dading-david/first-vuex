<template>
  <div class="hello">
    <button @click='increase'>增加</button>
    <button @click='decrease'>减少</button>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapActions
  } from 'vuex' //引入vuex中的mapMutations方法，用来获取mutations中的方法;引入vuex中的mapActions方法，用来获取actions中的方法
  // import {
  //   INCREMENT,
  //   DECREMENT
  // } from '@/store/mutation-types'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ...mapMutations(['INCREMENT', 'DECREMENT']), // 拿到mutations中的INCREMENT方法和DECREMENT方法
      ...mapActions(['myIncrease', 'myDecrease']), //拿到actions中的myIncrease方法和myDecrease方法

      async increase() { // 在increase方法中调用INCREMENT方法
        //this.$store.commit('INCREMENT', 2) // mutations只能通过commit来调用
        this.INCREMENT(2) // 等价于this.$store.commit('INCREMENT')
        // this.$store.state.count++ // 虽然这样也能改变值，但是不推荐这样写（不能直接去改变state里面的状态，这样会丢失一些记录）
        //this.myIncrease() //调用actions中的myIncrease()方法
        // const product = await this.myIncrease({
        //   id: 123
        // });
        // console.log(product)
      },
      decrease() { //在decrease方法中调用INCREMENT方法
        //this.$store.commit('DECREMENT')
        this.DECREMENT() // 等价于this.$store.commit('DECREMENT')
        // this.$store.state.count--
        // this.myDecrease() //调用actions中的myDecrease()方法
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
