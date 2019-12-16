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
        <q-item v-for="todo in todoList" :key="todo.id" clickable @click="toolbar = true">
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
  <q-dialog v-model="toolbar">
    <task-modal v-bind:task="{ todo }"></task-modal>
    <!--<q-card style="width: 500px">-->
      <!--<q-toolbar>-->
        <!--<q-toolbar-title><span class="text-weight-bold">Task</span></q-toolbar-title>-->
        <!--<q-btn flat round dense icon="close" v-close-popup />-->
      <!--</q-toolbar>-->
      <!--<q-separator />-->
      <!--<q-card-section>-->
        <!--<q-form-->
          <!--@submit="onSubmit"-->
          <!--@reset="onReset"-->
          <!--class="q-gutter-md"-->
        <!--&gt;-->
          <!--<q-select-->
            <!--filled-->
            <!--v-model="category"-->
            <!--:options="options"-->
            <!--label="Category"-->
            <!--color="primary"-->
          <!--&gt;-->
            <!--<template v-slot:selected-item="scope">-->
              <!--<q-chip-->
                <!--removable-->
                <!--@remove="scope.removeAtIndex(scope.index)"-->
                <!--:tabindex="scope.tabindex"-->
                <!--color="white"-->
                <!--text-color="primary"-->
                <!--class="q-ma-none"-->
              <!--&gt;-->
                <!--<q-avatar color="primary" text-color="white" :icon="scope.opt.icon" />-->
                <!--{{ scope.opt.label }}-->
              <!--</q-chip>-->
            <!--</template>-->
          <!--</q-select>-->
          <!--<q-input-->
            <!--type="date"-->
            <!--filled-->
            <!--v-model="date"-->
            <!--label="Date"-->
          <!--/>-->
          <!--<q-input-->
            <!--filled-->
            <!--v-model="task"-->
            <!--label="Task"-->
          <!--/>-->
          <!--<q-input-->
            <!--filled-->
            <!--type="text"-->
            <!--v-model="goal"-->
            <!--label="Goal"-->
            <!--hint="Description"-->
          <!--/>-->
          <!--<div>-->
            <!--<q-btn label="Submit" type="submit" color="primary"/>-->
            <!--<q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />-->
          <!--</div>-->
        <!--</q-form>-->
      <!--</q-card-section>-->
    <!--</q-card>-->
  </q-dialog>
</div>
</template>

<script>
import TaskModal from './TaskModal'
export default {
  name: 'TaskCard',
  components: { TaskModal },
  data () {
    return {
      todoList: [{
        task: 'Run',
        goal: 'Burn 50kcal',
        date: null,
        category: {
          label: 'Fitness',
          value: 'fitness',
          icon: 'fitness_center'
        }
      }],
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
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Task Added'
      })
    },

    onReset () {
      this.task = null
      this.goal = null
      this.category = null
    }
  }
}
</script>

<style scoped>
  .my-card {
    width: 350px;
  }

</style>
