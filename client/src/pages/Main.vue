<template>
<div class="full-width">
  <motivation-carousel></motivation-carousel>
  <div class="myown">
    <div id="overview" class="row">
      <!--Overview-->
      <total-assignments class="col-4"></total-assignments>
      <total-assignments class="col-4"></total-assignments>
      <total-assignments class="col-4"></total-assignments>
    </div>
    <div id="goodstuff" class="row justify-between">
      <task-card></task-card>
      <task-card></task-card>
      <calendar-card></calendar-card>
    </div>
  </div>
</div>
</template>

<script>
import TotalAssignments from '../components/TotalAssignments'
import TaskCard from '../components/TaskCard'
import CalendarCard from '../components/CalendarCard'
import MotivationCarousel from '../components/MotivationCarousel'
export default {
  name: 'Main',
  components: { MotivationCarousel, CalendarCard, TaskCard, TotalAssignments }
}
</script>

<style scoped>
.myown {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20cpx;
  padding-bottom: 20px;
}
</style>
