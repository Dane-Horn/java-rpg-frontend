<template>
  <v-select @input="$emit('changed', $event)" :items="tilesets" value="retro"></v-select>
</template>

<script>
export default {
  name: "TilesetSelect",
  data() {
    return {
      tilesets: ["dungeon", "retro"]
    };
  },
  methods: {},
  mounted() {
    this.$emit("changed", "retro");
  }
};
</script>

<style>
</style>