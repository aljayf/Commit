<template>
  <div>
    <q-table
      title="Expenses"
      :data="data"
      :columns="columns"
      row-key="date"
    />
  </div>
</template>

<script>
export default {
  name: 'ExpenseTable',
  data () {
    return {
      columns: [
        {
          name: 'date',
          label: 'Date',
          align: 'left',
          field: 'date',
          sortable: true
        },
        {
          name: 'transaction',
          label: 'Transaction',
          align: 'center',
          field: 'transaction'
        },
        {
          name: 'money',
          label: 'Money',
          align: 'left',
          field: 'money'
        },
        {
          name: 'balance',
          label: 'Remaining Balance',
          align: 'left',
          field: 'balance'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
