<template>
  <div id="app2">
    <v-app-bar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>BBD RPG</v-toolbar-title>
    </v-app-bar>
    <v-app>
      <v-container>
        <v-row>
          <v-col cols="2">
            <ConnectButton />
          </v-col>
          <v-col cols="2">
            <PlayerNameInput />
          </v-col>
          <v-col cols="2">
            <TilesetSelect v-on:changed="updateTileset" />
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
    </v-app>
  </div>
</template>

<script>
import {
  Map,
  ConnectButton,
  PlayerList,
  PlayerNameInput,
  TilesetSelect
} from "./components/index";

export default {
  name: "App",
  components: {
    Map,
    ConnectButton,
    PlayerList,
    PlayerNameInput,
    TilesetSelect
  },
  data() {
    return {
      tileset: "dungeon"
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
  src: local("ArcadeClassic"), url("assets/ARCADECLASSIC.woff") format("woff");
}
#app2 {
  font-family: ArcadeClassic;
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
