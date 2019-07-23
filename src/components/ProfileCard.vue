<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>Profile for {{user.name}}
                        <v-btn
                            v-if="user"
                            color="secondary"
                            @click="logout">
                            logout
                            </v-btn>
                    </v-card-title>
                     <v-card-text>
                        <h1>Profile</h1>
                        <table>
                            <tr><td>User id</td><td>{{user.username}}</td></tr>
                        </table>
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
                        <v-list>
                            <v-list-tile
                                v-for="(item, index) in this.creatorBooks"
                                :key="index"
                            >
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
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
    user () {
      return this.$store.state.user
    },
    books () {
      return this.$store.state.reader.books
    },
    creatorBooks () {
      return this.$store.state.creator.books
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
