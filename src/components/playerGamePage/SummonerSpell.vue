<template>

<div class="summoner-spell">
    <img :src="spellIcon" />
    <div class="spell-cooldown" v-if="!!spellCd">
        {{ spellCd }}
    </div>
</div>

</template>

<script>
export default {
  name: "SummonerSpell",
  props: {
    spellInfo: Object,
  },

  computed: {
    spellIcon() {
        return `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/${this.spellInfo.image.full}`
    },
    spellCd() {
        const minutes = this.spellInfo.cooldown[0] / 60;
        const seconds = this.spellInfo.cooldown[0] % 60;
        let timeString = ''
        if (minutes >= 1)
            timeString += `${minutes}:`
        if (seconds < 10)
            timeString += `0${seconds}`
        if (seconds >= 10)
            timeString += `${seconds}`
        if (timeString === "00")
            return ''
        return timeString
    }
  }
};
</script>
<style scoped lang="scss">

.summoner-spell {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
}

.spell-cooldown {
    font-size: 20px;
    color: white;
    height: 100%;
    width: 100%;
    line-height: 67px;
    position: absolute;
    top: 0;
    background: #101010d4;
}
</style>
