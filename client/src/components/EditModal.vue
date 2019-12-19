<template>
  <q-card style="width: 500px">
    <q-toolbar>
      <q-toolbar-title><span class="text-weight-bold">Task</span></q-toolbar-title>
      <q-btn flat round dense icon="close" @click="closeTask" />
    </q-toolbar>
    <q-separator />
    <q-card-section>
      <q-form
        @submit="editTask"
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
        <q-input outlined
                 type="date"
                 filled
                 v-model="taskObject.taskDate"
                 label="Start Date"
        />
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
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'EditModal',
  props: {
    id: String,
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      taskObject: {
        taskDate: this.task.taskDate,
        task: this.task.task,
        goal: this.task.goal,
        category: this.task.category
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
      editTodo: 'Todo/editTodo'
    }),
    editTask () {
      console.log('*** EDIT TASK', this.taskObject)

      this.editTodo(this.taskObject)
      // this.todoList.push({
      //   todo: this.taskObject
      // })
      this.onClickButton()
    },
    closeTask () {
      this.closeModal()
    },
    onReset () {
      this.taskObject.taskDate = null
      this.taskObject.task = null
      this.taskObject.goal = null
      this.taskObject.category = null
    },
    onClickButton (event) {
      this.$emit('edit-task', false)
      console.log('event', event)
    },
    closeModal (event) {
      this.$emit('edit-task', false)
      console.log('event', event)
    }
  },
  computed: {
    ...mapState({
      tasks: 'Todo/task'
    }),
    ...mapGetters({
      tasks: 'Todo/task'
    })
  }
}
</script>

<style scoped>

</style>
