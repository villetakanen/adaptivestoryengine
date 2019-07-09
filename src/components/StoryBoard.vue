<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h1>{{books.BookOne[bookmark].title}}</h1>  
                    </v-card-title>
                    <v-card-text>
                        <p>{{book[bookmark].text}}</p>
                        
                    </v-card-text>
                    <v-card-actions>
                        <v-btn 
                            @click="bookmark=action.target"
                            v-for="action in book[bookmark].actions" v-bind:key="action.target">
                            {{action.text}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

//import MarkdownDiv from './MarkdownDiv'
//<MarkdownDiv :markdown="book[bookmark].text"></MarkdownDiv>

//import VueMarkdown from 'vue-markdown'

export default {
    data () {
        return {
            cursor:0,
            book:this.$store.state.books.BookOne,
            bookmark: this.$store.state.books.BookOne.start,    
        }
    },
    components:{
        //MarkdownDiv
    },    
}
</script>
<style scoped>
h1{
    font-weight: 300;
    text-transform: uppercase;
}
</style>


