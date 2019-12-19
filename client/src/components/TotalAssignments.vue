<template>
<div style="padding: 20px">
  <q-card class="q-my-lg q-card--bordered q-card--flat no-shadow">
    <q-card-section class="text-grey">
      <div class="text-subtitle2">Task Completed</div>
    </q-card-section>
    <q-separator dark inset />
    <q-card-section>
      {{ completed.completedAmount}}
    </q-card-section>
  </q-card>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'TotalAssignments',
  data () {
    return {
      // balance: null
    }
  },
  computed: {
    ...mapState({
      completed: 'Todo/completed'
    }),
    ...mapGetters({
      completed: 'Todo/completed'
    })
  }
}
</script>

<style scoped>

</style>
