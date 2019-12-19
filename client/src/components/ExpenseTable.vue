<template>
  <div>
    <q-table
      title="Expenses"
      :data=expenses
      :columns="columns"
      row-key="date"
      separator="cell"
    >
      <template v-slot:top-right="props">
        <q-btn label="Add Expense" color="primary" class="q-mb-md" @click="expenseModal = true"/>
      </template>
    </q-table>
    <q-dialog :value="expenseModal">
      <expense-modal v-on:expense-added="expenseAdded"></expense-modal>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ExpenseModal from './ExpenseModal'

export default {
  name: 'ExpenseTable',
  components: { ExpenseModal },
  data () {
    return {
      expenseModal: false,
      balance: null,
      columns: [
        {
          name: 'date',
          label: 'Date',
          align: 'left',
          field: 'date',
          sortable: true
        },
        {
          name: 'transactionDescription',
          label: 'Transaction',
          align: 'center',
          field: 'transactionDescription'
        },
        {
          name: 'money',
          label: 'Money',
          align: 'left',
          field: 'money'
        },
        {
          name: 'remainingBalance',
          label: 'Remaining Balance',
          align: 'left',
          field: 'remainingBalance'
        }
      ]
      // data: [
      //   {
      //     date: '2019/12/19',
      //     transaction: 'food',
      //     money: 12,
      //     balance: 200
      //   }
      // ]
    }
  },
  methods: {
    expenseAdded (value) {
      console.log('got that bitch back', value) // someValue
      this.expenseModal = value
    },
    ...mapActions({
      firebaseGetTasks: 'Expense/firebaseGetExpenses',
      firebaseStopGettingTasks: 'Expense/firebaseStopGettingTasks'
    })
  },
  computed: {
    ...mapState({
      expenses: 'Expense/expenses'
    }),
    ...mapGetters({
      expenses: 'Expense/expenses'
    })
  }
}
</script>

<style scoped>

</style>
