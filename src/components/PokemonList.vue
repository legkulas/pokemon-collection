<template>
  <div>
    <h4>My Favorite Pokemon</h4>
    <ul>
      <li
        v-for="pokemon in paginatedPokemons"
        :key="pokemon.id"
        @click="showPokemonDetails(pokemon)"
      >
        {{ console.log(pokemon) }}
        {{ pokemon.name }}
      </li>
    </ul>
    <div class="btn-wrapper">
      <button
        class="button previous"
        @click="previousPage"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <button
        class="button next"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next
      </button>
    </div>
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
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 10px;
  cursor: pointer;
  background-color: greenyellow;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  text-transform: capitalize;
  font-weight: bold;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
li:hover {
  animation: fadeIn 0.5s ease;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 48%;
  margin-top: 40px;
}

.button:hover {
  background-color: #0056b3;
}

.button + .button {
  margin-left: 10px;
}

.button.previous {
  background-color: #6c757d;
}

.button.next {
  background-color: #28a745;
}
</style>
