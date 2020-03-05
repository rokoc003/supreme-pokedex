async function getPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=806');
  const results = await response.json();
  const pokemons = results.results;
  const pokemonNames = pokemons.map(pokemon => {
    return pokemon.name;
  });
  return pokemonNames;
}

export async function filterPokemons(searchValue) {
  const upperCaseSearchValue = searchValue.toUpperCase();
  const allPokemons = await getPokemons();
  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toUpperCase().startsWith(upperCaseSearchValue);
  });
  return filteredPokemons;
}
