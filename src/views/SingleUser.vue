<template>
  <div class="single-user">
    <Card :users="users" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "SingleUser",
  components: {
    Card,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>
