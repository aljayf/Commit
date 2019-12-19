import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from './auth-store'
import Todo from './todo-store'
import Expense from './expense-store'
// import store from './../store'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      Authentication,
      Todo,
      Expense
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
