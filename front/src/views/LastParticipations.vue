<template>
    <div>
        <PublishedPost commentButton="Voir les commentaires"
            v-for="post in posts"
            :email="post.User && post.User.email"
            :date="post.date" 
            :title="post.title" 
            :content="post.content" 
            :likes="post.likes"
            :id="post.id"
            :key="post.id"
            :deletePost="deletePost"
            :postUserId="post.User && post.User.id"/>
    </div>
</template>

<script>
import axios from "../services/axios-service"

import PublishedPost from "@/components/PublishedPost.vue"
import {getReadableDate} from "../services/date-service"


export default {

    data() {
        return {
            posts: []
        }
    },
    name: "LastParticipation",
    components: {
        PublishedPost
    },
    created() {
        axios.get("posts/last")
            .then(response => {
                this.posts.push(...response.data.map(post => {
                    post.date = getReadableDate(post.date);
                    return post
                }));
            }).catch(e => {
                console.error(e);
            });
    },
    methods: {
        async deletePost(id) {
            const res = await axios.delete("posts/" + id);
            console.log(res);
            this.posts = this.posts.filter((post) => {
                return post.id !== id;
            })
        }
    }
}

</script>