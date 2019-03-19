<template>
  <div id="app">
    <div id="game" v-if="$root.authenticated">
      <div id="view">
        <router-view />
      </div>
      <menu-bar />
      <status-bar />
    </div>
    <div id="login" v-if="!$root.authenticated">
      login
    </div>
  </div>
</template>

<script>
import StatusBar from '@/components/status-bar/StatusBar';
import MenuBar from '@/components/menu-bar/MenuBar';

export default {
  name: 'App',
  components: { MenuBar, StatusBar },
};
</script>

<style>
body {
  margin: 0;
  background-color: #F8F8F8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100vh - 24px);
}
#view {
  position: absolute;
  width: calc(100vw - 168px);
  left: 168px;
}
#game {
  height: 100%;
}
#login {
  height: 100%;
}
a:visited {
  color: blue;
}
</style>
