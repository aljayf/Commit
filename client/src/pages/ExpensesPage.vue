<template>
  <div class="container">
    <budget-card></budget-card>
    <expense-table></expense-table>
  </div>
</template>

<script>
import BudgetCard from '../components/BudgetCard'
import ExpenseTable from '../components/ExpenseTable'
export default {
  name: 'ExpensesPage',
  components: { ExpenseTable, BudgetCard }
}
</script>

<style scoped>

</style>
