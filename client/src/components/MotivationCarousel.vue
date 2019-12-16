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
          <div class="text-h2">Motivational Quote #1</div>
          <div class="text-subtitle1">- Person who said it</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Motivational Quote #2</div>
          <div class="text-subtitle1">- Person who said it</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4UiVXQ2jpa2y5V1WcNzIPyqjpoXFQGVwBUqNH6vYXqOZpgQlEpQ&s">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">"Have You Ever Thought That You Were in Love With Someone But Then Realized You Were Looking in the Mirror for 20 Minutes?"</div>
          <div class="text-subtitle1">- Kanye West</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9jT2mpCSRN91Y2XpMFr1areAb1gw3_YnFl49SUjiU-P6IEdz&s">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">"McDonalds is my Favorite Brand"</div>
          <div class="text-subtitle1">- Kanye West</div>
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
