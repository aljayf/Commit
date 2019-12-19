<template>
<div>
  <q-card flat bordered class="my-card bg-grey-1">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col-6">
          <div class="text-h6">Todo</div>
        </div>

        <div class="col-6" align="right">
          <q-btn round color="primary" icon="add" @click="toolbar = true"/>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-list>
        <q-item v-for="(todo, key) in tasks" :key="key" clickable @click="toolbar = true">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" :icon="todo.category.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ todo.task }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
  <q-dialog :value="toolbar">
    <task-modal v-on:task-added="taskAdded"></task-modal>
  </q-dialog>
</div>
</template>

<script>
import TaskModal from './TaskModal'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'TaskCard',
  components: { TaskModal },
  data () {
    return {
      // todoList: [{
      //   task: 'Run',
      //   goal: 'Burn 50kcal',
      //   date: null,
      //   category: {
      //     label: 'Fitness',
      //     value: 'fitness',
      //     icon: 'fitness_center'
      //   }
      // }],
      toolbar: false,
      task: null,
      goal: null,
      date: null,
      category: {
        label: null,
        value: null,
        icon: null
      },
      options: [
        {
          label: 'Homework',
          value: 'homework',
          icon: 'assignment'
        },
        {
          label: 'Chore',
          value: 'chore',
          icon: 'check_circle'
        },
        {
          label: 'Fitness',
          value: 'fitness',
          icon: 'fitness_center'
        },
        {
          label: 'Work',
          value: 'work',
          icon: 'build'
        },
        {
          label: 'Miscellaneous',
          value: 'miscellaneous',
          icon: 'grade'
        }
      ]
    }
  },
  methods: {
    taskAdded (value) {
      console.log('got that bitch back', value) // someValue
      this.toolbar = value
    },
    ...mapActions({
      firebaseGetTasks: 'Todo/firebaseGetTasks',
      firebaseStopGettingTasks: 'Todo/firebaseStopGettingTasks'
    })
  },
  computed: {
    ...mapState({
      tasks: 'Todo/tasks'
    }),
    ...mapGetters({
      tasks: 'Todo/tasks'
    })
  },
  destroyed () {
    this.firebaseStopGettingTasks()
  }
}
</script>

<style scoped>
  .my-card {
    width: 350px;
  }

</style>
