// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPlug, faUsers, faWarehouse, faChartPie, faCity, faCommentAlt, faBusinessTime, faGlobe, faHandHoldingUsd, faCertificate, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import io from 'socket.io-client/dist/socket.io.min';
import App from './App';
import router from './router';
import PacketHandler from './net/packet-handler';

library.add(faCoffee);
library.add(faPlug);
library.add(faUsers);
library.add(faWarehouse);
library.add(faChartPie);
library.add(faCity);
library.add(faCommentAlt);
library.add(faBusinessTime);
library.add(faGlobe);
library.add(faDiscord);
library.add(faHandHoldingUsd);
library.add(faCertificate);
library.add(faBriefcase);
library.add(faUniversity);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const store = {
  socket: null,
  socketStatus: '...',
};

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  data: {
    sharedState: store,
    authenticated: true,
  },
  components: { App },
  template: '<App/>',
  mounted() {
    this.sharedState.socket = io.connect('http://localhost:49534', {
      transports: ['websocket'],
    });
    this.$emit('socketStatus', 'connecting...');

    this.sharedState.socket.on('connect', () => {
      this.$emit('socketStatus', 'connected');
    });

    this.sharedState.socket.on('disconnect', () => {
      this.$emit('socketStatus', 'disconnected');
    });

    this.sharedState.socket.on('error', () => {
      this.$emit('socketStatus', 'error');
    });
  },
});

const packetHandler = new PacketHandler(vm);
vm.sharedState.socket.on('message', (data) => {
  packetHandler.handlePacket(JSON.parse(data));
});
