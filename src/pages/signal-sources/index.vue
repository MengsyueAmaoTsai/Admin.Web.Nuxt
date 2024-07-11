<template>
  <div>
    <div>
      <button @click="newSignalSource">New signal source</button>
      <button>Refresh</button>
      <button>Manage View</button>
      <button>Delete</button>
    </div>

    <MessageBar />

    <div>
      <input type="text" placeholder="Search" />
    </div>
    <div>
      {{ signalSources.totalCount }}
      {{ signalSources.totalCount === 1 ? "signal source" : "signal sources" }}
      found
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created at</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="signalSource in signalSources.items" :key="signalSource.id">
          <td>
            <input type="checkbox" />
          </td>

          <td>
            <NuxtLink :to="`/signal-sources/${signalSource.id}`">
              <div>
                {{ signalSource.id }}
              </div>
            </NuxtLink>
          </td>

          <td>
            <NuxtLink :to="`/signal-sources/${signalSource.id}`">
              <div>
                {{ signalSource.name }}
              </div>
            </NuxtLink>
          </td>

          <td>{{ signalSource.description }}</td>

          <td>{{ signalSource.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const {
  data: signalSources,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-sources`
);

const router = useRouter();

function newSignalSource() {
  router.push("/signal-sources/create");
}
</script>

<style lang="scss" scoped></style>
