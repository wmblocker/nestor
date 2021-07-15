<template>
  <div>
    <BForm @submit="onSubmit">
      <BFormGroup
        id="input-group-1"
        label="Name"
        label-for="input-1"
        description="Please enter a name for the new room."
      >
        <BFormInput
          id="input-1"
          v-model="form.name"
          placeholder="ex. John's Room"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-2"
        label="Description"
        label-for="input-2"
        description="Please enter a name for the new room."
      >
        <BFormInput
          id="input-2"
          v-model="form.description"
          placeholder="ex. How To Be Productive Working From Home"
          max="88"
          required
        ></BFormInput>
      </BFormGroup>
      <BButton type="submit" variant="primary">Submit</BButton>
    </BForm>
  </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BButton } from "bootstrap-vue";
import { mapActions } from "vuex";

export default {
  name: "CreateRoomForm",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    ...mapActions("Rooms", ["createRoom"]),
    onSubmit(event) {
      event.preventDefault();
      this.createRoom(this.form);
    },
  },
  components: {
    BForm,
    BFormInput,
    BFormGroup,
    BButton,
  },
};
</script>

<style scoped></style>
