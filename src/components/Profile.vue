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
      @click="logout" >
      Logout ({{displayname}})
      </v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  computed: {
    displayname () {
      // console.log(this.$store.state.user.name)
      return this.$store.state.user.name
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        // console.log('logout')
        // this.$router.replace('/')
      }).catch(function (error) {
        console.log('logout failed ' + error)
      })
    }
  }
}
</script>
