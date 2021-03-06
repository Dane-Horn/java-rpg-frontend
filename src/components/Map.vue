<template>
  <canvas ref="canvas" width="100px" height="100px" tabindex="1"></canvas>
</template>

<script>
export default {
  name: "Map",
  props: {
    tileset: String,
    size: Object
  },
  data() {
    return {
      mapSubscription: null,
      canvas: null,
      ctx: null,
      player: null,
      map: [],
      enemies: [],
      items: [],
      playerPos: null,
      tilemap: new Image(),
      tileSize: 0,
      tiles: { player: {}, space: {}, wall: {}, entrance: {}, exit: {} }
    };
  },
  methods: {
    loadTilemap() {
      switch (this.$props.tileset) {
        case "retro":
          this.tilemap.src = require("../assets/tiles.png");
          this.tiles.player = { x: 2, y: 19 };
          this.tiles.space = { x: 0, y: 5 };
          this.tiles.wall = { x: 7, y: 5 };
          this.tiles.entrance = { x: 3, y: 1 };
          this.tiles.exit = { x: 3, y: 1 };
          this.tileSize = 16;
          break;
        case "dungeon":
          this.tilemap.src = require("../assets/dungeon.png");
          this.tiles.player = { x: 8, y: 1 };
          this.tiles.space = { x: 1, y: 4 };
          this.tiles.wall = { x: 6, y: 9 };
          this.tiles.entrance = { x: 3, y: 6 };
          this.tiles.exit = { x: 3, y: 6 };
          this.tileSize = 16;
          break;
        default:
          this.tilemap.src = require("../assets/tiles.png");
          this.tiles.player = { x: 0, y: 0 };
          this.tiles.space = { x: 0, y: 0 };
          this.tiles.wall = { x: 0, y: 0 };
          this.tiles.entrance = { x: 0, y: 0 };
          this.tiles.exit = { x: 0, y: 0 };
          this.tileSize = 16;
      }
    },
    drawTile({ x, y }, { x: tilex, y: tiley }) {
      this.ctx.drawImage(
        this.tilemap,
        this.tileSize * tilex,
        this.tileSize * tiley,
        this.tileSize,
        this.tileSize,
        this.tileSize * x,
        this.tileSize * y,
        this.tileSize,
        this.tileSize
      );
    },
    renderMap() {
      for (let y = 0; y < this.map.length; y++) {
        for (let x = 0; x < this.map[0].length; x++) {
          let tile = { x: 0, y: 0 };
          if (this.map[y][x] == "1") {
            tile = this.tiles.wall;
          }
          if (this.map[y][x] == "0") {
            tile = this.tiles.space;
          }
          if (this.map[y][x] == "$") {
            tile = this.tiles.entrance;
          }
          this.drawTile({ x, y }, tile);
        }
      }
      this.drawTile(this.playerPos, this.tiles.player);
      for (let { position } of this.enemies) {
        this.drawTile(position, { x: 0, y: 22 });
      }
      for (let { position } of this.items) {
        this.drawTile(position, { x: 6, y: 9 });
      }
    },
    loadNewMap(player) {
      this.playerPos = player.position;
      this.map = player.map.map;
      this.enemies = player.map.enemies;
      this.items = player.map.items;
      this.ctx.canvas.width = this.tileSize * this.map[0].length;
      this.ctx.canvas.height = this.tileSize * this.map.length;
      this.canvas.style.width = `${this.ctx.canvas.width * 2}px`;
      this.canvas.style.height = `${this.ctx.canvas.height * 2}px`;
      this.renderMap();
    },
    getNewMap() {
      this.$store.state.stompClient.send(
        `/app/initializeMap/${this.$store.state.player.name}`,
        {},
        JSON.stringify({ x: 10, y: 10 })
      );
    },
    updateServerPlayer() {
      this.$store.state.stompClient.send(
        `/app/player/update/${this.$store.state.player.name}`,
        {},
        JSON.stringify(this.player)
      );
    },
    handleMovement(key) {
      let tempPos = { x: this.playerPos.x, y: this.playerPos.y };
      switch (key) {
        case "8":
        case "w":
          tempPos.y--;
          break;
        case "4":
        case "a":
          tempPos.x--;
          break;
        case "2":
        case "s":
          tempPos.y++;
          break;
        case "6":
        case "d":
          tempPos.x++;
          break;
        case "7":
        case "q":
          tempPos.y--;
          tempPos.x--;
          break;
        case "1":
        case "z":
          tempPos.y++;
          tempPos.x--;
          break;
        case "3":
        case "c":
          tempPos.y++;
          tempPos.x++;
          break;
        case "9":
        case "e":
          tempPos.y--;
          tempPos.x++;
          break;
      }
      if (this.containsItem(tempPos)) {
        this.player.hitPoints += 50;
        this.removeItem(tempPos);
        this.renderMap();
      } else if (this.containsEnemy(tempPos)) {
        let enemy = this.getEnemy(tempPos);
        this.player.hitPoints -= enemy.maxAttackPoints;
        enemy.hitPoints -= this.player.maxAttackPoints;
        if (enemy.hitPoints <= 0) this.removeEnemy(tempPos);
        this.map[tempPos.y][tempPos.x] = "0";
        this.renderMap();
      } else if (this.map[tempPos.y][tempPos.x] == "0") {
        this.playerPos = tempPos;
        this.player.position = tempPos;
        this.renderMap();
      } else if (this.map[tempPos.y][tempPos.x] == "$") {
        this.getNewMap();
      }
      this.updateServerPlayer();
    },
    containsItem(pos) {
      for (let {
        position: { x, y }
      } of this.items) {
        if (pos.x == x && pos.y == y) return true;
      }
      return false;
    },
    removeItem(pos) {
      this.items = this.items.filter(
        ({ position: { x, y } }) => x != pos.x || y != pos.y
      );
    },
    getEnemy(pos) {
      return this.enemies.find(
        ({ position: { x, y } }) => x == pos.x && y == pos.y
      );
    },
    containsEnemy(pos) {
      for (let {
        position: { x, y }
      } of this.enemies) {
        if (pos.x == x && pos.y == y) return true;
      }
      return false;
    },
    removeEnemy(pos) {
      this.enemies = this.enemies.filter(
        ({ position: { x, y } }) => x != pos.x || y != pos.y
      );
    },
    load() {
      this.canvas = this.$refs.canvas;
      this.canvas.addEventListener("keydown", event => {
        this.handleMovement(event.key);
      });
      this.ctx = this.canvas.getContext("2d");
      this.loadTilemap("retro");
      this.tilemap.onload = () => {
        if (this.map.length > 0) this.renderMap();
      };
      this.$store.dispatch("connect");
    }
  },
  watch: {
    tileset() {
      this.loadTilemap();
    }
  },
  mounted() {
    this.load();
  },
  destroyed() {
    this.$store.dispatch("disconnect");
  },
  created() {
    this.$store.watch(
      (state, getters) => getters.connected,
      newValue => {
        if (newValue === true) {
          if (this.mapSubscription) this.mapSubscription.unsubscribe();
          this.mapSubscription = this.$store.state.stompClient.subscribe(
            `/map/initialMap/${this.$store.state.player.name}`,
            message => {
              let player = JSON.parse(message.body);
              this.$store.commit("setPlayer", player);
              this.player = player;
              this.player.level++;
              this.updateServerPlayer();
              this.loadNewMap(player);
            }
          );
          this.$store.state.stompClient.send(
            `/app/join/${this.$store.state.player.name}`,
            {},
            ""
          );
          this.getNewMap();
        } else {
          this.$store.state.stompClient.send(
            `/app/leave/${this.$store.state.player.name}`,
            {},
            ""
          );
          this.map = [];
          this.ctx.canvas.width--;
          this.ctx.canvas.width++;
        }
      }
    );
  }
};
</script>

<style></style>
