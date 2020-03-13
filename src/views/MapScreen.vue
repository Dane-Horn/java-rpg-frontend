<template>
    <div>
        <TilesetSelect style="text-align: center;" @changed="updateTileset" />
        <v-container>        
            <v-row>
                <v-col>
                    <PlayerList />
                </v-col>
                <v-col>
                    <Map :tileset="tileset"></Map>
                </v-col>
                <v-col>
                </v-col>
            </v-row>
        </v-container>
    </div>
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