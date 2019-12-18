<template>
  <div>
    <q-form>
      <div class="row q-mb-md">
        <q-banner class="bg-grey-3 col">
          <template v-slot:avatar>
            <q-icon name="account_circle" color="primary" />
          </template>
          {{ tab | titleCase }} and Commit!
        </q-banner>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
  props: ['tab']
}
</script>

<style scoped>

</style>
