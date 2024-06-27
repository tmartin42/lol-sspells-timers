<template>
  <div class="home">

    <button @click="getPlayerGame">click</button>

    <div class="game-info-container" v-if="gameInfo && gameInfo.length">
      
      <PlayerInfo :key="playerInfo" v-for="playerInfo in gameInfo" :playerInfo="playerInfo"/>
    </div>


  </div>
</template>

<script>

import {getPlayerGame} from "@/services/backendApi.js";

import PlayerInfo from "@/components/playerGamePage/PlayerInfo.vue";

export default {
  name: "HomeView",
  components: {
    PlayerInfo,
  },

  data() {
    return {
      gameInfo: []
    }
  },

  methods:  {
    getPlayerGame() {
      getPlayerGame("MeyK", "euw").then((gameInfo) => {console.log(this.gameInfo);this.gameInfo = gameInfo})
    }
  }
};
</script>
