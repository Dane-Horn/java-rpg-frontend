import Vue from "vue";
import Vuex from "vuex";
import Sockjs from "sockjs-client";
import stomp from "stomp-websocket";

import GetUserInformationService from "@/api/getUserInformation.service.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    connected: false,
    stompClient: null,
    player: { name: "", level: 0 },
    activePlayers: {},
    userLoggedin: false,
    userName: null,
    userID: "",
  },
  mutations: {
    setConnected(state, connected) {
      state.connected = connected;
    },
    setPlayerName(state, name) {
      state.player.name = name;
    },
    setPlayerLevel(state, level) {
      state.player.level = level;
    },
    setUserID(state, id) {
      state.userID = id;
    },
    setUserLoggedin(state, bool) {
      state.userID = bool;
    },
    setUserName(state) {
      GetUserInformationService.getUserInformation().then(({ data }) => {
        state.userName = data["username"];
      });
    }
  },
  actions: {
    connect({ commit, state }) {
      commit("setPlayerLevel", 1);
      let socket = new Sockjs("http://192.168.1.56:8080/gs-guide-websocket");
      state.stompClient = stomp.over(socket);
      state.stompClient.debug = null;
      state.stompClient.connect({}, () => {
        commit("setConnected", true);
        state.stompClient.subscribe(`/player/active`, message => {
          let players = JSON.parse(message.body);
          state.activePlayers = players;
        });
      });
    },
    disconnect({ commit, state }) {
      state.stompClient.send(`/app/leave/${state.player.name}`);
      state.stompClient.disconnect();
      state.activePlayers = [];
      commit("setConnected", false);
    },
  },
  getters: {
    activePlayers: state => state.activePlayers,
    connected: state => state.connected,
    stompClient: state => state.stompClient,
    userID: state => state.userID
  }
});
