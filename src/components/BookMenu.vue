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
                    @click="currentbook=item"
                >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
      </v-menu>
    </div>
</template>
<script>

// Temporary import of raw bookdata
//
// In the end, this should come from server - and should be pushed to this component via vuex state.
//
import bookdata from '../assets/books.json'

export default {
  data () {
    return {
      books: bookdata
    }
  }
}
</script>
