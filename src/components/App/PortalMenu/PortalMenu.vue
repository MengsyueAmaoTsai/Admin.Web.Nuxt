<template>
  <div class="portal-menu">
    <nav class="portal-menu__nav">
      <div class="portal-menu__header">
        <button
          class="portal-menu__item-link portal-menu__hamburger"
          title="Hide portal menu"
        >
          <div class="portal-menu_header-icon">
            <svg
              height="100%"
              width="100%"
              role="presentation"
              focusable="false"
            >
              <use href="#FxSymbol0-003"></use>
            </svg>
          </div>
        </button>
      </div>

      <div class="portal-menu__top">
        <a
          class="portal-menu__item-link"
          v-for="item in topItems"
          :key="item.label"
          :href="item.href"
        >
          <div class="portal-menu__icon"></div>
          <div class="portal-menu__label">{{ item.label }}</div>
        </a>
      </div>

      <div class="portal-menu__favorites">
        <div class="portal-menu__divider"></div>
        <div></div>
        <span class="portal-menu__label-favorites">Favorites</span>
        <div class="portal-menu__divider"></div>
      </div>

      <div class="portal-menu__middle">
        <ul class="portal-menu__favorites-list">
          <li
            class="portal-menu__item"
            v-for="item in middleItems"
            key="item.label"
          >
            <a class="portal-menu__item-link" :href="item.href">
              <div class="portal-menu__icon"></div>
              <div class="portal-menu__label">{{ item.label }}</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const topItems = [
  { label: "Create a resource", icon: "icon", href: "/create-resource" },
  { label: "Home", icon: "icon", href: "/home" },
  { label: "Dashboard", icon: "icon", href: "/dashboard" },
  { label: "All services", icon: "icon", href: "/all-services" },
];

const middleItems = [
  {
    label: "All resources",
    icon: "icon",
    href: "/resources",
  },
  {
    label: "Resource groups",
    icon: "icon",
    href: "/resource-groups",
  },
  {
    label: "App Services",
    icon: "icon",
    href: "/resource-groups",
  },
  {
    label: "Function App",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "SQL Databases",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Azure Cosmos DB",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Virtual machines",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Load balances",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Storage accounts",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Virtual networks",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Microsoft Entra ID",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Monitor",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Advisor",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Microsoft Defender for Cloud",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Cost Management + Billing",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Help + support",
    icon: "icon",
    href: "/resource-groups",
  },

  {
    label: "Cost Management",
    icon: "icon",
    href: "/resource-groups",
  },
];
</script>

<style lang="scss" scoped>
.portal-menu {
  z-index: 6;
  height: 100%;
  font-size: 13px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
}

.portal-menu__nav {
  width: 225px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.portal-menu__hamburger {
  display: flex;
  cursor: pointer;
}

.portal-menu__top {
  flex: 0 0 auto;
}
.portal-menu__favorites {
  height: 32px;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.portal-menu__middle {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.portal-menu__favorites-list {
  padding: 0;
  margin: 0;
  list-style: none;
  padding-bottom: 20px;
}

.portal-menu__item {
  font-size: 100%;
  font-weight: inherit;
}

.portal-menu__item-link {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  outline: 0 !important;
  min-height: 32px;
  -webkit-user-drag: none;
  color: inherit;
  box-sizing: border-box;
  padding: 7px 0;
}

.portal-menu__icon {
  flex: 0 0 18px;
  height: 18px;
  padding-left: 15px;
  align-self: flex-start;
}

.portal-menu__label {
  font-size: 100%;
  font-weight: inherit;
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
  outline: 0;
}

.portal-menu__divider {
  margin-left: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 0;
  flex: 1 1 0;
}

.portal-menu__label-favorites {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  word-break: keep-all;
  margin-left: 10px;
}
</style>
