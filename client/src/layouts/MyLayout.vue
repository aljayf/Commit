<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-black text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Commit
        </q-toolbar-title>
        <div>
          <q-btn flat label="Login/Signup" v-if="!userDetails.userId"/>
          <q-btn round v-else @click="logoutUser">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/calendar" label="Calendar" />
        <q-route-tab to="/expenses" label="Expenses"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['userDetails'])
    // ...mapGetters({
    //   user: 'Authentication/user'
    // }),
    // isLoggedIn () {
    //   return this.user != null
    // }
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
c
