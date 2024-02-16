<template>
  <div>
    <h4>My Favorite Pokemon</h4>
    <ul>
      <li
        v-for="pokemon in paginatedPokemons"
        :key="pokemon.id"
        @click="showPokemonDetails(pokemon)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
    <button @click="previousPage" :disabled="currentPage === 1">
      Previous
    </button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Next
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonList",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pokemons.length / this.pageSize);
    },
    paginatedPokemons() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.pokemons.slice(startIndex, startIndex + this.pageSize);
    },
  },
  methods: {
    showPokemonDetails(pokemon) {
      this.$emit("show-details", pokemon);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
});
</script>
<style>
li {
  cursor: pointer;
}
</style>
