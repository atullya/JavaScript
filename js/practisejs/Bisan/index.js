let arr = [];
async function bisan() {
  let response = await fetch("index.json");
  console.log(response);
  let data = await response.json();
  console.log(data);
  arr = data;
  let pukar = document.querySelector(".id1");
  let content = "";
  data.forEach((element, index) => {
    content += `
    <p>"the name is ${element.name}"</p>
    <img src=${element.image}>
    <button class="id2" onclick="Next(event,${index})">Read more</button>
    
    
    `;
  });
  pukar.innerHTML = content;
}
bisan();
function Next(event, index) {
  let atul = JSON.stringify(arr[index]);
  localStorage.setItem("itemname", atul);
    window.open("op.html");
}
