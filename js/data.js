


let activos = []
let dolars = []


async function cargarDolares() {
  try {
    const urlBase = 'https://dolarapi.com/v1/dolares';
    const respuesta = await fetch(urlBase);

    if (!respuesta.ok) {
      throw new Error(`HTTP error: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!Array.isArray(datos)) {
      throw new Error('Expected an array of Dolars.');
    }

    dolars = datos.map((coin, index) => ({
      id: index + 1,
      moneda: coin.moneda,
      casa: coin.casa,
      nombre: coin.nombre,
      precio_compra: coin.compra,
      precio_venta: coin.venta,
      fecha_actualizacion: coin.fechaActualizacion,
    }));
    
    console.log("Datos de dólares cargados correctamente:", dolars);

  } catch (error) {
    console.error("Error al cargar los dólares:", error);
  }
}


async function cargarCriptos() {
  try {
    // const urlBase = 'https://magicloops.dev/api/loop/3ae86045-5c56-4b31-822d-37e2bda31abd/run';
    const urlBase = 'https://68252aa80f0188d7e72c2c52.mockapi.io/cryptohome/cryptos';
    const respuesta = await fetch(urlBase);

    if (!respuesta.ok) throw new Error(`HTTP error: ${respuesta.status}`);
    
    const datos = await respuesta.json();
    if (!Array.isArray(datos)) throw new Error('Expected an array of crypto data.');

    activos = datos.map((coin, index) => ({
      id: index + 1,
      nombre: coin.name,
      simbolo: coin.symbol.toUpperCase(),
      tipo: coin.tipo ,
      precio_actual: coin.current_price,
      precio_compra: coin.precio_compra,
      precio_venta: coin.precio_venta,
      variacion_1h: coin.variacion_1h != null ? parseFloat(coin.variacion_1h.toFixed(2)) : 0,
      variacion_24h: coin.variacion_24h != null ? parseFloat(coin.variacion_24h.toFixed(2)) : 0,
      variacion_7d: coin.variacion_7d != null ? parseFloat(coin.variacion_7d.toFixed(2)) : 0,
      market_cap: coin.market_cap,
      volumen_24h: coin.volumen_24h,
      suministro: coin.tipo !='CRYPTO' ? '-': coin.suministro 
    }));


  } catch (error) {
    // Usar Notyf para mostrar el error de forma elegante
    console.error('Error al obtener los datos de la API:', error.mennsage);
    notyf.error('Error al obtener los datos de la API: Intente mas tarde' );
    //notyf.error('Error al obtener los datos de la API: ' + error.message);
    activos = [];
  }
}


function calcularVariacion(actual, compra) {
  if (!compra || !actual) return "-";
  const variacion = ((actual - compra) / compra) * 100;
  return `${variacion.toFixed(2)}%`;
}

function formatPorcentaje(valor) {
  return valor !== null && valor !== undefined ? `${valor.toFixed(2)}%` : "-";
}


