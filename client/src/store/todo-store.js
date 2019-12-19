// import Firebase from 'firebase'
import 'firebase/database'
import Firebase from 'firebase'
import Vue from 'vue'

const state = {
  todoList: [],
  task: {},
  tasks: {},
  completed: {}
}
const mutations = {
  addToTodoList (state, payload) {
    Vue.set(state.tasks, payload.taskId, payload.taskDetails)
    // console.log('pushed todolist')
  },
  makeTask (state, payload) {
    state.task = payload
    // console.log('set task payload')
  },
  addTask (state, payload) {
    // write to tasks object
    // console.log('addTask Payload', payload)
    Vue.set(state.tasks, payload.taskId, payload.taskDetails)
  }

}
const actions = {
  addTodo ({ commit }, payload) {
    // console.log('blah', payload)
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    firebaseDb.ref('todoList/' + userId).push({
      category: payload.category,
      taskDate: payload.taskDate,
      task: payload.task,
      goal: payload.goal
    }, function (error) {
      if (error) {
        // The write failed...
        console.log('error.message: ', error.message)
      } else {
        // Data saved successfully!
        // console.log('Task successfully added')
        // console.log('yayLoad', payload)
      }
    })
  },
  editTodo ({ commit }, payload) {
    console.log('*** EDIT TODO STORE ***', payload)
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    firebaseDb.ref('todoList/' + userId).update({
      category: payload.category,
      taskDate: payload.taskDate,
      task: payload.task,
      goal: payload.goal
    }).catch(error => {
      console.log('error.message: ', error.message)
    })
  },
  firebaseGetTasks ({ commit, state }) {
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    // console.log('firebaseGetTasks')
    firebaseDb.ref('todoList/' + userId).on('child_added', snapshot => {
      let taskDetails = snapshot.val()
      let taskId = snapshot.key
      // console.log('getTask Snapshot Key', snapshot.key)
      // console.log('taskDetails', taskDetails)
      // console.log('taskId', taskId)
      commit('addTask', {
        taskId,
        taskDetails
      })
    })
  },
  firebaseStopGettingTasks () {
    console.log('firebaseStopGettingTasks')
  }
}
const getters = {
  tasks: state => {
    return state.tasks
  },
  task: state => {
    console.log('state.tasks', state.tasks)
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
