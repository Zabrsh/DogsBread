const url = "https://dog.ceo/api/breeds/list/all";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let dogs = document.getElementById("dogs");

    for (let breed in data.message) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(breed));
      dogs.appendChild(li);
    }
  })
  .catch((error) => console.log(error));