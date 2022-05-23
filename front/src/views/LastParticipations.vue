<template>
    <div>
        <div class="title">
            <h1>
                Les dernières participations
            </h1>
            <h2>
                Nouveaux posts ou nouveaux commentaires...
            </h2>
        </div>
        <PublishedPost 
            commentButton="Voir le fil"
            v-for="post in posts"
            :email="post.User && post.User.email"
            :firstName="post.User && post.User.firstName"
            :lastName="post.User && post.User.lastName"
            :date="post.date" 
            :title="post.title" 
            :content="post.content" 
            :likes="post.likes"
            :id="post.id"
            :key="post.id"
            :deletePost="deletePost"
            :postUserId="post.User && post.User.id"
            :imageUrl="post.imageUrl"/>
    </div>
</template>

<script>
import axios from "../services/axios-service"

import PublishedPost from "@/components/PublishedPost.vue"
import {getReadableDate} from "../services/date-service"


export default {
    name: "LastParticipation",
    components: {
        PublishedPost
    },
    data() {
        return {
            posts: []
        }
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

<style scoped lang="scss">
h1 {
    font-size: 28px;
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
}

h2 {
    font-size: 20px;
    text-align: center;
}

.title {
    width: 50%;
    margin: auto;
}
</style>