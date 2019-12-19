<template>
  <div class="container">
    <balance-card></balance-card>
    <expense-table></expense-table>
  </div>
</template>

<script>
import BalanceCard from '../components/BalanceCard'
import ExpenseTable from '../components/ExpenseTable'
export default {
  name: 'ExpensesPage',
  components: { ExpenseTable, BalanceCard }
}
</script>

<style scoped>

</style>
