<template>
  <span>
    <font-awesome-icon icon="plug" />: <span v-bind:class="classObject">{{ socketStatus }}</span>
  </span>
</template>

<script>
export default {
  name: 'SocketStatus',
  data() {
    return {
      socketStatus: this.$root.sharedState.socketStatus,
      classObject: {
        connected: false,
        disconnected: false,
      },
    };
  },
  created() {
    this.$root.$on('socketStatus', (status) => {
      this.socketStatus = status;
      if (status === 'connected') {
        this.classObject.connected = true;
        this.classObject.disconnected = false;
      } else {
        this.classObject.connected = false;
        this.classObject.disconnected = true;
      }
    });
  },
};
</script>

<style scoped>
.connected {
  color: green;
}
.disconnected {
  color: red;
}
</style>
