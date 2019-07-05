<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h1>{{placeholder_book.chapters[cursor].title}}</h1>  
                    </v-card-title>
                    <v-card-text>
                        <p>{{placeholder_book.chapters[cursor].text}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn 
                            @click="cursor=action.target"
                            v-for="action in placeholder_book.chapters[cursor].actions" v-bind:key="action.target">
                            {{action.text}}
                        </v-btn>
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
            cursor:0,
            placeholder_book:{
                'name': 'A Placeholder book',
                'chapters':[
                    {'title':'first chapter', 'text':'first chapter text',
                        'actions':[{'target':'1','text':'chapter 2'}]
                    },
                    {'title':'second chapter', 'text':'There should be 2 actions, one leading to 1, one to 3',
                        'actions':[
                            {'target':'0','text':'chapter 1'},
                            {'target':'2','text':'chapter 3'}]
                    },
                    {'title':'Third chapter', 'text':'There should be three actions, one leading to 1, one to 2, and one doing nothing',
                        'actions':[
                            {'target':'0','text':'chapter 1'},
                            {'target':'1','text':'chapter 2'},
                            {'target':'2','text':'Stay here'}]
                    }
                ],
            }
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


