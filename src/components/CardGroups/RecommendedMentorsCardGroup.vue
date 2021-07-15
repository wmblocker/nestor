<template>
    <div class="recommended-mentors">
        <slot>Mentors Recommended For You</slot>
        <BRow>
            <BCol cols="4">
                <UserCard>
                    <FollowUser></FollowUser>
                </UserCard>
            </BCol>
            <BCol cols="4">
                <UserCard>
                    <FollowUser></FollowUser>
                </UserCard>
            </BCol>
            <BCol cols="4">
                <UserCard>
                    <FollowUser></FollowUser>
                </UserCard>
            </BCol>
        </BRow>
    </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import UserCard from "../Cards/UserCard";
import FollowUser from "../Buttons/FollowUserButton";

export default {
    name: "RecommendedMentorsCardGroup",
    components: {
        FollowUser,
        UserCard,
        BRow,
        BCol
    }
}
</script>

<style scoped>

</style>