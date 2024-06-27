<template>

<div>
    <img :src="spellIcon" />
    <div>
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
        if (minutes) {
            return `${minutes}min ${seconds}`
        }
        return `${seconds}`
    }
  }
};
</script>
<style scoped lang="scss">
</style>
