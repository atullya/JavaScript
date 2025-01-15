// fetch=function that is used to make HTTP resources
//(JSON style data, images file)
//Simplifies asynchronous data fetching in JS and
//used for interacting with API to retrive and send
//data asynchronously over the web.
//fetch(url,{options})

//using async await

fetchData();

async function fetchData() {
  try {
    //dom
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Couldn't find");
    }
    const data = await response.json();
    console.log(data);
    //dom
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.log("error");
  }
}

//without using

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("hello");
//     console.log(data.id);
//   })

//   .catch((error) => console.log(error));
