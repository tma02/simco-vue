<template>
  <span>
    s: {{ serverVersion }} c: {{ clientVersion }}
  </span>
</template>

<script>
export default {
  name: 'VersionStatus',
  data() {
    return {
      serverVersion: '...',
      clientVersion: '...',
    };
  },
  created() {
    this.$root.$on('versionStatus', (status) => {
      this.serverVersion = status.serverVersion;
      this.clientVersion = status.clientVersion;
    });
  },
};
</script>

<style scoped>

</style>
