<template>
  <q-page class="q-flex full-width">
    <div class="container">
      <div class="row">
        <div class="pokemon-name q-pa-md q-gutter-sm">
          <PokemonList
            :pokemons="pokemons"
            @show-details="showPokemonDetails"
          />
        </div>
        <div class="pokemon-details q-pa-md q-gutter-sm">
          <PokemonDetail v-if="selectedPokemon" :pokemon="selectedPokemon" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PokemonService from "../services/PokemonService";
import PokemonList from "../components/PokemonList.vue";
import PokemonDetail from "../components/PokemonDetail.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    PokemonList,
    PokemonDetail,
  },
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
    };
  },
  methods: {
    async loadPokemons() {
      this.pokemons = await PokemonService.getPokemons();
    },
    async showPokemonDetails(pokemon) {
      this.selectedPokemon = await PokemonService.getPokemonDetails(
        pokemon.name
      );
    },
  },
  mounted() {
    this.loadPokemons();
  },
});
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.pokemon-name,
.pokemon-details {
  width: 450px;
}
</style>
