<template>
    <div>
        <PublishedPost v-for="{email, date, titre, post, likes} in publishedPosts" 
        :email="email" 
        :date="date" 
        :titre="titre" 
        :post="post" 
        :likes="likes" 
        :key="post"/>
    </div>
</template>

<script>

import PublishedPost from "@/components/PublishedPost.vue"

export default {
    data: () => ({
        publishedPosts: [
            {
                email: "lewogona@gmail.com",
                date: "04/05/2022",
                titre: "Voici ma future boutique en ligne",
                post: "Non en fait, elle n'est pas encore prête. Mais préparez-vous à la découvrir prochainement !",
                likes: 20
            },
            {
                email: "keysim.fr@gmail.com",
                date: "05/05/2022",
                titre: "Ce jeu est incroyable",
                post: "Je vous invite à découvrir Brawlhalla. Ce jeu est gratuit et dément ! J'y ai passé au moins 1000heures.",
                likes: 5
            },
            {
                email: "keysim.fr@gmail.com",
                date: "06/05/2022",
                titre: "Ce jeu est VRAIMENT incroyable",
                post: "Vraiment, j'insiste. Allez télécharger Brawlhalla sur Steam, now !",
                likes: 3
            }
        ]
    }),

    name: "AllPostsView",
    components: {
        PublishedPost
    }

}


</script>


