<template>
    <div>
        <PublishedPost commentButton="Voir les commentaires"
        v-for="post in posts"
        :email="post.User.email"
        :date="post.date" 
        :title="post.title" 
        :content="post.content" 
        :likes="post.likes"
        :key="post.id"/>
    </div>
    <!--  -->

</template>

<script>

import PublishedPost from "@/components/PublishedPost.vue"
import axios from "axios"
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

    // data: () => ({
    //     publishedPosts: [
    //         {
    //             email: "lewogona@gmail.com",
    //             date: "04/05/2022",
    //             titre: "Voici ma future boutique en ligne",
    //             post: "Non en fait, elle n'est pas encore prête. Mais préparez-vous à la découvrir prochainement !",
    //             likes: 20
    //         },
    //         {
    //             email: "keysim.fr@gmail.com",
    //             date: "05/05/2022",
    //             titre: "Ce jeu est incroyable",
    //             post: "Je vous invite à découvrir Brawlhalla. Ce jeu est gratuit et dément ! J'y ai passé au moins 1000heures.",
    //             likes: 5
    //         },
    //         {
    //             email: "keysim.fr@gmail.com",
    //             date: "06/05/2022",
    //             titre: "Ce jeu est VRAIMENT incroyable",
    //             post: "Vraiment, j'insiste. Allez télécharger Brawlhalla sur Steam, now !",
    //             likes: 3
    //         }
    //     ]
    // }),
</script>


