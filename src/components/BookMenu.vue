<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    Select a Book
                </v-btn>
            </template>
            <v-list>
                <v-list-tile
                    v-for="(item, index) in this.books"
                    :key="index"
                    @click="changeTitle(index)"
                >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
      </v-menu>
    </div>
</template>
<script>

export default {
  computed: {
    books () {
      return this.$store.state.reader.books
    }
  },
  methods: {
    changeTitle: function (title) {
      this.$store.commit('reader/changeToTitle', title)
      this.$router.push('/reader')
    }
  }
}
</script>
