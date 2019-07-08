<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ASE</span>
        <span class="font-weight-light"> ADAPTIVE STORY ENGINE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Select Book
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in books"
            :key="index"
            @click="currentbook=item"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <StoryBoard v-bind="currentbook"/>
    </v-content>
  </v-app>
</template>

<script>
import StoryBoard from './components/StoryBoard'

export default {
  name: 'App',
  components: {
    StoryBoard
  },
  data () {
    return {
      currentbook:{"TheEscape":{}},
      books: [{title:"The Escape"},{title:"BookOne"}]
    }
  }
}
</script>
