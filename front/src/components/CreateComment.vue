<template> 
    <b-container>
        <b-card  footer-tag="footer">
            <b-row no-gutters>
                <b-col md="3">
                    <b-avatar rounded size="96px"></b-avatar>
                    <b-card-text>Réponse de : lewogona@gmail.com</b-card-text>
                    <b-card-text>Le : 04/05/2022</b-card-text>
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-row>
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                placeholder="Écrivez votre texte..."
                                rows="4"
                            ></b-form-textarea>
                        </b-row>
                        <b-row align-h="end">
                            <b-button size="sm"><b-icon-trash></b-icon-trash> Supprimer</b-button>
                        </b-row>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </b-container>
</template>

<script>

export default {
    name: 'HeaderForPages',
    props: {
    
  }
}

</script>

<style scoped lang="scss">

</style>