<template>
  <div class="card-container">
    <div class="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
        alt="User"
        width="300"
      />
      <div v-for="user in filterUsers" :key="user.id">
        <div>{{ user.name }}</div>
        <br />
        <div>{{ user.email }}</div>
        <br />
        <div>{{ user.address.street }} street</div>
        <br />
        <div>{{ user.address.suite }}</div>
        <br />
        <div>{{ user.address.city }} city</div>
        <br />
        <div>{{ user.address.zipcode }}</div>
        <br />
        <div>{{ user.phone }}</div>
        <br />
        <div>{{ user.website }}</div>
        <br />
        <div>{{ user.company.name }}</div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    users: Array,
  },
  data() {
    return {
      userId: 0,
    };
  },
  computed: {
    filterUsers() {
      return this.users.filter((user) => user.id === this.userId);
    },
  },
  mounted() {
    this.userId = Number(this.$route.params.id);
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
}

.card {
  width: 400px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(220, 220, 220, 0.7);
  cursor: pointer;
}
</style>
