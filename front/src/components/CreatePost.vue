<template> 
<b-container>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-card header-tag="header" footer-tag="footer">
            <template #header>
                <b-form-input type="text" placeholder="Titre de la publication"></b-form-input>
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
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                placeholder="Écrivez votre texte..."
                                rows="12"
                            ></b-form-textarea>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
            <template #footer>
                <b-row align-h="end">
                    <b-col cols="2">
                        <b-button size="sm"><b-icon-trash></b-icon-trash> Supprimer</b-button>
                    </b-col>
                </b-row>
            </template>
        </b-card>
    </b-form>
</b-container>
</template>

<script>

export default {
    name: 'PublishedPost',
    props: ["email", "date"]
}

</script>

<style scoped lang="scss">

</style>