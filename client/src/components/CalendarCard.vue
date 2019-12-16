<template>
<div>
  <q-date
    v-model="date"
    today-btn
  />
</div>
</template>

<script>
export default {
  name: 'CalendarCard',
  data () {
    return {
      date: null,
      events: []
    }
  }
}
</script>

<style scoped>

</style>
