// const URL = "https://dogapi.dog/api-docs/v2/swagger.json";
const URL = "https://cat-fact.herokuapp.com/facts";
// const URL = "https://meowfacts.herokuapp.com/";

const btn = document.querySelector("#btn");
const factPara = document.querySelector("#fact");
let x = Math.floor(Math.random() * 4 + 1);
console.log(x);

// const getFacts = async () => {
 
//   let response = await fetch(URL);
//   console.log(response); //JSON format
//   //   console.log(response.status);
//   let data = await response.json();
//   console.log(data);
//   factPara.innerText = data[x].text;
// };

// if we don't use async then this
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[x].text;
    });
}

btn.addEventListener("click", getFacts);
