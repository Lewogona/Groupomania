<template> 
<b-container>
    <b-card header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">{{ title }}</h6>
        </template>
        <b-row no-gutters>
            <b-col md="3">
                <b-card-img :src="require('../assets/pp.jpg')" img-alt="Profile Photo" ></b-card-img>
                <b-card-text>Posté par : {{ email }}</b-card-text>
                <b-card-text>Le : {{ date }}</b-card-text>
            </b-col>
            <b-col md="9">
                <b-card-body>
                    <b-card-text>
                        {{ content }}
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
        <template #footer>
            <b-row align-h="between">
                <div>
                    <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> {{ likes }}
                </div>
                    <b-button size="sm" href="#/post" @click="displayCreateComment"><b-icon-keyboard></b-icon-keyboard> {{ commentButton }}</b-button>
                    <b-button size="sm"><b-icon-trash></b-icon-trash> Supprimer</b-button>
            </b-row>
        </template>
    </b-card>
</b-container>
</template>

<script>

export default {
    name: 'PublishedPost',
    props: {
        email: String,
        date: String,
        title: String,
        content: String,
        likes: Number,
        displayCreateComment: Function,
        commentButton: String
    },
    // computed: {
    //     showButton(){
    //         return !(this.$route.path === "/allposts")
    //     }
    // }
}

</script>

<style scoped lang="scss">

</style>