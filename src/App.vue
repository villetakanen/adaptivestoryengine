<template>
  <v-app>
    <v-toolbar app>

      <v-toolbar-title class="headline text-uppercase">
        <span>ASE</span>
        <span class="font-weight-light"> ADAPTIVE STORY ENGINE</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <BookMenu/>

    </v-toolbar>

    <v-content>

      <StoryBoard/>

    </v-content>
  </v-app>
</template>

<script>
import StoryBoard from './components/StoryBoard'
import BookMenu from './components/BookMenu'

export default {
  name: 'App',
  components: {
    StoryBoard,
    BookMenu
  },
  data () {
    return {
      //
    }
  }
}
</script>
