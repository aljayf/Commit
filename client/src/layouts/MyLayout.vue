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
          <q-btn flat label="Login/Signup" />
          <q-btn round v-if="isLoggedIn">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/calendar" label="Calendar" />
      </q-tabs>
    </q-header>

    <q-page-containecr>
      <q-page>
        <router-view />
      </q-page>
    </q-page-containecr>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
c
