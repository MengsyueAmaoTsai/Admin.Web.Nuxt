<template>
  <div class="current-user">
    <button
      class="current-user-menu-button"
      @click="menuVisible = !menuVisible"
    >
      <div
        class="current-user-menu-header"
        :title="`Name: ${currentUser.name}\nEmail: ${currentUser.email}`"
      >
        <div class="current-user-info-container">
          <div class="current-user-email">{{ currentUser.email }}</div>
          <div class="current-user-name">{{ currentUser.name }}</div>
        </div>

        <div class="current-user-avatar-container">
          <img class="current-user-avatar-image" :src="currentUser.avatar" />
        </div>
      </div>
    </button>

    <div v-show="menuVisible">
      <div class="current-user-menu-container">
        <div class="current-user-menu-main">
          <div class="current-user-menu-body">
            <div class="current-account-info">
              <div class="current-account-company">
                <div class="current-account-company-logo">
                  <div class="current-account-company-name">Microsoft</div>
                </div>
              </div>
              <div class="header-spacer"></div>

              <div class="current-user-info">
                <a
                  class="current-user-picture-container"
                  href=""
                  target="_blank"
                  title="Add or change your picture"
                >
                  <div class="current-user-picture" role="presentation"></div>
                </a>

                <div class="current-user-details">
                  <div class="current-user-details-primary">
                    mengsyue.tsai@outlook.com
                  </div>

                  <div class="current-user-details-secondary">
                    mengsyue.tsai@outlook.com
                  </div>

                  <div class="current-user-commands">
                    <button class="profile-button" type="button">
                      My Microsoft Account
                    </button>

                    <div class="more-commands">
                      <button
                        class="command-dropdown-button"
                        type="button"
                        @click="commandMenuVisible = !commandMenuVisible"
                      >
                        <div class="command-dropdown-button-icon"></div>
                      </button>

                      <ul class="command-list" v-show="commandMenuVisible">
                        <li
                          v-for="command in commands"
                          role="none"
                          class="command-list-item"
                        >
                          <button class="command-button">
                            {{ command.name }}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <a class="sign-out-button" role="button" href="/" target="_top"
                >Sign out</a
              >
            </div>

            <div class="account-list-container">
              <ul class="account-list">
                <li style="box-sizing: border-box">
                  <div class="account-item-container">
                    <a class="current-user-sign-in-item">
                      <div class="current-user-sign-in-item-image"></div>
                      <div class="current-user-account-info">
                        <div class="current-user-truncate">
                          Sign in with a different account
                        </div>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menuVisible = ref<boolean>(false);
const commandMenuVisible = ref<boolean>(false);

const currentUser = {
  name: "Mengsyue Amao Tsai",
  email: "mengsyue.tsai@outlook.com",
  avatar: "https://avatars.githubusercontent.com/u/88216325",
};

const commands = [
  {
    name: "My permissions",
  },
  {
    name: "View my bill",
  },
];
</script>

<style>
.current-user {
  position: relative;
  flex: 0 0 auto;
  box-sizing: border-box;
  z-index: 200;
}

.current-user-menu-button {
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;
  justify-content: center;
  fill: #fff;
}

.current-user-menu-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
}

.current-user-info-container {
  text-align: left;
  flex: 1 1 auto;
  padding-left: 20px;
}

.current-user-email {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: normal;
  max-width: 160px;
}

.current-user-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 10px;
  line-height: normal;
  text-transform: uppercase;
  max-width: 160px;
}

.current-user-menu-container {
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  position: relative;
}

.current-user-menu-main {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  z-index: 1000000;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: visibility 0s linear 120ms, opacity 120ms ease;
  transition: visibility 0s linear 120ms, opacity 120ms ease;
  width: 320px;
  max-width: 100vw;
  -webkit-box-shadow: 0 24px 54px rgba(0, 0, 0, 0.15),
    0 4.5px 13.5px rgba(0, 0, 0, 0.08);
  box-shadow: 0 24px 54px rgba(0, 0, 0, 0.15),
    0 4.5px 13.5px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  opacity: 1;
  visibility: visible;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  inset: 0px auto auto -100px;
}

.current-user-menu-body {
  text-align: left;
  color: #333;
  background-color: #fff;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  color: #fff;
  background-color: #1a1a1a;
}

