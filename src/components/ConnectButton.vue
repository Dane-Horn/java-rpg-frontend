<template>
  <v-btn
    id="connect"
    :disabled="this.$store.state.player.name === ''"
    @click="setConnected"
  >{{ $store.state.connected ? 'Disconnect' : 'Connect' }}</v-btn>
</template>

<script>
export default {
  name: "ConnectButton",
  methods: {
    setConnected() {
      if (this.$store.state.connected) this.$store.dispatch("disconnect");
      else this.$store.dispatch("connect", "Dane");
    }
  }
};
</script>

<style>
</style>