<template>
<div>
  <q-date
    v-model="date"
    today-btn
    mask="MM-DD-YYYY"
  />
</div>
</template>

<script>
export default {
  name: 'CalendarCard',
  data () {
    return {
      date: '2019-12-18',
      events: []
    }
  }
}
</script>

<style scoped>

</style>
