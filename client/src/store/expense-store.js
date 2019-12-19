// import Firebase from 'firebase'
import 'firebase/database'
import Firebase from 'firebase'
import Vue from 'vue'

const state = {
  balance: {},
  expenses: [],
  expense: {}
}
const mutations = {
  setbalance (state, payload) {
    state.balance = payload.remainingBalance
    console.log('set balance payload', payload)
  },
  makeExpense (state, payload) {
    state.expense = payload
    console.log('set expense payload')
  },
  addExpense (state, payload) {
    // write to expenses object
    console.log('addExpense Payload', payload)
    Vue.set(state.expenses, payload.expenseId, payload.expensesDetails)
    state.expenses.push(payload.expensesDetails)
  }
}
const actions = {
  updateBugdet ({ commit }, payload) {
    console.log('Update balance action')
    // commit('setbalance', {
    //   balance: payload.money + balance
    // })
  },
  addExpenseItem ({ commit, state, dispatch }, payload) {
    console.log('adding expense', payload)
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    let previousbalance = parseInt(state.balance.remainingBalance, 10)
    let newRemainingBalance = previousbalance + parseInt(payload.money)
    firebaseDb.ref('expenses/' + userId).push({
      date: payload.date,
      transactionDescription: payload.transactionDescription,
      money: payload.money,
      remainingBalance: newRemainingBalance
    }, function (error) {
      if (error) {
        // The write failed...
        console.log('error.message: ', error.message)
      } else {
        // Data saved successfully!
        console.log('Task successfully added')
        console.log('yayLoad', payload)
        commit('makeExpense', {
          date: payload.date,
          transactionDescription: payload.transactionDescription,
          money: payload.money
        })
      }
    })
    firebaseDb.ref('balance/' + userId).set({
      remainingBalance: newRemainingBalance
    }).catch(error => {
      console.log('error.message: ', error.message)
    })
    dispatch('firebaseGetbalance', {
      userId: userId
    })
  },
  firebaseGetExpenses ({ commit, state }) {
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    firebaseDb.ref('expenses/' + userId).on('child_added', snapshot => {
      let expensesDetails = snapshot.val()
      let expenseId = snapshot.key
      console.log('getTask Snapshot Key', snapshot.key)
      console.log('expensesDetails', expensesDetails)
      console.log('expenseId', expenseId)
      commit('addExpense', {
        expenseId,
        expensesDetails
      })
    })
  },
  firebaseStopGettingExpenses () {
    console.log('firebaseStopGettingExpenses')
  },
  firebaseGetbalance ({ commit }) {
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    firebaseDb.ref('balance/' + userId).once('value', snapshot => {
      let remainingBalance = snapshot.val()
      let balanceId = snapshot.key
      console.log('getBalance Snapshot Key', snapshot.key)
      console.log('remainingBalance', remainingBalance)
      console.log('balanceId', balanceId)
      commit('setbalance', {
        balanceId,
        remainingBalance
      })
    })
  }
}
const getters = {
  balance: state => {
    console.log('getters state.balance', state.balance)
    return state.balance
  },
  expenses: state => {
    console.log('getters state.expenses', state.expenses)
    return state.expenses
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
