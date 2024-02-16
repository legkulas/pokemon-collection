<template>
  <div>
    <h4>{{ pokemon.name }}</h4>
    <p>Height: {{ pokemon.height }}</p>
    <p>Weight: {{ pokemon.weight }}</p>
    <img :src="pokemon.sprites.front_default" alt="Pokemon" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonDetail",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
});
</script>
