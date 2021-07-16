<template>
  <div class="profile">
    <BRow>
      <BCol cols="6">
        <h2>
          {{ getCurrentUser.name ? `Hello, ${getCurrentUser.name}` : "Hello!" }}
        </h2>
      </BCol>
      <BCol cols="6">
        <EditProfileButton class="float-end"></EditProfileButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol md="12">
        <b-card
          img-alt="Card image"
          :img-src="getCurrentUser.avatar || 'https://placekitten.com/300/300'"
          img-left
          class="mb-3 p-3"
        >
          <b-card-text>
            {{ getCurrentUser.name }} ({{ getCurrentUser.displayName }})
          </b-card-text>
          <b-card-text>
            {{ getCurrentUser.email }}
          </b-card-text>
          <b-card-text>
            {{ getCurrentUser.city }} {{ getCurrentUser.state }}
          </b-card-text>
          <b-card-text>
            Years of Experience: {{ getCurrentUser.experience }}
          </b-card-text>
        </b-card>
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol md="12">
        <div>
          <b-card title="Mentor Stats">
            <b-list-group>
              <b-list-group-item>You have created {{Object.keys(getRooms[getCurrentUser.id]).length}} rooms</b-list-group-item>
              <b-list-group-item>Mentees have given you {{getMentors[getCurrentUser.id].rating}} thumbs up</b-list-group-item>
            </b-list-group>
          </b-card>
        </div>
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol md="12">
        <div>
          <b-card title="Mentee Stats">
            <b-list-group>
              <b-list-group-item>You currently have 4 Mentors</b-list-group-item>
              <b-list-group-item>You are subscribed to 7 rooms</b-list-group-item>
            </b-list-group>
          </b-card>
        </div>
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol md="12">
        <div>
          <b-card title="About Me">
            <b-card-text>
              {{ getCurrentUser.description }}
            </b-card-text>
          </b-card>
        </div>
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol md="12">
        <div>
          <b-card title="Current Position">
            <b-card-text>
              {{ getCurrentUser.jobTitle }}
            </b-card-text>
          </b-card>
        </div>
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol md="12">
        <b-card title="Interests">
          <b-list-group horizontal="md">
            <b-list-group-item
              v-for="(interest, i) in getCurrentUser.interests"
              :key="interest + '-' + i"
              >{{ interest }}</b-list-group-item
            >
          </b-list-group>
        </b-card>
      </BCol>
    </BRow>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditProfileButton from "../../components/Buttons/EditProfileButton";
export default {
  name: "Profile",
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
    ...mapGetters("Mentors", ["getMentors"]),
    ...mapGetters("Rooms", ["getRooms"]),
  },
  components: {
    EditProfileButton,
  },
};
</script>

<style scoped lang="scss">
  img {
    max-width: 200px;
    border-radius: 50% !important;
  }
</style>
