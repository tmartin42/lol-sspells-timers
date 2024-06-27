<template>
  <div class="home">

    <input type="text" id="gamename" v-model="gameName"/>
    <input type="text" id="tagLine" v-model="tagLine"/>

    <button @click="getPlayerGame">click</button>

    <div class="game-info-container" v-if="gameInfo && gameInfo.length">
      <PlayerInfo :key="playerInfo" v-for="playerInfo in gameInfo" :playerInfo="playerInfo"/>
    </div>

    <div class="error-message" v-if="errorMessage">
      {{ errorMessage }}
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
      gameName: "",
      tagLine: "",
      gameInfo: [],
      errorMessage: undefined,
    }
  },

  methods:  {
    getPlayerGame() {
      if (this.gameName.length && this.tagLine.length)
        getPlayerGame(this.gameName, this.tagLine).then((gameInfo) => {
          this.gameInfo = gameInfo.data
          this.errorMessage = gameInfo.errorMessage
        })
    }
  }
};
</script>
