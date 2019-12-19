<template>
  <q-card style="width: 500px">
    <q-toolbar>
      <q-toolbar-title><span class="text-weight-bold">Add Expense</span></q-toolbar-title>
      <q-btn flat round dense icon="close" @click="closeExpenseModal" />
    </q-toolbar>
    <q-separator />
    <q-card-section>
      <q-form
        @submit="submitExpense"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input outlined
                 type="date"
                 filled
                 v-model="expenseObject.date"
                 label="Date"
        />
        <q-input
          outlined
          filled
          v-model="expenseObject.transactionDescription"
          label="Transaction"
        />
        <q-input
          outlined
          filled
          type="number"
          v-model="expenseObject.money"
          label="Amount"
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
  name: 'ExpenseModal',
  props: {
    todo: Object
  },
  data () {
    return {
      expenseObject: {
        date: null,
        transactionDescription: null,
        money: null
      }
    }
  },
  methods: {
    ...mapActions({
      addExpenseItem: 'Expense/addExpenseItem'
    }),
    submitExpense () {
      this.addExpenseItem(this.expenseObject)
      // this.todoList.push({
      //   todo: this.taskObject
      // })
      this.onClickButton()
    },
    closeExpenseModal () {
      this.closeModal()
    },
    onReset () {
      this.expenseObject.date = null
      this.expenseObject.transactionDescription = null
      this.expenseObject.money = null
    },
    onClickButton (event) {
      this.$emit('expense-added', false)
      console.log('event', event)
    },
    closeModal (event) {
      this.$emit('expense-added', false)
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
