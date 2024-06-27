<template>

  <div class="champion-container">
    <img :src="championSplash"/>

    <div class="champion-name">
        {{ championInfo.name }}
    </div>
    <div class="summoner-spells-container">
      <SummonerSpell :spellInfo="playerInfo.spell1Info" />
      <SummonerSpell :spellInfo="playerInfo.spell2Info" />
    </div>
  </div>


</template>

<script>

import SummonerSpell from "./SummonerSpell.vue"

export default {
  name: "PlayerInfo",

  components:{
    SummonerSpell
  },

  props: {
    playerInfo: Object,
  },
  computed: {
    championInfo() {
      return this.playerInfo.championInfo
    },

    championSplash() {
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.playerInfo.championInfo.id}_0.jpg`
    }
  }
};
</script>
<style scoped lang="scss">

.champion-container {
    display: inline-block;
    position: relative;
}
.champion-name {
    font-size: 20px;
    color: white;
    height: 100px;
    width: 100%;
    line-height: 67px;
    position: absolute;
    bottom: 71px;
    background: rgba(16, 16, 16, 0.831372549);
    font-size: 20px;
    color: white;
    height: 110px;
    width: 100%;
    line-height: 100px;
    position: absolute;
    bottom: 70px;
    background: rgba(16, 16, 16, 0.831372549);
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 100%);
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 110%);
}


</style>
