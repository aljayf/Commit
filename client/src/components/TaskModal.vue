<template>
  <q-card style="width: 500px">
    <q-toolbar>
      <q-toolbar-title><span class="text-weight-bold">Task</span></q-toolbar-title>
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-separator />
    <q-card-section>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-select
          filled
          v-model="category"
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
              <q-avatar color="primary" text-color="white" :icon="scope.opt.icon" />
              {{ scope.opt.label }}
            </q-chip>
          </template>
        </q-select>
        <q-input
          type="date"
          filled
          v-model="date"
          label="Date"
        />
        <q-input
          filled
          v-model="task"
          label="Task"
        />
        <q-input
          filled
          type="text"
          v-model="goal"
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
export default {
  name: 'TaskModal',
  props: {
    todo: Object
  }
}
</script>

<style scoped>

</style>
