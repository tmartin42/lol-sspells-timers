<template>

<div class="summoner-spell" @click="setOnCd">
    <img :src="spellIcon" />
    <div class="spell-cooldown" v-if="!!currentSpellCd">
        {{ displaySpellCd(currentSpellCd) }}
    </div>
</div>

</template>

<script>
export default {
    name: "SummonerSpell",
    props: {
        spellInfo: Object,
    },

    data() {
        return {
            currentSpellCd: 0,
        }
    },
    computed: {
        spellIcon() {
            return `https://ddragon.leagueoflegends.com/cdn/14.13.1/img/spell/${this.spellInfo.image.full}`
        },
        spellCd() {
            return this.spellInfo.cooldown[0]
        },
    },
    methods: {
        setOnCd(){
            if (this.currentSpellCd <= 0) {
                this.currentSpellCd = this.spellCd;
                const cdInterval = setInterval(() => {
                    this.currentSpellCd--;
                    
                    if (this.currentSpellCd <= 0) 
                        clearInterval(cdInterval)
        
                }, 1000)
            }  
        },

        displaySpellCd(spellCd) {

            let timeString = ''
            if (spellCd) {
            const minutes = Math.floor(spellCd / 60);
            const seconds = spellCd % 60;
            if (minutes >= 1)
                timeString += `${minutes}:`
            if (seconds < 10)
                timeString += `0${seconds}`
            if (seconds >= 10)
                timeString += `${seconds}`
            if (timeString === "00")
                return ''
            }
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
    cursor: pointer;
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
    box-shadow: inset 0px 0px 0px 4px #930606;
}
</style>
