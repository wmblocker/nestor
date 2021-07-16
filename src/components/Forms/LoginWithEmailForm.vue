<template>
  <div>
    <BForm @submit="onSubmit">
      <BFormGroup
        id="input-group-1"
        label="Email"
        label-for="input-1"
        description="Please enter an email address"
      >
        <BFormInput
          id="input-1"
          v-model="form.email"
          placeholder="ex. john@domain.com"
          type="email"
          required
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-2"
        label="Password"
        label-for="input-2"
        description="Please enter a password"
      >
        <BFormInput
          id="input-2"
          v-model="form.password"
          max="22"
          type="password"
          required
        ></BFormInput>
      </BFormGroup>
      <BFormGroup
              id="input-group-3"
              label="Are you a mentor?"
              label-for="input-3"
      >
        <BFormCheckbox
                id="input-3"
                v-model="form.mentor"
                type="checkbox"
                required
        ></BFormCheckbox>
      </BFormGroup>
      <BButton type="submit" variant="primary">Submit</BButton>
    </BForm>
  </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BButton, BFormCheckbox } from "bootstrap-vue";
import { mapActions } from "vuex";

export default {
  name: "LoginWithEmailForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
        mentor: false
      },
    };
  },
  methods: {
    ...mapActions("User", ["loginUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.loginUser(this.form);
      this.$bvModal.hide("loginWithEmailModal");
      this.$router.replace({
        name: "rooms",
      });
    },
  },
  components: {
    BForm,
    BFormInput,
    BFormGroup,
    BButton,
    BFormCheckbox
  },
};
</script>

<style scoped></style>
