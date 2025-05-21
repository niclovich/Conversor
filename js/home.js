//--Favroritos--//
// Crear la instancia global de Notyf
const notyf = new Notyf({
  duration: 4000,
  position: {
    x: "right",
    y: "top",
  },
});
// Crear la instancia de Glider
let gliderInstance = null; // se usará después de que esté cargado el contenido

//Inicializar Glider
function inicializarGlider() {
  const container = document.querySelector('.container-favorite');
  gliderInstance = new Glider(container, {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });


}

//Cargar listado de favoritos

function loadContainerFavorite() {
  const container = document.querySelector(".container-favorite");
  container.innerHTML = "";

  const favoritos = getFavoritos();

  activos.forEach((activo) => {
    if (!favoritos.includes(activo.id)) return;

    const cardHTML = createCardactivos(activo);
    container.innerHTML += cardHTML;
  });

  if (gliderInstance) {
    gliderInstance.refresh(true);
  } else {
    // Si la instancia de Glider no está creada, la inicializamos
    inicializarGlider();
  }
}


function loadSelecetFavorite() {
  const select = document.querySelector("#activos-select");
  select.innerHTML = ""; // Limpiamos el contenido previo

  activos.forEach((activo) => {
    if (activo.tipo === "CRYPTO" || activo.tipo === "FIAT") {
      // Solo añadimos activos de tipo CRYPTO o FIAT
      const option = document.createElement("option");
      option.value = activo.simbolo;
      option.textContent = `${activo.nombre} (${activo.simbolo})`;
      select.appendChild(option);
    }
  });
}



//--Tabla--//
/// Cargar tabla de activos
function loadTable() {
  const tbody = document.querySelector(".table-activos tbody");
  if (!tbody) return; // Asegurarse de que el tbody existe
  tbody.innerHTML = ""; // Limpiar solo el contenido del cuerpo de la tabla
  activos.forEach((activo) => {
    const rowHTML = rowTable(activo);
    tbody.innerHTML += rowHTML;
  });
}

// Filtrar la tabla de activos
function filterTable() {
  const searchInput = document
    .querySelector("#filterInput")
    .value.toLowerCase();
  const rows = document.querySelectorAll(".table-activos tbody tr");

  rows.forEach((row) => {
    const simbolo = row
      .querySelector("td:nth-child(2)")
      .textContent.toLowerCase();
    const nombre = row
      .querySelector("td:nth-child(3)")
      .textContent.toLowerCase();

    if (simbolo.includes(searchInput) || nombre.includes(searchInput)) {
      row.style.display = ""; // Mostrar la fila si coincide con el filtro
    } else {
      row.style.display = "none"; // Ocultar la fila si no coincide
    }
  });
}
// Filtrar por tipo de activo
function filterTableType(type) {

  const tbody = document.querySelector(".table-activos tbody");
  tbody.innerHTML = ""; // Limpiar solo el contenido del cuerpo de la tabla

  console.log(activos);
  activos.forEach((activo) => {
    if (type !== "TODAS" && activo.tipo !== type) return; // Filtrar por tipo de activo
    console.log(`${activo} es de tipo ${type}` );     
    const rowHTML = rowTable(activo);
    tbody.innerHTML += rowHTML;
  });
}

//--Favoritos--//
function inFavoritos(id) {
  const favoritos =  getFavoritos();
  return favoritos.includes(id);
}

//Agregar o eliminar de favoritos
function addFavorite(button, id) {
  let favoritos =getFavoritos();
  const isFavorite = button.textContent === "★";

  button.textContent = isFavorite ? "☆" : "★";
  button.classList.toggle("favorited", !isFavorite);

  const container = document.querySelector(".container-favorite");
  const cardId = `fav-${id}`;
  const cardInDOM = document.querySelector(`#${cardId}`);

  if (isFavorite) {
    favoritos = favoritos.filter(favId => favId !== id);

    if (cardInDOM && gliderInstance) {
      // Si el elemento existe en el DOM, lo eliminamos
      cardInDOM.remove();
      gliderInstance.refresh(true);


    }

    notyf.success("Activo eliminado de favoritos");
  } else {
    favoritos.push(id);
    const activo = activos.find((a) => a.id === id);
    const cardHTML = createCardactivos(activo);

    const temp = document.createElement("div");
    temp.innerHTML = cardHTML.trim();
    const newCard = temp.firstElementChild;

    if (newCard && gliderInstance) {
      gliderInstance.addItem(newCard);
    }

    notyf.success("Activo agregado a favoritos");
  }

  setFavoritos(favoritos);
}

