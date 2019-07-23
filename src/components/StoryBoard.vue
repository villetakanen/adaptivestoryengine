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
                        <div v-html="markdown"></div>
                    </v-card-text>
                    <v-card-actions>
                        <div>
                          <template v-for="(note, index) in book[bookmark].notes">
                            <p v-bind:key="index">{{note.message}}</p>
                          </template>
                          <v-btn
                              :color="action.style"
                              @click="moveTo(action.target)"
                              v-for="action in book[bookmark].actions" v-bind:key="action.target">
                              {{action.text}}
                          </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

export default {
  computed: {
    book () {
      return this.$store.state.reader.books[this.$store.state.reader.title]
    },
    bookmark () {
      return this.$store.state.reader.bookmark
    },
    markdown () {
      var mdt = this.$store.state.reader.books[this.$store.state.reader.title][this.$store.state.reader.bookmark]
      if (mdt.hasOwnProperty('markdown')) {
        var md = window.markdownit()
        const r = md.render(mdt.markdown)
        // console.log(r)
        return r
      }
      return null
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
