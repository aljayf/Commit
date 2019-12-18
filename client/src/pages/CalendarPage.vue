import { Calendar } from 'quasar-calendar'
<template>
<div>
  <calendar/>
  <expense-table></expense-table>
</div>
</template>

<script>
import ExpenseTable from '../components/ExpenseTable'
export default {
  name: 'CalendarPage',
  components: { ExpenseTable }
}
</script>

<style scoped>

</style>
