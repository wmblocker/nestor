<template>
  <div>
    <BForm @submit="onSubmit">
      <BFormGroup id="input-group-0" label="Name" label-for="input-0">
        <BFormInput
          id="input-0"
          v-model="form.name"
          :placeholder="getCurrentUser.name"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup id="input-group-1" label="Email" label-for="input-1">
        <BFormInput
          id="input-1"
          v-model="form.email"
          :placeholder="getCurrentUser.email"
          type="email"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup id="input-group-2" label="Display Name" label-for="input-2">
        <BFormInput
          id="input-2"
          v-model="form.displayName"
          :placeholder="getCurrentUser.displayName"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup id="input-group-3" label="City" label-for="input-3">
        <BFormInput
          id="input-3"
          v-model="form.city"
          :placeholder="getCurrentUser.city"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup id="input-group-4" label="State" label-for="input-4">
        <BFormInput
          id="input-4"
          v-model="form.state"
          :placeholder="getCurrentUser.state"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup id="input-group-5" label="Job Title" label-for="input-5">
        <BFormInput
          id="input-5"
          v-model="form.jobTitle"
          :placeholder="getCurrentUser.jobTitle"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-6"
        label="Years of Experience"
        label-for="input-6"
      >
        <BFormInput
          id="input-6"
          v-model="form.experience"
          :placeholder="getCurrentUser.experience"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
              id="input-group-11"
              label="Avatar Url"
              label-for="input-11"
      >
        <BFormInput
                id="input-11"
                v-model="form.avatar"
                :placeholder="getCurrentUser.avatar"
                required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup id="input-group-7" label="About" label-for="input-7">
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder=""
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </BFormGroup>
      <BButton type="submit" variant="primary" class="mt-3">Submit</BButton>
    </BForm>
  </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BButton } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditProfileForm",
  data() {
    return {
      form: {},
    };
  },
  mounted() {
    this.form = {
      ...this.getCurrentUser,
    };
  },
  computed: {
    ...mapGetters("User", ["getCurrentUser"]),
  },
  methods: {
    ...mapActions("User", ["updateUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.updateUser(this.form);
      this.$bvModal.hide("editProfileModal");
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
