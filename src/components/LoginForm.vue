<template>
<v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-text>
                        <template v-if="!loggedIn">
                            <v-btn @click="socialLogin">Google</v-btn>
                        </template>
                        <template v-if="loggedIn">
                            <h1>Hi {{displayname}}</h1>
                            <p><router-link to="/">Back to front page</router-link></p>
                        </template>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
</v-container>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'login',
  computed: {
    displayname () {
      // console.log(this.$store.state.user.name)
      return this.$store.state.user.name
    },
    loggedIn () {
      // console.log(this.$store.state.user.name)
      return this.$store.state.user.name != null
    }
  },
  methods: {
    socialLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result.user)
        this.$router.push('/')
      }).catch(function (error) {
        console.log(error.message)
      })
      this.$store.dispatch('reader/getFBBooks')
    }
  }
}

</script>
