const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value)
})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)//Toma la url, manda una petición y devuelve la respuesta
    .then((res) => res.json())//Conviere la respuesta en formato json.
    .then((data)=>{
        crearPokemon(data);
    }) ;
}

function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}