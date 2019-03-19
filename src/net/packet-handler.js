export default class PacketHandler {
  constructor(vm) {
    this.vm = vm;
    this.handlers = {
      /* Players online */
      'players-online': (data) => {
        this.vm.$emit('playersOnlineStatus', data.count);
      },
    };
  }

  handlePacket(data) {
    if (typeof this.handlers[data.packet] === 'function') {
      this.handlers[data.packet](data);
    }
  }
}
