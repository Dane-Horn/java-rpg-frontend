<template>
  <v-text-field :disabled="this.$store.state.connected" @input="updateName($event)"></v-text-field>
</template>

<script>
export default {
  name: "PlayerNameInput",
  methods: {
    updateName(event) {
      this.$store.commit("setPlayerName", event);
    }
  }
};
</script>

<style>
</style>