.current-account-info {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto;
  grid-template-columns: auto 1fr auto;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.current-account-company {
  padding-left: 14px;
  padding-right: 14px;
  font-size: 13px;
  display: block;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  grid-column: 1 / 2;
}

.current-account-company-logo {
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='108' height='23'%3E%3Cpath d='M44.836 4.6v13.8h-2.4V7.583H42.4L38.119 18.4h-1.588L32.142 7.583h-.028V18.4H29.9V4.6h3.436L37.3 14.83h.057L41.545 4.6zm2 1.049a1.268 1.268 0 01.419-.967 1.411 1.411 0 011-.39 1.392 1.392 0 011.02.4 1.3 1.3 0 01.405.957 1.249 1.249 0 01-.414.953 1.428 1.428 0 01-1.011.385A1.4 1.4 0 0147.25 6.6a1.263 1.263 0 01-.41-.949M49.41 18.4h-2.329V8.507h2.329zm7.064-1.694a3.225 3.225 0 001.145-.24 4.808 4.808 0 001.155-.636V18a4.659 4.659 0 01-1.266.481 6.9 6.9 0 01-1.554.163 4.707 4.707 0 01-4.918-4.907 5.644 5.644 0 011.4-3.932 5.054 5.054 0 013.955-1.545 5.42 5.42 0 011.324.169 4.4 4.4 0 011.063.39v2.232a4.73 4.73 0 00-1.1-.611 3.187 3.187 0 00-1.15-.217 2.918 2.918 0 00-2.223.9 3.366 3.366 0 00-.847 2.415 3.217 3.217 0 00.813 2.339 2.938 2.938 0 002.209.837m8.931-8.363a2.892 2.892 0 01.5.039 2.025 2.025 0 01.376.1v2.357a2.075 2.075 0 00-.535-.255 2.649 2.649 0 00-.851-.12 1.811 1.811 0 00-1.449.722 3.47 3.47 0 00-.592 2.223V18.4h-2.335V8.507h2.329v1.559h.039a2.731 2.731 0 01.962-1.266 2.615 2.615 0 011.55-.457m1 5.254a5.355 5.355 0 011.387-3.887 5.1 5.1 0 013.85-1.434 4.741 4.741 0 013.623 1.381 5.208 5.208 0 011.3 3.729 5.259 5.259 0 01-1.385 3.83 5.02 5.02 0 01-3.773 1.424 4.931 4.931 0 01-3.652-1.352 4.984 4.984 0 01-1.349-3.688m2.426-.076a3.53 3.53 0 00.7 2.367 2.5 2.5 0 002.011.818 2.344 2.344 0 001.934-.818 3.78 3.78 0 00.664-2.425 3.649 3.649 0 00-.688-2.411 2.39 2.39 0 00-1.929-.813 2.441 2.441 0 00-1.988.852 3.707 3.707 0 00-.707 2.43m11.2-2.416a1 1 0 00.317.785 5.431 5.431 0 001.405.716 4.768 4.768 0 011.959 1.256 2.608 2.608 0 01.563 1.689 2.718 2.718 0 01-1.073 2.243 4.565 4.565 0 01-2.9.846 6.962 6.962 0 01-1.362-.149 6.036 6.036 0 01-1.265-.38v-2.29a5.74 5.74 0 001.367.7 4.009 4.009 0 001.328.26 2.37 2.37 0 001.164-.221.792.792 0 00.375-.741 1.027 1.027 0 00-.389-.813 5.772 5.772 0 00-1.478-.766 4.56 4.56 0 01-1.828-1.212 2.657 2.657 0 01-.539-1.713 2.706 2.706 0 011.063-2.2 4.245 4.245 0 012.764-.862 6.669 6.669 0 011.164.116 5.131 5.131 0 011.078.3v2.214a4.943 4.943 0 00-1.078-.53 3.61 3.61 0 00-1.222-.221 1.776 1.776 0 00-1.035.26.822.822 0 00-.37.712m5.241 2.493a5.355 5.355 0 011.386-3.89 5.1 5.1 0 013.85-1.434 4.741 4.741 0 013.623 1.381 5.208 5.208 0 011.3 3.729 5.259 5.259 0 01-1.385 3.83 5.02 5.02 0 01-3.773 1.424 4.931 4.931 0 01-3.652-1.352 4.984 4.984 0 01-1.349-3.688m2.426-.076a3.535 3.535 0 00.7 2.367 2.506 2.506 0 002.012.818 2.344 2.344 0 001.934-.818 3.78 3.78 0 00.664-2.425 3.649 3.649 0 00-.688-2.411 2.391 2.391 0 00-1.93-.813 2.44 2.44 0 00-1.987.852 3.707 3.707 0 00-.707 2.43m15.464-3.109H99.7V18.4h-2.359v-7.988h-1.655V8.507h1.655V7.13a3.425 3.425 0 011.016-2.555 3.56 3.56 0 012.6-1 5.949 5.949 0 01.751.043 3.025 3.025 0 01.577.13v2.016a2.381 2.381 0 00-.4-.164 2.106 2.106 0 00-.664-.1 1.405 1.405 0 00-1.126.457 2.015 2.015 0 00-.395 1.356v1.194h3.469V6.283l2.338-.712v2.936h2.358v1.905h-2.358v4.629a1.954 1.954 0 00.332 1.29 1.329 1.329 0 001.045.375 1.569 1.569 0 00.486-.1 2.271 2.271 0 00.5-.231V18.3a2.765 2.765 0 01-.736.231 5.072 5.072 0 01-1.015.105 2.889 2.889 0 01-2.209-.784 3.341 3.341 0 01-.736-2.363z' fill='%23fff'/%3E%3Cpath fill='%23f25022' d='M0 0h10.931v10.931H0z'/%3E%3Cpath fill='%237fba00' d='M12.069 0H23v10.931H12.069z'/%3E%3Cpath fill='%2300a4ef' d='M0 12.069h10.931V23H0z'/%3E%3Cpath fill='%23ffb900' d='M12.069 12.069H23V23H12.069z'/%3E%3C/svg%3E");
  width: 16px;
  height: 16px;
  float: left;
  margin-right: 4px;
  width: 80px;
}

.current-account-company-name {
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.current-user-info {
  display: block;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 132px;
  width: 100%;
  -ms-grid-column: 1;
  -ms-grid-column-span: 3;
  grid-column: 1 / 4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-spacer {
  display: block;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.current-user-picture-container {
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 88px;
  height: 88px;
  margin-left: 16px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.current-user-picture {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("https://avatars.githubusercontent.com/u/88216325");
}

.current-user-details {
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  font-size: 13px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  width: 0;
  padding-right: 12px;
}

.current-user-details-primary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 4px;
  margin-top: 0;
}

.current-user-details-secondary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1px;
  margin-top: 3px;
  font-size: 13px;
}

.current-user-commands {
  position: relative;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1px;
  margin-top: 4px;
  padding: 0;
}
.sign-out-button {
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1 / 2;
  -ms-grid-column: 3;
  -ms-grid-column-span: 1;
  grid-column: 3 / 4;
  font-size: 13px;
  padding: 15px 14px;
  color: #fff;
  background-color: #1a1a1a;
}
.account-list-container {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, #fff),
      to(rgba(255, 255, 255, 0))
    ),
    -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.44)), color-stop(40%, rgba(0, 0, 0, 0.16)), to(rgba(0, 0, 0, 0)));
  background: linear-gradient(#fff 50%, rgba(255, 255, 255, 0)),
    linear-gradient(
      rgba(0, 0, 0, 0.44) 0,
      rgba(0, 0, 0, 0.16) 40%,
      rgba(0, 0, 0, 0) 100%
    );
  background-repeat: no-repeat;
  background-size: 100% 12px, 100% 6px;
  background-attachment: local, scroll;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
  max-height: 270px;
  background: 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.account-list {
  list-style: none;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.current-user-avatar-container {
  height: 28px;
  width: 28px;
  flex: 0 0 auto;
  padding-left: 6px;
  padding-right: 6px;
  box-sizing: content-box;
}

.current-user-account-info {
  font-size: 12px;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 48px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  width: 0;
}
.current-user-avatar-image {
  height: 28px;
  width: 28px;
  border: 0;
  border-radius: 28px;
}

.account-item-container {
  height: 60px;
  position: relative;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.current-user-sign-in-item {
  color: #1890f1;
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #ddd;
  background-color: rgba(255, 255, 255, 0.08);
}
.current-user-sign-in-item-image {
  overflow: hidden;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' stroke='%23fff'%3E%3Cg class='mectrl_stroke' stroke-width='1.9' fill='none'%3E%3Ccircle cx='32' cy='32' r='30.25'/%3E%3Cg transform='matrix(1.1 0 0 1.1 8.8 5.61)'%3E%3Ccircle class='mectrl_stroke' cx='20' cy='16' r='7'/%3E%3Cpath class='mectrl_stroke' d='M30 35h10m-5-5v10M30.833 32.09A11 11 0 009 34'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  float: left;
  margin-left: 16px;
  margin-right: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
}

.current-user-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 12px;
}

.profile-button {
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1px;
  font-size: 13px;
  margin-right: 34px;
  display: block;
  max-width: fit-content;
  color: #0088d6;
  background-color: inherit;
  text-decoration: none;
}

.more-commands {
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 1px;
  right: 0;
}

.command-dropdown-button {
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  background-color: #1a1a1a;
}
.command-dropdown-button-icon {
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  line-height: normal;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' fill='%23fff'%3E%3Cg class='mectrl_fill'%3E%3Ccircle r='2' cx='12' cy='24'/%3E%3Ccircle r='2' cx='24' cy='24'/%3E%3Ccircle r='2' cx='36' cy='24'/%3E%3C/g%3E%3C/svg%3E");
}

.command-list {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: visibility 0s linear 130ms, opacity 130ms ease;
  transition: visibility 0s linear 130ms, opacity 130ms ease;
  max-width: 260px;
  min-width: 130px;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #ccc !important;
  color: #333 !important;
  background-color: #fff !important;
  opacity: 1;
  visibility: visible;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  color: #fff !important;
  background-color: #1a1a1a !important;
  inset: -55.5px auto auto -128px;
}

.command-list-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  height: 36px;
}

.command-button {
  height: auto;
  min-width: auto;
  min-height: auto;
  border-style: none;
  border-width: 0;
  padding: 0;
  margin: 0;
  outline-style: none !important;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
  font-family: "Segoe UI", "Segoe UI Web Regular", "Segoe UI Symbol",
    "Helvetica Neue", "BBAlpha Sans", "S60 Sans", Arial, sans-serif;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: block;
  padding: 0 10px;
  line-height: 36px;
  font-size: 14px;
  color: #fff !important;
  background-color: #1a1a1a !important;
}
</style>
