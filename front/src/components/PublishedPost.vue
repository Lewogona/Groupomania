<template> 
<b-container>
    <b-card header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Titre de la publication</h6>
        </template>
        <b-row no-gutters>
            <b-col md="3">
                <b-card-img :src="require('../assets/pp.jpg')" img-alt="Profile Photo" ></b-card-img>
                <b-card-text>Posté par : lewogona@gmail.com</b-card-text>
                <b-card-text>Le : 04/05/2022</b-card-text>
            </b-col>
            <b-col md="9">
                <b-card-body>
                    <b-card-text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum."
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
        <template #footer>
            <b-row align-h="between">
                <b-col cols="2">
                    <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> Like
                </b-col>
                <b-col cols="2">
                    <b-icon-keyboard></b-icon-keyboard> Commenter
                </b-col>
                <b-col cols="2">
                    <b-button>Supprimer le post</b-button>
                </b-col>
            </b-row>
        </template>
    </b-card>
</b-container>
</template>

<script>

export default {
    name: 'PublishedPost',
    props: {
    
    }
}

</script>

<style scoped lang="scss">

</style>