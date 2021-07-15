<template>
    <BButton variant="link">
        Follow
    </BButton>
</template>

<script>
export default {
    name: "FollowUser",
    props: {
        //The CSS variant of the Button ex. primary, secondary, link
        variant: {
           type: String,
           default: "link"
        }
    }
}
</script>

<style scoped>

</style>