import { INCREMENT, DECREMENT } from './mutation-types'
const app = {
  // 用来存放全局状态
  state: {
    count: 0
  },
  //对state中的状态的一个包装/加工
  getters: {
    myCount(state) {
      return `current count is ${state.count}`
    }
  },
  //通过mutations访问state中的全局状态,一般简单的状态改变逻辑写在mutations里面
  mutations: {
    //count+1
    //state是对上面state的应用
    [INCREMENT](state, n) {//传入参数
      state.count += n
    },
    //count-1
    [DECREMENT](state) {
      state.count -= 1
    }
  },
  //存放单纯的业务逻辑,一般复杂的业务逻辑卸载actions里面,但是跟界面相关的一些操作一般不放在actions里面，而是在组件里面做相关的一些页面的操作
  actions: {//我们在组件中会避免直接使用对mutations的调用，而是通过actions来改变状态值
    async myIncrease(context, obj) {//通过传进来的context参数去调用mutations中的INCREMENT方法
      console.log('>>>>>>>>>', obj)
      context.commit('INCREMENT', 2)//点击增加，每次增加2

      const products = [1, 2, 3, 4, 5]

      return products
    },
    myDecrease(context) {//通过传进来的context参数去调用mutations中的DECREMENT方法
      context.commit('DECREMENT')
    }
  }
}

export default app;