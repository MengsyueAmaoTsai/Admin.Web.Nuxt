<template>
  <div>
    <h2>Create new user</h2>
    <p>Create a new internal user in your system.</p>
    <button>X</button>
  </div>

  <div>
    <div class="basic">
      <table>
        <tbody>
          <tr>
            <th>Identity</th>
          </tr>

          <tr>
            <th>E-Mail</th>
            <td>
              <input type="email" placeholder="example@domain.com" />
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <th>Password</th>
            <td>
              <input type="password" value="{{ password }}" />
              <div><input type="checkbox" checked />Auto-generate password</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="properties"></div>

    <button>Create</button>
  </div>
</template>

<script setup lang="ts">
const passwordGenerator = usePasswordGenerator();
const password = passwordGenerator.value.generate();
</script>

<style></style>
