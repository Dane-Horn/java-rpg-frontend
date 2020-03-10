<template>
  <div id="app2">
    <v-app-bar
      style="text-align: center; font-size: 30px; border-bottom: 5px solid black; background-color: #FFFFFF"
    >
      <v-img
        @click.stop="drawer = !drawer"
        src="https://i.ibb.co/rp1Rdd7/bbd-logo.png"
        max-height="50px"
        max-width="50px"
      ></v-img>
      <v-col>
        BBD RPG
      </v-col>
      <v-col>
        <router-link class="link" to="/home">Home</router-link>
      </v-col>
      <v-col cols="1">
        <router-link class="link" to="/profile">Profile</router-link>
      </v-col>
      <v-col>
        <router-link class="link" to="/maze">Maze</router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <router-link class="link" to="/login">Login</router-link>
      </v-col>
      <v-col>
        <router-link class="link" to="/signup">Signup</router-link>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link class="link" to="/home">
            <v-list-item>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/profile">
            <v-list-item>
              <v-list-item-title>
                Profile
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/maze">
            <v-list-item>
              <v-list-item-title>
                Maze
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/login">
            <v-list-item>
              <v-list-item-title>
                Login
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/signup">
            <v-list-item>
              <v-list-item-title>
                Signup
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
      drawer: false,
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
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: red;
}
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
