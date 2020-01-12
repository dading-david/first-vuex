import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import user from './user'

//让Vuex在vue中生效
Vue.use(Vuex)
//创建一个store单例对象
const store = new Vuex.Store({

  modules: {
    //将app和user模块组装到index.js中，这样就可以按具体的业务逻辑来归类状态，避免一个文件里面管理很多的状态
    app, user
  }

})

//将store导出（输出）
export default store