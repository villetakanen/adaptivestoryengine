<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h1>{{book[bookmark].title}}</h1>
                    </v-card-title>
                    <v-card-text>
                        <p>{{book[bookmark].text}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            @click="moveTo(action.target)"
                            v-for="action in book[bookmark].actions" v-bind:key="action.target">
                            {{action.text}}
                        </v-btn>
                        <template v-for="(note, index) in book[bookmark].notes">
                          <p v-bind:key="index">{{note.message}}</p>
                        </template>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

export default {
  data () {
    return {
      cursor: 0
    }
  },
  computed: {
    book () {
      return this.$store.state.reader.books[this.$store.state.reader.title]
    },
    bookmark () {
      return this.$store.state.reader.bookmark
    }
  },
  methods: {
    moveTo: function (chapter) {
      this.$store.commit('reader/moveToChapter', chapter)
    }
  }
}
</script>
<style scoped>
h1{
    font-weight: 300;
    text-transform: uppercase;
}
</style>
