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
                        <v-btn @click="cursor=placeholder_book.chapters[cursor].actions[0].target">{{placeholder_book.chapters[cursor].actions[0].text}}</v-btn>
                        <v-btn>Go right</v-btn>
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
                    {'title':'second chapter', 'text':'second chapter text',
                        'actions':[{'target':'0','text':'chapter 1'}]
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


