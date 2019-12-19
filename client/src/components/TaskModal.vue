<template>
  <q-card style="width: 500px">
    <q-toolbar>
      <q-toolbar-title><span class="text-weight-bold">Task</span></q-toolbar-title>
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-separator />
    <q-card-section>
      <q-form
        @submit="addTask"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-select
          outlined
          filled
          v-model="taskObject.category"
          :options="options"
          label="Category"
          color="primary"
        >
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              color="white"
              text-color="primary"
              class="q-ma-none"
            >
              <q-avatar color="primary" text-color="white" :icon="scope.opt.icon"/>
              {{ scope.opt.label }}
            </q-chip>
          </template>
        </q-select>
        <div class="row">
          <q-input outlined
            type="date"
            filled
            v-model="taskObject.startDate"
            label="Start Date"
            class="col-6"
                   style="padding-right: 5px"
          />
          <q-input outlined
            type="date"
            filled
            v-model="taskObject.endDate"
            label="End Date"
            class="col-6"
                   style="padding-left: 5px"
          />
        </div>
        <q-input
          outlined
          filled
          v-model="taskObject.task"
          label="Task"
        />
        <q-input
          outlined
          filled
          type="text"
          v-model="taskObject.goal"
          label="Goal"
          hint="Description"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TaskModal',
  props: {
    todo: Object
  },
  data () {
    return {
      taskObject: {
        startDate: null,
        endDate: null,
        task: null,
        goal: null,
        category: null
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
    ...mapActions({
      addTodo: 'Todo/addTodo'
    }),
    addTask () {
      this.addTodo(this.taskObject)
      // this.todoList.push({
      //   todo: this.taskObject
      // })
      this.onClickButton()
    },
    onReset () {
      this.taskObject.startDate = null
      this.taskObject.endDate = null
      this.taskObject.task = null
      this.taskObject.goal = null
      this.taskObject.category = null
    },
    onClickButton (event) {
      this.$emit('task-added', false)
      console.log('event', event)
    }
  }
}
</script>

<style scoped>

</style>
