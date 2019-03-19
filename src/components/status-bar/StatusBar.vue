<template>
  <div class="status-bar">
    <!--<version-status />-->
    <span>SimCo</span><!--
    --><span><a href="#/legal">Legal</a></span><!--
    --><span><a target="_blank" href="#">Discord</a></span><!--
    --><players-online-status /><!--
    --><socket-status />
  </div>
</template>

<script>
import SocketStatus from '@/components/status-bar/SocketStatus';
import PlayersOnlineStatus from '@/components/status-bar/PlayersOnlineStatus';
import VersionStatus from '@/components/status-bar/VersionStatus';

export default {
  name: 'StatusBar',
  components: { VersionStatus, PlayersOnlineStatus, SocketStatus },
};
</script>

<style scoped>
.status-bar {
  height: 20px;
  width: calc(100vw - 8px);
  bottom: 0;
  position: absolute;
  border-top: 1px solid #CCC;
  padding: 4px;
  padding-bottom: 0;
  text-align: right;
}

.status-bar>span {
  border-left: 1px solid #CCC;
  padding-left: 4px;
  padding-right: 4px;
}
</style>
