<template>
  <v-app id="app2">
    <v-app-bar
      height="60px"
      flat
      style="text-align: center; font-size: 30px; border-bottom: 5px solid black; background-color: #FFFFFF"
    >
      <v-row>
        <v-img
          class="my-auto"
          @click.stop="drawer = !drawer"
          src="https://i.ibb.co/rp1Rdd7/bbd-logo.png"
          max-height="60px"
          max-width="60px"
        ></v-img>
        <v-col xs="10" sm="10" md="10" lg="1">
          <span v-if="$store.state.player.name">{{$store.state.player.name}}</span>
          <span v-else>BBDRPG</span>
        </v-col>
        <v-col>
          <router-link class="link hidden-md-and-down" to="/home">
            <div>Home</div>
          </router-link>
        </v-col>
        <v-col cols="1">
          <router-link class="link hidden-md-and-down" to="/profile">
            <div>Profile</div>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="link hidden-md-and-down" to="/maze">
            <div>Maze</div>
          </router-link>
        </v-col>
        <v-col v-if="!$store.state.player.name">
          <router-link class="link hidden-md-and-down" to="/login">
            <div>Login</div>
          </router-link>
        </v-col>
        <v-col v-if="!$store.state.player.name">
          <router-link class="link hidden-md-and-down" to="/signup">
            <div>Signup</div>
          </router-link>
        </v-col>
        <v-col
          v-if="$store.state.player.name"
          @click=" () => {$store.dispatch('disconnect'); $store.state.player.name = ''}"
        >
          <router-link class="link hidden-md-and-down" to="/login">
            <div>Logout</div>
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <router-link class="link" to="/home">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/profile">
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/maze">
            <v-list-item>
              <v-list-item-title>Maze</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/login">
            <v-list-item>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link class="link" to="/signup">
            <v-list-item>
              <v-list-item-title>Signup</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
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
.d-none {
  display: none;
}
.link {
  text-decoration: none;
}
.link > div {
  color: black;
}
.link > div:hover {
  color: red;
}
@font-face {
  font-family: "ArcadeClassic";
  font-style: normal;
  font-weight: normal;
  src: local("ArcadeClassic"), url("assets/ARCADECLASSIC.woff") format("woff");
}
#app2 {
  overflow: hidden;
  max-height: 100%;
  font-family: ArcadeClassic;
  cursor: default;
  color: black;
}
#app {
  overflow: hidden;
  font-family: ArcadeClassic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}
</style>
