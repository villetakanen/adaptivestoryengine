<template>
  <div>
    <v-btn
      v-if="!displayname"
      color="secondary"
      to="/login">
      Login
      </v-btn>
    <v-btn
      v-if="displayname"
      color="secondary"
      to="/profile">
      {{displayname}}
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'login',
  computed: {
    displayname () {
      // console.log(this.$store.state.user.name)
      return this.$store.state.user.name
    }
  }
}
</script>
