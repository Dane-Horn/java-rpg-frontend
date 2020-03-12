import Vue from "vue";
import Vuex from "vuex";
import Sockjs from "sockjs-client";
import stomp from "stomp-websocket";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    connected: false,
    stompClient: null,
    player: { name: "", level: 0 },
    activePlayers: {}
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
    setPlayer(state, player) {
      state.player = player;
    }
  },
  actions: {
    connect({ commit, state }) {
      commit("setPlayerLevel", 1);
      let socket = new Sockjs("http://localhost:8080/gs-guide-websocket");
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
    }
  },
  getters: {
    activePlayers: state => state.activePlayers,
    connected: state => state.connected,
    stompClient: state => state.stompClient
  }
});
