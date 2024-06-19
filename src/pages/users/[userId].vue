<template>
  <div>
    <h2>Meng Syue Tsai</h2>
    <p>User</p>
  </div>

  <div>
    <button>Edit properties</button>
    <button>Delete</button>
    <button>Refresh</button>
    <button>Reset password</button>
    <button>Revoke sessions</button>
    <button>Manage View</button>
  </div>

  <h3>Basic Info</h3>
  <table>
    <tbody>
      <tr>
        <th>User Id</th>
        <td>{{ user.id }}</td>
      </tr>

      <tr>
        <th>Created date time</th>
        <td>{{ user.createdAt }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const route = useRoute();
const userId = ref(route.params.userId);

const {
  data: user,
  error,
  execute,
  refresh,
} = await useFetch(`http://localhost:11000/api/v1/users/${userId.value}`);
</script>
