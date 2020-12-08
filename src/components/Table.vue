<template>
  <table>
    <tr class="table-header">
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Company Name</th>
    </tr>
    <tr @click="openUserInfo(user.id)" v-for="user in users" :key="user.id">
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.company.name }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    users: Array,
  },
  methods: {
    openUserInfo(userId) {
      this.$router.push(`/${userId}`);
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  text-align: left;
  padding: 20px;
}

tr {
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #dcdcdc;
}

@media only screen and (max-width: 1500px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 200px;
    margin-left: 150px;
  }

  td:before {
    position: absolute;
    top: 12px;
    left: 6px;
    padding-right: 40px;
    white-space: nowrap;
    margin-left: -150px;
  }

  td:nth-of-type(1):before {
    content: "Name";
  }

  td:nth-of-type(2):before {
    content: "Email";
  }

  td:nth-of-type(3):before {
    content: "Phone";
  }

  td:nth-of-type(4):before {
    content: "Company Name";
  }

  .table-header {
    display: none;
  }

  td {
    white-space: pre-wrap; /* Webkit */
    white-space: -moz-pre-wrap; /* Firefox */
    white-space: -pre-wrap; /* Opera <7 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* IE */
  }
}
</style>
