<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/"><span>ASE</span></router-link>
        <span class="font-weight-light"> {{title}}</span>
        <span class="booktitle"> {{book}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="loadBooks"
      >Load Books</v-btn>
      <BookMenu/>
      <Profile/>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import BookMenu from './components/BookMenu'
import Profile from './components/Profile'

export default {
  name: 'App',
  components: {
    BookMenu,
    Profile
  },
  data () {
    return {
      title: process.env.VUE_APP_TITLE
    }
  },
  computed: {
    book () {
      return this.$store.state.reader.books[this.$store.state.reader.title].title
    }
  },
  methods: {
    loadBooks () {
      this.$store.dispatch('reader/getFBBooks')
    }
  }
}
</script>
<style scoped>
.booktitle{
  font-weight: 300;
  font-size: 0.80em;
  margin-left: 2em;
}
</style>
