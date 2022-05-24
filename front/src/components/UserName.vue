<template>
    <span>
        <span v-if="lastName">{{firstName}} {{slicedLastName}}.</span>
        <span v-else>Ancien Utilisateur</span>
    </span>
</template>

<script>
export default {
    name: 'UserName',
    props: {
        firstName: String,
        lastName: String
    },
    computed: {
        // Use the first two letters of a name
        slicedLastName() {
            return this.lastName.slice(0,2);
        }
    },

}
</script>
