<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonImages :pokemonID="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" :gameActive="gameActive"/>

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>
  </div>
</template>

<script>
import PokemonImages from '@/components/PokemonImages.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: { PokemonImages, PokemonOptions },
  data(){
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      message: '',
      showAnswer: false,
      gameActive: true,
    }
  },
  methods:{
    async mixPokemonsArr(){
      this.pokemonArr = await getPokemonOptions()
      const randomdInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randomdInt]      
    },
    checkAnswer(pokemonID) {
      this.showPokemon = true
      this.showAnswer  = true
      this.gameActive = false

      if( pokemonID === this.pokemon.id ) {
          this.message = `Correcto, el pokemon es ${ this.pokemon.name }`
          this.disableButton = true
      } else {
          this.message = `Oops, era ${ this.pokemon.name }`
      }
    },
    newGame(){
      this.showAnswer = false
      this.showPokemon = false
      this.pokemon = null
      this.pokemonArr
      this.mixPokemonsArr()
      this.gameActive = true
    }
  },
  mounted(){
    this.mixPokemonsArr()
    
  }
}
</script>