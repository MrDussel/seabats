<template>
  <nav>
    <router-link to="/">MAP</router-link>
    <router-link to="/info">INFO</router-link>
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <p>
      MAP TILES: &copy;
      <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
      contributors &copy;
      <a href="https://carto.com/attributions">CARTO</a>
    </p>
    <p>
      WEBSITE: © 2021 Michael Schnerring, Sebastian Deuss |
      <a href="https://github.com/schnerring/seabats">GitHub</a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
:root {
  /* Material Blue */
  --blue: #1148fe;
  --grey: #e9e9e9;
  --grey2: #acacac;
  --grey3: #707070;
  --white: #ffffff;
  --black: #818181;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-areas:
    "nav"
    "main";
  grid-template-rows: auto 1fr;
  height: 100vh;
}

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  scrollbar-width: auto;
}
::-webkit-scrollbar-thumb {
  background: #262626;
}

a {
  color: var(--blue);
}
</style>

<style lang="scss" scoped>
nav {
  border-bottom: var(--grey2) solid 1px;
  display: flex;
  font-size: 14pt;
  grid-area: nav;
  justify-content: space-between;
  padding: 5px;

  a {
    color: var(--blue);
    font-weight: bold;
    color: var(--black);

    &.router-link-exact-active {
      color: var(--blue);
    }
  }
}

main {
  grid-area: main;
  overflow: hidden;
}

footer {
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 10px;
  font-size: 11px;
  text-rendering: optimizeLegibility;
  color: var(--grey3);
  grid-area: footer;
  text-align: right;
  z-index: 500;
  background: transparent;
}
footer a {
  color: inherit;
}
</style>
