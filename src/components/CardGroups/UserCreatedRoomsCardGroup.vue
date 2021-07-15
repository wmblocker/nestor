<template>
    <div class="user-created-rooms">
        <slot>Rooms Created By You</slot>
        <BRow>
            <BCol cols="4">
                <RoomCard></RoomCard>
            </BCol>
            <BCol cols="4">
                <RoomCard></RoomCard>
            </BCol>
            <BCol cols="4">
                <RoomCard></RoomCard>
            </BCol>
        </BRow>
    </div>
</template>

<script>
import RoomCard from "../Cards/RoomCard";
import { BRow, BCol} from 'bootstrap-vue';

export default {
    name: "UserCreatedRooms",
    components: {RoomCard, BRow, BCol}
}
</script>

<style scoped>

</style>