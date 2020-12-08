<template>
  <div class="users">
    <Table :users="users" />
  </div>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  name: "Users",
  components: {
    Table,
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
