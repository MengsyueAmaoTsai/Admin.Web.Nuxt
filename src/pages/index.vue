<template>
  <div class="home-container">
    <!-- Services -->
    <h3 class="home-title">Azure Services</h3>
    <div class="home-section" role="grid">
      <div class="home-feature-tile-container" role="row">
        <!-- First element -->
        <div class="home-feature-tile" role="gridcell">
          <a class="home-feature-link" title="Create a resource" href="/">
            <div class="home-resource-icon">
              <svg
                style="fill: #015cda"
                viewBox="0 0 16 16"
                role="presentation"
                focusable="false"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g><path d="M15.5 7.5v1h-7v7h-1v-7h-7v-1h7v-7h1v7z"></path></g>
              </svg>
            </div>

            <div class="home-feature-name">Create a resource</div>
          </a>
        </div>

        <!-- Last element -->
        <div class="home-feature-tile" role="gridcell">
          <a class="home-feature-link" href="/" title="More services">
            <div class="home-resource-icon">
              <svg
                style="fill: #015cda; width: 24px; transform: rotate(90deg)"
                viewBox="0 0 9.7 14.2"
                role="presentation"
                focusable="false"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M9 5.6 5.4 1.9v12.3h-1V1.9L.7 5.6 0 4.9 4.9 0l4.8 4.9z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="home-feature-name">More services</div>
          </a>
        </div>
      </div>
    </div>

    <h3 class="home-title">Resources</h3>
    <h3 class="home-title">Navigate</h3>
    <h3 class="home-title">Tools</h3>
    <h3 class="home-title">Useful links</h3>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.home-container {
  padding: 24px 24.66666667px;
  font-size: 13px;
  max-width: 1063px;
  margin: 0 auto;
  color: #faf9f8;
  fill: #f3f2f1;
}

@media (min-width: 480px) {
  .home-container {
    padding-left: 37px;
    padding-right: 37px;
  }
}

@media (min-width: 920px) {
  .home-container {
    padding-left: 74px;
    padding-right: 74px;
  }
}

.home-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  margin-block-start: 0;
  margin-bottom: 16px;
  min-width: 300px;
}

.home-section {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 480px) {
  .home-section {
    min-width: 300px;
  }
}

.home-section:not(:last-child) {
  margin-bottom: 40px;
}

.home-feature-tile-container {
  padding-left: 0;
  list-style: none;
  margin-top: -7px;
  margin-left: -7px;
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 1436px) {
  .home-feature-tile-container {
    justify-content: space-between;
  }
}

@media (min-width: 1211px) {
  .home-feature-tile-container {
    justify-content: space-between;
  }
}
@media (min-width: 1259px) {
  .home-feature-tile-container {
    justify-content: space-between;
  }
}

.home-feature-tile {
  height: 100px;
  width: 100px;
  flex: 0 0 auto;
  cursor: pointer;
  text-align: center;
  border: 1px solid transparent;
  margin: 0 0 0 7px;
  box-sizing: border-box;
}

.home-feature-link {
  padding: 14px 4px 9px 4px;
  box-sizing: border-box;
  color: #1890f1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home-resource-icon {
  flex: 0 0 auto;
  height: 32px;
  width: 32px;
  margin-bottom: 9px;
}

.home-feature-name {
  max-width: 100%;
  display: block;
  display: -webkit-box;
  line-height: 17px;
  max-height: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
