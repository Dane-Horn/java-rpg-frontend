<template>
  <div id="app2">
    <v-app-bar elevation="0" style="background-color: #FFFFFF">
      <v-col cols="1">
        <v-img
          src="https://i.ibb.co/rp1Rdd7/bbd-logo.png"
          max-height="50px"
          max-width="50px"
        ></v-img>
      </v-col>
      <v-col cols="2">
        <v-toolbar-title>BBD RPG</v-toolbar-title>
      </v-col>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import {} from "./components/index";

export default {
  name: "App",
  components: {},
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
  src: local("ArcadeClassic"), url("assets/ARCADECLASSIC.woff") format("woff");
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
