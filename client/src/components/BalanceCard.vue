<template>
  <div style="padding: 20px">
    <q-card class="q-my-lg q-card--bordered q-card--flat no-shadow">
      <q-card-section class="text-grey">
        <div class="text-subtitle2">balance Left</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        ${{ balance.remainingBalance }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Balance',
  data () {
    return {
      // balance: null
    }
  },
  computed: {
    ...mapState({
      balance: 'Expense/balance'
    }),
    ...mapGetters({
      balance: 'Expense/balance'
    })
  }
}
</script>

<style scoped>

</style>
