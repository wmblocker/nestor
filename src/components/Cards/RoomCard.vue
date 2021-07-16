<template>
  <div>
    <BCard no-body class="overflow-hidden" style="max-width: 540px">
      <BRow no-gutters>
        <BCol md="6">
          <BCardImg
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded-0"
          ></BCardImg>
        </BCol>
        <BCol md="6">
          <BCardBody :title="room.description">
            <BCardText>By {{ user.name }}</BCardText>
          </BCardBody>
        </BCol>
      </BRow>
      <template #footer>

        <BLink :to="getJitsiRoomUrl" @click="enter" class="float-end" v-if="!isMentorCreated">
          Enter Room
        </BLink>
        <SubscribeToRoom :roomId="roomID" :mentorId="mentorID" :room="room" v-if="isMentorCreated" class="float-end"></SubscribeToRoom>
      </template>
    </BCard>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  BCard,
  BCol,
  BRow,
  BCardImg,
  BLink,
  BCardText,
  BCardBody,
} from "bootstrap-vue";
import SubscribeToRoom from "../Buttons/SubscribeToRoomButton";

export default {
  name: "RoomCard",
  props: {
    mentorID: {
      type: String,
      required: true,
    },
    roomID: {
      type: String,
      required: true,
    },
    room: {
      type: Object,
      required: true,
    },
    mentor: {
      required: true,
    },
    isMentorCreated: {
      required: false,
      default: false
    },
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    const ref = firebase.database().ref("users"); // eslint-disable-line
    const _self = this;
    ref.child(this.mentorID).get().then((snapshot) => {
      _self.user = snapshot.val()
    })
  },
  computed: {
    ...mapGetters('User', ['getCurrentUser']),
    getJitsiRoomUrl() {
      return `room/${this.roomID}`;
    },
  },
  methods: {
    ...mapActions('Mentors', ['updateCurrentMentor']),
    ...mapActions('User', ['getUser']),
    enter() {
       this.updateCurrentMentor(this.mentorID);
    }
  },
  components: {
    SubscribeToRoom,
    BCard,
    BCol,
    BRow,
    BLink,
    BCardImg,
    BCardText,
    BCardBody,
  },
};
</script>

<style scoped></style>
