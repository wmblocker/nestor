<template>
    <div>
        <BButton variant="success" v-b-modal="'createRoomModal'">Create Room</BButton>
    </div>
</template>

<script>
import { BButton } from 'bootstrap-vue';
export default {
    name: "CreateRoomButton",
    components: {
        BButton
    }
}
</script>

<style scoped>

</style>