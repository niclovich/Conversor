function loadContainerFavorite() {
    const container = document.querySelector('.container-favorite');
    container.innerHTML = ''; // Limpiamos el contenido previo
  
    monedas.forEach(moneda => {
      const spread = moneda.precio_venta - moneda.precio_compra;
      const variacion = parseFloat(moneda.variacion.replace('%', '').replace('+', ''));
      const time = new Date().toLocaleTimeString();
  
      const cardHTML = createCardMoneda({
        title: `${moneda.nombre} (${moneda.simbolo})`,
        variation: variacion,
        spread: spread,
        time: time,
        sellPrice: moneda.precio_venta,
        buyPrice: moneda.precio_compra
      });
  
      container.innerHTML += cardHTML;
    });
  }

function loadSelecetFavorite() {
    const select = document.querySelector('#moneda-select');
    select.innerHTML = ''; // Limpiamos el contenido previo
  
    monedas.forEach(moneda => {
      if(moneda.tipo === 'CRYPTO' || moneda.tipo === 'FIAT') {
        // Solo añadimos monedas de tipo CRYPTO o FIAT
        const option = document.createElement('option');
        option.value = moneda.simbolo;
        option.textContent = `${moneda.nombre} (${moneda.simbolo})`;
        select.appendChild(option);

      }
    });
}

// Conversor 
function loadSelecetSimbolo(idSelecet){
    const select = document.querySelector('#'+ idSelecet);
    select.innerHTML = ''; // Limpiamos el contenido previo

    monedas.forEach(moneda => {
        if(moneda.tipo === 'CRYPTO' || moneda.tipo === 'FIAT') {
          // Solo añadimos monedas de tipo CRYPTO o FIAT
          const option = document.createElement('option');
          option.value = moneda.simbolo;
          option.textContent = `${moneda.simbolo}`;
          select.appendChild(option);
  
        }
      });
    //Carga un select atravez de un simbolo.
}

function loadConversor(){
    loadSelecetSimbolo('select-origen');
    loadSelecetSimbolo('select-destino');


}

function mostrarTasa() {
    const origen = document.getElementById("select-origen").value;
    const destino = document.getElementById("select-destino").value;

    if (origen === destino) {
      document.getElementById("tasa").textContent = "";
      return;
    }

    const monedaOrigen = monedas.find(m => m.simbolo === origen);
    const monedaDestino = monedas.find(m => m.simbolo === destino);
  
    const tasa = monedaOrigen.precio_actual / monedaDestino.precio_actual;
    if (!tasa) {
      document.getElementById("tasa").textContent = "Tasa no disponible.";
    } else {
      document.getElementById("tasa").textContent = `💱 1 ${origen} = ${tasa} ${destino}`;
    }
  }

function convertir(){
    alert('Convertir');
}
function inizialicacion() {
    loadSelecetFavorite();
    loadContainerFavorite();
    loadConversor();
}



inizialicacion();   



