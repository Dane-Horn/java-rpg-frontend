<template>
    <v-container>
      <v-row>
        <v-col cols="2">
          <TilesetSelect @changed="updateTileset" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <PlayerList />
        </v-col>
        <v-col>
          <Map :tileset="tileset"></Map>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
</template>

<script>
import { Map, PlayerList, TilesetSelect } from "../components";

export default {
  name: "MapScreen",
  components: {
    Map,
    PlayerList,
    TilesetSelect
  },
  data() {
    return {
      tileset: ""
    };
  },
  methods: {
    updateTileset(event) {
      this.tileset = event;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "ArcadeClassic";
  font-style: normal;
  font-weight: normal;
  src: local("ArcadeClassic"),
    url("../assets/ARCADECLASSIC.woff") format("woff");
}
#app2 {
  font-family: ArcadeClassic;
  cursor: default;
}
#app {
  font-family: ArcadeClassic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>