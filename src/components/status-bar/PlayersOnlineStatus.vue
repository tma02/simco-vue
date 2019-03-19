<template>
  <span>
    <font-awesome-icon icon="users" />: {{ playersOnlineStatus }}
  </span>
</template>

<script>
export default {
  name: 'PlayersOnlineStatus',
  data() {
    return {
      playersOnlineStatus: '...',
    };
  },
  created() {
    this.$root.$on('playersOnlineStatus', (status) => {
      this.playersOnlineStatus = status;
    });
  },
};
</script>

<style scoped>

</style>
