import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export default {
  async getPokemons() {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=20`);
    return response.data.results;
  },
  async getPokemonDetails(name) {
    const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
    return response.data;
  },
};
