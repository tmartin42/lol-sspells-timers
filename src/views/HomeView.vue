<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="getPlayerGame">click</button>
  </div>
</template>

<script>

import {getPlayerGame} from "@/services/backendApi.js";

export default {
  name: "HomeView",
  components: {
    
  },

  methods:  {
    getPlayerGame() {
      getPlayerGame("MeyK", "euw")
    }
  }
};
</script>
