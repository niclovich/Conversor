//--Favroritos--//
//Cargar listado de favoritos
function loadContainerFavorite() {
  const container = document.querySelector('.container-favorite');
  container.innerHTML = '';

  const favoritos = JSON.parse(localStorage.getItem("activos_favoritos")) || [];

  activos.forEach(activo => {
    if (!favoritos.includes(activo.id)) return;

    // const spread = activo.precio_venta - activo.precio_compra;
    // const variacion = parseFloat(activo.variacion.replace('%', '').replace('+', ''));
    // const time = new Date().toLocaleTimeString();

    // const cardHTML = createCardactivos({
    //   title: `${activo.nombre} (${activo.simbolo})`,
    //   variation: variacion,
    //   spread: spread,
    //   time: time,
    //   sellPrice: activo.precio_venta,
    //   buyPrice: activo.precio_compra
    // });
    const cardHTML = createCardactivos(activo);

    container.innerHTML += cardHTML;
  });
}
  function loadSelecetFavorite() {
    const select = document.querySelector('#activos-select');
    select.innerHTML = ''; // Limpiamos el contenido previo
  
    activos.forEach(activo => {
      if(activo.tipo === 'CRYPTO' || activo.tipo === 'FIAT') {
        // Solo añadimos activos de tipo CRYPTO o FIAT
        const option = document.createElement('option');
        option.value = activo.simbolo;
        option.textContent = `${activo.nombre} (${activo.simbolo})`;
        select.appendChild(option);

      }
    });
}

//--Tabla--// 
/// Cargar tabla de activos
function loadTable(){
  const tbody = document.querySelector('.table-activos tbody');
  tbody.innerHTML = ''; // Limpiar solo el contenido del cuerpo de la tabla
  activos.forEach(activo => {
    const rowHTML = rowTable(activo);
    tbody.innerHTML += rowHTML;
  });

}


function filterTable(){
  const searchInput = document.querySelector('#filterInput').value.toLowerCase();
  const rows = document.querySelectorAll('.table-activos tbody tr');
  
  rows.forEach(row => {
    const simbolo = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
    const nombre = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
    
    if (simbolo.includes(searchInput) || nombre.includes(searchInput)) {
      row.style.display = ''; // Mostrar la fila si coincide con el filtro
    } else {
      row.style.display = 'none'; // Ocultar la fila si no coincide
    }
  });
}

function filterTableType(type){
  const tbody = document.querySelector('.table-activos tbody');
  tbody.innerHTML = ''; // Limpiar solo el contenido del cuerpo de la tabla
  
  activos.forEach(activo => {
    if(type !== 'TODAS' && activo.tipo !== type) return; // Filtrar por tipo de activo
    const rowHTML = rowTable(activo);
    tbody.innerHTML += rowHTML;
  });
}


//--Favoritos--//
function inFavoritos(id) {
  const favoritos = JSON.parse(localStorage.getItem("activos_favoritos")) || [];
  return favoritos.includes(id);
}


function addFavorite(button, id) {
  let favoritos = JSON.parse(localStorage.getItem("activos_favoritos")) || [];

  const isFavorite = button.textContent === '★';
  button.textContent = isFavorite ? '☆' : '★';
  button.classList.toggle('favorited', !isFavorite);

  if (inFavoritos(id)) {

    //Sacamos del  localStore
    favoritos = favoritos.filter(favId => favId !== id);
    //Sacamos del contenedor de favoritos
    const container = document.querySelector('.container-favorite');
    const cardToRemove = document.getElementById(`fav-${id}`);
    if (cardToRemove) {
      cardToRemove.remove();
    }
  

  } else {
    favoritos.push(id);
    //Agregamos al contenedor de favoritos
    const container = document.querySelector('.container-favorite');
    const activo = activos.find(a => a.id === id);
    const cardHTML = createCardactivos(activo);

    container.innerHTML += cardHTML;

  }

  localStorage.setItem("activos_favoritos", JSON.stringify(favoritos));
}



//--Conversor--//
// Conversor 
function loadSelecetSimbolo(idSelecet){
    const select = document.querySelector('#'+ idSelecet);
    select.innerHTML = ''; // Limpiamos el contenido previo

    activos.forEach(activo => {
        if(activo.tipo === 'CRYPTO' || activo.tipo === 'FIAT') {
          // Solo añadimos activosde tipo CRYPTO o FIAT
          const option = document.createElement('option');
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

    const activosOrigen = activos.find(m => m.simbolo === origen);
    const activosDestino = activos.find(m => m.simbolo === destino);
  
    const tasa = activosOrigen.precio_actual / activosDestino.precio_actual;
    if (!tasa) {
      document.getElementById("tasa").textContent = "Tasa no disponible.";
    } else {
      document.getElementById("tasa").textContent = `1 ${origen} = ${tasa} ${destino}`;
    }
  }

function convertir(){
    const origen = document.getElementById("select-origen").value;
    const destino = document.getElementById("select-destino").value;
    const cantidad = parseInt(document.getElementById("input-cantidad").value);

    if (origen === destino) {
      document.getElementById("tasa").textContent = "";
      return;
    }

    const activosOrigen = activos.find(m => m.simbolo === origen);
    const activosDestino = activos.find(m => m.simbolo === destino);
    const cantidadConvertida   =  conversion(cantidad, activosOrigen, activosDestino);
    //alert(`${cantidad} ${origen} equivale a ${cantidadConvertida.toFixed(10)} ${destino}`);
    document.getElementById("resultado").textContent = `${cantidad} ${origen} = ${cantidadConvertida.toFixed(4)} ${destino}`;

  

}

function loadConversor(){
  loadSelecetSimbolo('select-origen');
  loadSelecetSimbolo('select-destino');


}

function inizialicacion() {
    loadSelecetFavorite();
    loadContainerFavorite();
    loadConversor();
    loadTable();
}



inizialicacion();   



