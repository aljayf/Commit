<template>
  <q-page class="flex flex-center">
    <q-card
      class="q-pa-md"
      inline
      color="white"
    >
      <q-card-section class="text-dark text-center">
        Sign in
      </q-card-section>
      <form @submit.prevent="signIn()">
        <q-card-section>
          <q-field
            icon="email"
            icon-color="light"
            class="q-mt-mg"
            >
            <q-input
              placeholder="Email Address"
              v-model="form.email"
              type="email"
            />
          </q-field>
          <q-field
            icon="lock"
            icon-color="light"
            class="q-mt-mg"
          >
            <q-input
              placeholder="Password"
              v-model="form.password"
              type="password"
            />
          </q-field>
          <q-btn
            label="Sign In"
            color="primary"
            size="large"
            type="submit"
          />
        </q-card-section>
      </form>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LogIn',
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions({
      logInUser: 'Authentication/logInUser'
    }),
    signIn () {
      let credentials = {
        email: this.form.email,
        password: this.form.password
      }

      this.logInUser(credentials)
        .then(user => {
          this.$router.replace({ name: 'Main' })
            .catch(() => {})
        })
        .catch(error => {
          this.$q.notify('Invalid credentials. Please try again.')
          console.error(`Not signed in: ${error.message}`)
        })
    }
  }
}
</script>

<style scoped>

</style>
