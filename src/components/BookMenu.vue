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
                    v-for="(item, index) in books"
                    :key="index"
                    @click="currentbook=item"
                >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
      </v-menu>
    </div> 
</template>
