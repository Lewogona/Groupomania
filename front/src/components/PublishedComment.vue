<template> 
    <b-container>
        <b-card  footer-tag="footer">
            <b-row no-gutters>
                <b-col md="3">
                    <b-avatar rounded size="96px"></b-avatar>
                    <b-card-text>Réponse de : {{ email }}</b-card-text>
                    <b-card-text>Le : {{ date }}</b-card-text>
                </b-col>
                <b-col md="9">
                    <b-card-body>
                        <b-row>
                            <b-card-text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat."
                            </b-card-text>
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
    props: ["email", "date"]
}

</script>

<style scoped lang="scss">

.card-body {
    padding: 10px;
}
</style>