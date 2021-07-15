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
          required
        ></BFormInput>
      </BFormGroup>
      <BButton type="submit" variant="primary">Submit</BButton>
    </BForm>
  </div>
</template>

<script>
import { BForm, BFormInput, BFormGroup, BButton } from "bootstrap-vue";

export default {
  name: "CreateUserFromEmailForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
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
