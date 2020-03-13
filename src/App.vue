<template>
  <!-- App.vue -->
<v-app>
  <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
  <v-app-bar app flat style="background: transparent; height: fit-content!important; position: relative; flex: none!important;">
    <nav class="navbar navbar-expand-lg" style="background: transparent!important; width:100%">
        <a class="navbar-brand" href="#">
            <img src="https://i.ibb.co/rp1Rdd7/bbd-logo.png" alt="bbd-logo" border="0" style="width: 80px;" />
            <span>BBD_RPG</span>
        </a>
        <button class="navbar-toggler nes-btn is-error" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link> 
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">Link</a> -->
                    <router-link to="/profile" class="nav-link">Profile</router-link> 
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
                    <router-link to="/maze" class="nav-link" >Maze</router-link> 
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0" v-if="!$store.state.player.name">
                <li class="nav-item">
                    <router-link to="/registration" class="nav-link">Sign Up</router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0" v-if="$store.state.player.name">
                <li class="nav-item">
                    <router-link to="/preferences" class="nav-link">Preferences</router-link> 
                </li>
                <li class="nav-item" >
                    <router-link to="/login" class="nav-link" @click=" () => {$store.dispatch('disconnect'); $store.state.player.name = ''}">Logout</router-link>
                </li>
            </ul>
            <!-- <form class="form-inline my-2 my-lg-0"
                  style="display: flex; justify-content: space-evenly; flex-direction: row;">
                  <v-text-field
                    id="search"
                    placeholder="Search"
                    style="padding-top: 12px!important; margin-top: 4px;!important"
                    class=""
                  ></v-text-field>
                <button class="btn nes-btn is-error" type="submit" style="bottom: 3px; left: 3px;">Search</button>
            </form> -->
        </div>
    </nav>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  <v-footer
    padless
    style="border-top: solid 4px; background: transparent;"
  >
    <v-row no-gutters>
      <v-col></v-col>
      <v-col></v-col>
      <v-col>
        <v-card flat style="background: transparent; display: flex; justify-content: space-evenly;">
          <span>BBD</span>
          <span> | </span>
          <span><i class="nes-icon is-small heart"></i></span>
          <span> | </span>
          <span>{{ new Date().getFullYear() }}</span>
        </v-card>
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
  </v-footer>
</v-app>
</template>


<style>
  header {
    position: relative;
  }
  /*ELEMENT IDs*/
  html, body, pre, p, code, kbd, samp {
    font-family: 'Press Start 2P' !important;
  }
  .v-application .title {
    font-family: 'Press Start 2P' !important;
  }
  .v-toolbar__content {
    border-bottom: solid 4px;
    height: fit-content!important;
    /* border-color: var(--v-primary-base); */
  }
  /*ELEMENT CLASSES*/
  /*Nav Bar */
  .navbar-nav .nav-link .navbar-brand {
    color: var(--v-primary-base)!important;
  }
  .navbar-nav .active>.nav-link {
    color: var(--v-secondary-base)!important;
  }
  .nav-link:focus .nav-link:hover .navbar-brand:hover{
    color: var(--v-secondary-base)!important;
  }
  .navbar-brand:hover{
    color: var(--v-primary-base)!important;
  }
  .nav-link:hover {
    color: var(--v-secondary-base)!important;
  }
  /*ELEMENT SELECTORS*/
   /* INPUT FIELDS */
  .v-input__slot:before {
    border-style: none!important;
  }
  .v-input__slot::after {
    border-style: none!important;
  }
  .v-text-field .v-label {
    top: 0px!important;
    left: 5px!important;
  }
  .v-content {
    margin-top: auto;
  }
  .v-content__wrap {
    margin: auto;
  }
  .container {
    display: flex;
    justify-content: center;
  }
</style>
  
  <style lang="scss">
  #fieldsetContainer {
      width: 80%;
      border-color: var(--v-primary-base)!important;
  }

//   #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

  .nav-item {
    a {
        &.router-link-exact-active {
        color: var(--v-secondary-base)!important;
      }
    }
  }
</style>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  $body-font-family: 'Press Start 2P';
  $title-font: 'Press Start 2P';
  // .application {
  //   font-family: 'Press Start 2P', cursive;
  // }
  html, body, pre, p, code, kbd, samp {
    font-family: $body-font-family, cursive !important;
  }
  .v-application {
    font-family: $body-font-family, cursive !important;
    .title { // To pin point specific classes of some components
      font-family: $title-font, cursive !important;
    }
    .themeHeader {
      font-family: $title-font, cursive !important;
    }
  }
  .themeHeader {
    font-family: $body-font-family, cursive !important;
    color: var(--v-primary-base);
  }
  .title {
    font-family: $body-font-family, cursive !important;
    // color: #e76e55;
    color: var(--v-primary-base);
  }
  .retroBorder {
    border-style: solid;
    border-width: 4px 0;
    margin: 0 .125em;
    padding: .5em;
    position: relative;
    z-index: 1;
    &:before {
      border: inherit;
      border-width: 0 4px;
      content: '';
      height: 100%;
      left: -.125em;
      pointer-events: none;
      position: absolute;
      top: 0;
      right: -.125em;
      z-index: -1;
    }
  }
</style>

<script>
 import $ from 'jquery'

  export default {
    name: 'App',
    components: {
    },
    data: () => ({
      //
    }),
    mounted: function () {
    this.$nextTick(function () {
        $( ".v-text-field__slot" ).addClass("retroBorder")
        $( ".v-select__slot" ).addClass("retroBorder")
      })
    }
  };

  
</script>