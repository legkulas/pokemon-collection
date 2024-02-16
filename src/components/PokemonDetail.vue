<template>
  <div>
    <h4>{{ pokemon.name }}</h4>
    <div class="info-wrapper">
      <p>
        Height: <span>{{ pokemon.height }}</span>
      </p>
      <p>
        Weight: <span>{{ pokemon.weight }}</span>
      </p>
    </div>
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
<style scoped>
h4 {
  text-transform: capitalize;
}
img {
  display: block;
  margin: auto;
  width: 150px;
  height: auto;
  transition: transform 0.3s ease-in-out;
}
img:hover {
  animation: shake 0.5s ease-in-out;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.info-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.info-wrapper p span {
  font-size: 20px;
  font-weight: 600;
  margin-left: 3px;
}
</style>
