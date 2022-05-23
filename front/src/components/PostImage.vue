<template>
    <div class="image">
        <b-img :src="imageUrl" fluid class="contain"></b-img>
    </div>
</template>

<script>

export default {
    name: "PostImage",
    props: {
        imageUrl: String
    }        
}
</script>

<style scoped lang="scss">
.contain {
    object-fit: cover;
}

.image {
    max-width: 200px;
}

</style>