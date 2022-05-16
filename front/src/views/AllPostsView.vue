<template>
    <div>
        <PublishedPost commentButton="Voir les commentaires"
            v-for="post in posts"
            :email="post.User.email"
            :date="post.date" 
            :title="post.title" 
            :content="post.content" 
            :likes="post.likes"
            :id="post.id"
            :key="post.id"/>
    </div>
</template>

<script>
import axios from "axios"

import PublishedPost from "@/components/PublishedPost.vue"
import {getReadableDate} from "../services/date-service"

const API_URL = 'http://localhost:3000/posts/';

export default {

    data() {
        return {
            posts: []
        }
    },
    name: "AllPostsView",
    components: {
        PublishedPost
    },
    created() {
        axios.get(API_URL)
            .then(response => {
                this.posts.push(...response.data.map(post => {
                    post.date = getReadableDate(post.date);
                    return post
                }));
            }).catch(e => {
                console.error(e);
            });
    }

}

</script>


