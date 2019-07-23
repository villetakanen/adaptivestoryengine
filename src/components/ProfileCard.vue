<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>Profile for {{displayname}}
                        <v-btn
                            v-if="displayname"
                            color="secondary"
                            @click="logout">
                            logout
                            </v-btn>
                    </v-card-title>
                     <v-card-text>
                        <h1>My library</h1>
                        <v-list>
                            <v-list-tile
                                v-for="(item, index) in this.books"
                                :key="index"
                                @click="changeTitle(index)"
                            >
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                        <h1>My creations</h1>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase'

export default {
  computed: {
    displayname () {
      return this.$store.state.user.name
    },
    books () {
      return this.$store.state.reader.books
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(function () {
      }).catch(function (error) {
        console.log('logout failed ' + error)
      })
    },
    changeTitle: function (title) {
      this.$store.commit('reader/changeToTitle', title)
    }
  }
}
</script>
