<template>
    <div>
        <PublishedPost 
            date="04/05/2022" 
            email="lewogona@gmail.com" 
            titre="Titre de la publication"
            post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum." 
            :likes="5"
            :displayCreateComment="displayCreateComment"/>
        <CreateComment v-if="showCreateComment" email="lewogona@gmail.com" date="07/05/2022"/>
        <PublishedComment v-for="{date, email, comment} in publishedComments" :date="date" :email="email" :comment="comment" :key="comment"/>
    </div>
</template>

<script>

import PublishedPost from "@/components/PublishedPost.vue"
import PublishedComment from '@/components/PublishedComment.vue'
import CreateComment from "@/components/CreateComment.vue"

export default {
    data: () => ({
        showCreateComment: false,
        publishedComments: [
            {
                date: "04/05/2022",
                email: "lewogona@gmail.com",
                comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.`
            },
            {
                date: "05/05/2022",
                email: "keysim.fr@gmail.com",
                comment: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.`
            }
        ]
    }),
    name: 'PublishedCommentView',
    components: {
        PublishedPost,
        PublishedComment,
        CreateComment
    },
    methods: {
        displayCreateComment() {
            this.showCreateComment = !this.showCreateComment;
        }
    }
}
</script>
