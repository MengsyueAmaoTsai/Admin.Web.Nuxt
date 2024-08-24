<template>
  <div class="portal">
    <TopBar />

    <!-- Not implemented -->
    <div class="global-notification-banner"></div>

    <!-- Not implemented -->
    <div class="portal-tip"></div>

    <div class="portal-region">
      <div class="portal-main-region">
        <div class="portal-main">
          <!-- Not implemented -->
          <SideBar v-show="sideBarVisible"></SideBar>

          <main class="portal-content">
            <!-- Not implemented -->
            <div class="settings-layout"></div>

            <!-- Not implemented -->
            <div class="start-board"></div>

            <div class="home-target">
              <div class="home-container-all">
                <!-- Not implemented -->
                <div class="home-fragments"></div>
                <slot />
              </div>
            </div>

            <!-- Not implemented -->
            <div class="journey-target">
              <!-- Not implemented -->
              <div class="journey-breadcrumb">
                <div class="journey-breadcrumb-container"></div>
              </div>

              <!-- Not implemented -->
              <div class="journey-layout">
                <iframe
                  class="part-frame"
                  allow="microphone *; encrypted-media *;clipboard-read;clipboard-write;"
                  role="presentation"
                  allowfullscreen="true"
                  sandbox="allow-scripts allow-popups allow-modals allow-forms allow-popups-to-escape-sandbox allow-downloads allow-presentation allow-same-origin"
                  src="http://localhost:9995/users"
                ></iframe>
              </div>
            </div>
          </main>

          <!-- Not implemented -->
          <div class="context-pane"></div>
          <div class="context-pane"></div>
        </div>

        <!-- Not implemented -->
        <div class="portal-control"></div>
      </div>

      <!-- Not implemented -->
      <div></div>
    </div>

    <!-- Not implemented -->
    <div class="context-menu"></div>
  </div>
  <SvgProvider />
</template>

<script lang="ts" setup>
const sideBarVisible = useState("sideBarVisible", () => false);
</script>

<style lang="scss" scoped>
.portal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: normal;
}
</style>
