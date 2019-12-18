<template>
  <div>
    <q-card flat bordered class="my-card bg-grey-1">
      <q-splitter
        v-model="splitterModel"
        style="height: 450px"
      >
        <template v-slot:before>
          <div class="q-pa-md">
            <calendar-card v-model="date"></calendar-card>
          </div>
        </template>
        <template v-slot:after>
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="date">
              Aha
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-card>
  </div>
</template>

<script>
import CalendarCard from './CalendarCard'
export default {
  name: 'CalandarTaskCard',
  components: { CalendarCard },
  data () {
    return {
      splitterModel: 50,
      date: null
    }
  }
}
</script>

<style scoped>

</style>
