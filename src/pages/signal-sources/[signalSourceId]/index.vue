<template>
  <div class="signal-source-details">
    <!-- Side Nav -->
    <div class="side-nav">
      <div class="side-nav-head">
        <input type="text" placeholder="Search" />
      </div>

      <div class="side-nav-scroll-area">
        <ul>
          <li>
            <NuxtLink :to="`/signal-sources/${signalSource.id}`"
              >Overview</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="`/signal-sources/${signalSource.id}/signals`"
              >Signals</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Left content -->
    <div>
      <div class="tool-bar">
        <button @click="editProperties">Edit properties</button>
        <button>Delete</button>
        <button>Refresh</button>
        <button>Manage view</button>
      </div>

      <div class="content-header">
        <h3>Basic info</h3>
      </div>

      <div class="content-body">
        <div>
          <div>
            <div>{{ signalSource.name }}</div>
            <div>{{ signalSource.id }}</div>
            <div>{{ signalSource.description }}</div>
          </div>
        </div>

        <div>
          <div>
            <label>Id</label>
            <div>{{ signalSource.id }}</div>
          </div>

          <div>
            <label>Name</label>
            <div>{{ signalSource.name }}</div>
          </div>

          <div>
            <label>Description</label>
            <div>{{ signalSource.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const resourceServiceOptions = useRuntimeConfig().public.resourceService;

const signalSourceId = route.params.signalSourceId;

const {
  data: signalSource,
  error,
  execute,
  refresh,
} = await useFetch(
  `${resourceServiceOptions.baseAddress}/api/v1/signal-sources/${signalSourceId}`
);

function editProperties() {
  router.push(`/signal-sources/${signalSource.value.id}/edit-properties`);
}
</script>

<style lang="scss" scoped>
.signal-source-details {
  display: flex;
  flex-direction: row;
}
</style>
