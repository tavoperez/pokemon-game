import PokemonImages from '@/components/PokemonImages.vue';
<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imgSrc" alt="">
        
        <img class="fade-in" :src="imgSrc" v-show="showPokemon" alt="">
    </div>    
</template>

<script>
export default {
    props:{
        pokemonID:{
            type: Number,
            required: true
        },
        showPokemon:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed:{
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`
        }
    }
}
</script>

<style scoped>/* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        width: 100vw;
        margin-left: -50vw;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }
</style>