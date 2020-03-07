<template>
  <v-select @input="$emit('changed', $event)" :items="tilesets"></v-select>
</template>

<script>
export default {
  name: "TilesetSelect",
  data() {
    return {
      tilesets: ["dungeon", "retro"]
    };
  },
  methods: {}
};
</script>

<style>
</style>