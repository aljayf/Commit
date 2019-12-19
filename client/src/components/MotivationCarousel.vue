<template>
  <div class="custom-caption">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">“The Way Get Started Is To Quit Talking And Begin Doing.”</div>
          <div class="text-subtitle1">- Walt Disney</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">“Don’t Let Yesterday Take Up Too Much Of Today.”</div>
          <div class="text-subtitle1">- Will Rogers</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">“Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.”</div>
          <div class="text-subtitle1">– Helen Keller</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'MotivationCarousel',
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>

<style scoped>
  .custom-caption {
    text-align: center;
    padding: 8px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
