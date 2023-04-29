
// Llamada a la API Rick y Morty mediante fetch

const API_BASE = "https://rickandmortyapi.com/api";
const API_CHARACTERS = "https://rickandmortyapi.com/api/character/?page=12";

const llamadaApi = fetch(API_CHARACTERS);

llamadaApi
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    const $characters = document.getElementById("grid-contain");
    console.log(data.results[0]);
    for (let i = 0; i < data.results.length; i++) {
      $characters.innerHTML += `
        <div class="grid-item">
                <img class"character-image" src=${data.results[i].image} alt="imagen del personaje"/>
                <h3>${data.results[i].name}</h3>
                <p>Gender: ${data.results[i].gender}</p>
                <p>Species: ${data.results[i].species}</p>
                <p>Status: ${data.results[i].status}</p>
        </div>
        `;
    }
  })
  .catch((error) => {
    console.log(error);
  });
