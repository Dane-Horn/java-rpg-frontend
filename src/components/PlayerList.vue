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
      (state, getters) => getters.activePlayers,
      activePlayers => {
        this.activePlayers = activePlayers;
      }
    );
  }
};
</script>

<style>
</style>