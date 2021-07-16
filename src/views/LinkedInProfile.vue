<template>
  <div>
    Hello {{ firstName }} {{ lastName }}!
    <img :src="imageUrl" />
  </div>
</template>
<script>
export default {
  computed: {
    firstName: function () {
      const profile = JSON.parse(window.localStorage.getItem("profile"));
      return profile.firstName.localized.en_US;
    },
    lastName: function () {
      const profile = JSON.parse(window.localStorage.getItem("profile"));
      return profile.lastName.localized.en_US;
    },
    imageUrl: function () {
      const profile = JSON.parse(window.localStorage.getItem("profile"));
      return profile.profilePicture["displayImage~"].elements[0].identifiers[0]
        .identifier;
    },
  },
};
</script>
