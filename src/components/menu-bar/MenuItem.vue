<template>
  <a v-bind:href="href">
    <div v-bind:class="{ active: $route.path === href.substr(1) }">
      <font-awesome-icon v-bind:icon="icon" class="menu-item-icon" />
      {{ label }}
    </div>
  </a>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['label', 'href', 'icon'],
};
</script>

<style scoped>
div {
  height: 26px;
  font-size: 16px;
  padding-top: 10px;
  text-align: left;
  padding-left: 16px;
  position: relative;
}
div:before {
  content: "";
  position: absolute;
  left: 12px;
  bottom: 0;
  height: 1px;
  width: calc(100% - 24px);
  border-bottom: 1px solid #CCC;
}
.active {
  background-color: #F8F8F8;
}
.active:before {
  border-bottom: none;
}
a {
  text-decoration: none;
}
.menu-item-icon {
  width: 20px;
}
</style>
