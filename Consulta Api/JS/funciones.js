const input = document.querySelector("input");
const button = document.querySelector("button");
const personajeContainer = document.querySelector(".personaje-container");

button.addEventListener('click',(e) => {e.preventDefault();
traerPersonaje(input.value);
}) 

function traerPersonaje(personaje) {
    //alert("hola mundo")
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
    .then((res) => res.json())
        .then((data) => { 
            crearPJ(data);
            console.log(data);
        });
        }

function crearPJ(personaje) {
    const img = document.createElement("img");
    img.src = personaje.image;

    const h2 = document.createElement("h2");
    h2.textContent = personaje.name;

    const estado = document.createElement("h2");
    estado.textContent = personaje.status;

    const especie = document.createElement("h2");
    especie.textContent = personaje.species;

    const episodio = document.createElement("h2");
    episodio.textContent = personaje.episode;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(estado);
    div.appendChild(especie);
    div.appendChild(episodio);

    personajeContainer.appendChild(div);

}