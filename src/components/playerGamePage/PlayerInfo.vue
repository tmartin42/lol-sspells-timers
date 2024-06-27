<template>

  <div>
    <div class="champion-container">
      <img :src="championSplash"/>

      {{ championInfo.name }}

      <div class="summoner-spells-container">
        <SummonerSpell :spellInfo="playerInfo.spell1Info" />
        <SummonerSpell :spellInfo="playerInfo.spell2Info" />
      </div>
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
</style>
