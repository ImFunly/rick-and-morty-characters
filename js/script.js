window.onload = function () {
  fetch("https://rickandmortyapi.com/api/character/?page=1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue existosa");
      }
      return response.json();
    })
    .then((data) => {
      const contenedor = document.getElementById("character-list");

      data.results.forEach((personaje) => {
        const listado = document.createElement("li");
        const imagen = document.createElement("img");
        const div = document.createElement("div");
        const div2 = document.createElement("div");

        const nombre = document.createElement("h3");
        const especie = document.createElement("h3");
        const textoNombre = document.createElement("span");
        const textoEspecie = document.createElement("span");

        div.classList.add("divImagenes");
        div2.classList.add("divTexto");

        nombre.classList.add("h3Nombre");
        especie.classList.add("h3Especie");

        textoNombre.classList.add("spanNombre");
        textoEspecie.classList.add("spanEspecie");

        imagen.src = personaje.image;
        nombre.innerText = "Name: ";
        textoNombre.innerText = personaje.name;
        especie.innerText = "Species: ";
        textoEspecie.innerText = personaje.species;

        contenedor.appendChild(listado);

        listado.appendChild(div);
        listado.appendChild(div2);

        div.appendChild(imagen);

        div2.appendChild(nombre);
        div2.appendChild(textoNombre);

        div2.appendChild(especie);
        div2.appendChild(textoEspecie);
      });
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
};
