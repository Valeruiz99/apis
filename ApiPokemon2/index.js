const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-card-content");

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value)
})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)//Toma la url, manda una petición y devuelve la respuesta
    .then((res) => res.json())//Atrapa la respuesta, con el parámetro de respuesta y se pasa a un formato json.
    .then((data)=>{
        crearPokemon(data);
    }) ;
}

function crearPokemon(pokemon){//Se pone separado porque lo podemos utilizar varias veces
    const img = document.createElement('img');//Es una forma de pintar la tabla, creando un elemento
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
}