//Get y Set Favoritos
function getFavoritos() {
  return JSON.parse(localStorage.getItem("activos_favoritos")) || [];
}

function setFavoritos(favoritos) {
  localStorage.setItem("activos_favoritos", JSON.stringify(favoritos));
}


//--Conversor--//
// Conversor
function loadSelecetSimbolo(idSelecet) {
  const select = document.querySelector("#" + idSelecet);
  select.innerHTML = ""; // Limpiamos el contenido previo

  activos.forEach((activo) => {
    if (activo.tipo === "CRYPTO" || activo.tipo === "FIAT") {
      // Solo añadimos activosde tipo CRYPTO o FIAT
      const option = document.createElement("option");
      option.value = activo.simbolo;
      option.textContent = `${activo.simbolo}`;
      select.appendChild(option);
    }
  });
  //Carga un select atravez de un simbolo.
}

const conversion = (cantidad, activosDesde, activosHacia) => {
  const valorUSD = cantidad * activosDesde.precio_actual;
  return valorUSD / activosHacia.precio_actual;
};

function mostrarTasa() {
  const origen = document.getElementById("select-origen").value;
  const destino = document.getElementById("select-destino").value;

  if (origen === destino) {
    document.getElementById("tasa").textContent = "";
    return;
  }

  const activosOrigen = activos.find((m) => m.simbolo === origen);
  const activosDestino = activos.find((m) => m.simbolo === destino);

  const tasa = activosOrigen.precio_actual / activosDestino.precio_actual;
  if (!tasa) {
    document.getElementById("tasa").textContent = "Tasa no disponible.";
  } else {
    document.getElementById("tasa").textContent = `1 ${origen} = ${tasa.toFixed(
      20
    )} ${destino}`;
  }
}

function convertir() {
  const origen = document.getElementById("select-origen").value;
  const destino = document.getElementById("select-destino").value;
  const cantidad = parseInt(document.getElementById("input-cantidad").value);

  if (isNaN(cantidad) || cantidad <= 0) {
    notyf.error("Ingrese una cantidad válida.");
    return;
  }
  if (origen === destino) {
    notyf.error("Ingrese un activo diferente para convertir.");
    return;
  }

  const activosOrigen = activos.find((m) => m.simbolo === origen);
  const activosDestino = activos.find((m) => m.simbolo === destino);
  const cantidadConvertida = conversion(
    cantidad,
    activosOrigen,
    activosDestino
  );
  //alert(`${cantidad} ${origen} equivale a ${cantidadConvertida.toFixed(10)} ${destino}`);
  document.getElementById(
    "resultado"
  ).textContent = `${cantidad} ${origen} = ${cantidadConvertida.toFixed(
    20
  )} ${destino}`;
}

function loadConversor() {
  loadSelecetSimbolo("select-origen");
  loadSelecetSimbolo("select-destino");
}


//--Dolares--//

function loadContainerDolares() {
  const container = document.querySelector(".container-dolar ");
  container.innerHTML = "";

  dolars.forEach((dolar) => {
    const cardHTML = createCardFiat(dolar);
    container.innerHTML += cardHTML;
  });
}

async function inizialicacion() {
  //loadSelecetFavorite();
  // Ejecutar la función
  await cargarCriptos();
  await cargarDolares();
  loadContainerDolares();
  loadContainerFavorite();
  loadConversor();
  loadTable();
}

inizialicacion();
