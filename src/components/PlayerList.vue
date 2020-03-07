<template>
  <v-list disabled>
    <v-subheader>Active Players</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="(player, i) in activePlayers" :key="i">
        <v-list-item-content>
          <v-list-item-title v-html="player"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "PlayerList",
  data() {
    return {
      activePlayers: []
    };
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.connected,
      connected => {
        if (connected) {
          this.$store.state.stompClient.subscribe(`/player/active`, message => {
            let players = JSON.parse(message.body);
            this.activePlayers = players;
          });
        } else {
          this.activePlayers = [];
        }
      }
    );
  }
};
</script>

<style>
</style>