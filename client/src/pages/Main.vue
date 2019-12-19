<template>
<div class="full-width">
  <motivation-carousel></motivation-carousel>
  <div class="myown">
    <div id="overview" class="row">
      <!--Overview-->
      <total-assignments class="col-6"></total-assignments>
      <balance-card class="col-6"></balance-card>
    </div>
    <div id="goodstuff" class="row justify-between">
      <task-card></task-card>
      <calendar-card></calendar-card>
    </div>
    <!--<calandar-task-card></calandar-task-card>-->
  </div>
</div>
</template>

<script>
import TotalAssignments from '../components/TotalAssignments'
import TaskCard from '../components/TaskCard'
import CalendarCard from '../components/CalendarCard'
import MotivationCarousel from '../components/MotivationCarousel'
// import CalandarTaskCard from '../components/CalandarTaskCard'
import BalanceCard from '../components/BalanceCard'
export default {
  name: 'Main',
  components: { BalanceCard, MotivationCarousel, CalendarCard, TaskCard, TotalAssignments }
}
</script>

<style scoped>
.myown {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
