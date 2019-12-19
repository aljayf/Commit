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
    console.log('pushed todolist')
  },
  makeTask (state, payload) {
    state.task = payload
    console.log('set task payload')
  },
  addTask (state, payload) {
    // write to tasks object
    console.log('addTask Payload', payload)
    Vue.set(state.tasks, payload.taskId, payload.taskDetails)
  }

}
const actions = {
  addTodo ({ commit }, payload) {
    console.log('blah', payload)
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    let addedCategory = payload.category
    let addedStartDate = payload.startDate
    let addedEndDate = payload.endDate
    let addedTask = payload.task
    let addedGoal = payload.goal
    // let wholeTask = {
    //   category: addedCategory,
    //   startDate: addedStartDate,
    //   endDate: addedEndDate,
    //   task: addedTask,
    //   goal: addedGoal
    // }
    firebaseDb.ref('todoList/' + userId).set({
      // category: payload.category,
      // startDate: payload.startDate,
      // endDate: payload.endDate,
      // task: payload.task,
      // goal: payload.goal,
      // complete: false
    }, function (error) {
      if (error) {
        // The write failed...
        console.log('error.message: ', error.message)
      } else {
        // Data saved successfully!
        console.log('Task successfully added')
        console.log('yayLoad', payload)
        commit('makeTask', {
          category: addedCategory,
          startDate: addedStartDate,
          endDate: addedEndDate,
          task: addedTask,
          goal: addedGoal
        })
        // commit('addToTodoList', {
        //
        // })
      }
    })
  },
  firebaseGetTasks ({ commit, state }) {
    let firebaseAuth = Firebase.auth()
    let firebaseDb = Firebase.database()
    let userId = firebaseAuth.currentUser.uid
    console.log('firebaseGetTasks')
    firebaseDb.ref('todoList/' + userId).on('child_added', snapshot => {
      let taskDetails = snapshot.val()
      let taskId = snapshot.key
      console.log('getTask Snapshot Key', snapshot.key)
      console.log('taskDetails', taskDetails)
      console.log('taskId', taskId)
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
