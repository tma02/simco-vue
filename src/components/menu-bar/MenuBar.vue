<template>
  <div>
    <menu-item label="Dashboard" icon="chart-pie" href="#/"></menu-item>
    <menu-item label="Orders" icon="business-time" href="#/orders"></menu-item>
    <menu-item label="Warehouse" icon="warehouse" href="#/warehouse"></menu-item>
    <menu-item label="Facilities" icon="city" href="#/facilities"></menu-item>
    <menu-item label="Market" icon="globe" href="#/exchange"></menu-item>
    <menu-item label="Chat" icon="comment-alt" href="#/chat"></menu-item>
  </div>
</template>

<script>
import MenuItem from '@/components/menu-bar/MenuItem';

export default {
  name: 'MenuBar',
  components: { MenuItem },
};
</script>

<style scoped>
div {
  width: 168px;
  height: 100%;
  background-color: #EEE;
  user-select: none;
}
</style>
