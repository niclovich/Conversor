
/*const activos	 = [
  { id: 1, nombre: "Bitcoin", simbolo: "BTC", tipo: "CRYPTO", precio_actual: 84750.25, precio_compra: 84500.00, precio_venta: 85000.00, variacion: "+2.31%", variacion_24h: "+0.84%", variacion_7d: "+6.45%", market_cap: 1650000000000, volumen_24h: 35000000000, suministro: 19500000 },
  { id: 2, nombre: "Ethereum", simbolo: "ETH", tipo: "CRYPTO", precio_actual: 2975.40, precio_compra: 2950.00, precio_venta: 3000.00, variacion: "+1.87%", variacion_24h: "+0.52%", variacion_7d: "+4.12%", market_cap: 356000000000, volumen_24h: 20000000000, suministro: 120000000 },
  { id: 3, nombre: "Tether", simbolo: "USDT", tipo: "CRYPTO", precio_actual: 1.00, precio_compra: 0.999, precio_venta: 1.001, variacion: "0.00%", variacion_24h: "-0.01%", variacion_7d: "+0.01%", market_cap: 95000000000, volumen_24h: 60000000000, suministro: 95000000000 },
  { id: 4, nombre: "Solana", simbolo: "SOL", tipo: "CRYPTO", precio_actual: 155.12, precio_compra: 153.50, precio_venta: 157.00, variacion: "-0.45%", variacion_24h: "-0.12%", variacion_7d: "+2.60%", market_cap: 69000000000, volumen_24h: 4500000000, suministro: 445000000 },
  { id: 5, nombre: "BNB", simbolo: "BNB", tipo: "CRYPTO", precio_actual: 415.65, precio_compra: 410.00, precio_venta: 420.00, variacion: "+0.92%", variacion_24h: "+0.28%", variacion_7d: "+3.33%", market_cap: 64000000000, volumen_24h: 2100000000, suministro: 153000000 },
  { id: 6, nombre: "Dólar Estadounidense", simbolo: "USD", tipo: "FIAT", precio_actual: 1.00, precio_compra: 0.99, precio_venta: 1.01, variacion: "-0.10%", variacion_24h: "-0.02%", variacion_7d: "-0.05%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 7, nombre: "Euro", simbolo: "EUR", tipo: "FIAT", precio_actual: 1.08, precio_compra: 1.07, precio_venta: 1.09, variacion: "-0.25%", variacion_24h: "-0.08%", variacion_7d: "-0.55%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 8, nombre: "Peso Argentino", simbolo: "ARS", tipo: "FIAT", precio_actual: 0.0011, precio_compra: 0.0010, precio_venta: 0.0012, variacion: "-1.95%", variacion_24h: "-0.45%", variacion_7d: "-3.50%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 9, nombre: "Real Brasileño", simbolo: "BRL", tipo: "FIAT", precio_actual: 0.20, precio_compra: 0.19, precio_venta: 0.21, variacion: "-0.75%", variacion_24h: "-0.11%", variacion_7d: "-1.20%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 10, nombre: "Apple Inc.", simbolo: "AAPL", tipo: "STOCK", precio_actual: 172.50, precio_compra: 171.30, precio_venta: 173.70, variacion: "+1.02%", variacion_24h: "+0.15%", variacion_7d: "+2.10%", market_cap: 2700000000000, volumen_24h: 12000000000, suministro: 15600000000 },
  { id: 11, nombre: "Tesla Inc.", simbolo: "TSLA", tipo: "STOCK", precio_actual: 205.40, precio_compra: 203.00, precio_venta: 208.00, variacion: "-2.12%", variacion_24h: "-0.80%", variacion_7d: "-4.25%", market_cap: 650000000000, volumen_24h: 9000000000, suministro: 3170000000 },
  { id: 12, nombre: "Amazon.com Inc.", simbolo: "AMZN", tipo: "STOCK", precio_actual: 189.15, precio_compra: 187.00, precio_venta: 191.00, variacion: "+0.74%", variacion_24h: "+0.20%", variacion_7d: "+1.85%", market_cap: 1950000000000, volumen_24h: 8800000000, suministro: 10200000000 },
  { id: 13, nombre: "Microsoft Corp.", simbolo: "MSFT", tipo: "STOCK", precio_actual: 310.40, precio_compra: 308.00, precio_venta: 312.50, variacion: "+0.98%", variacion_24h: "+0.25%", variacion_7d: "+2.75%", market_cap: 2850000000000, volumen_24h: 10000000000, suministro: 9000000000 },
  { id: 14, nombre: "Dogecoin", simbolo: "DOGE", tipo: "CRYPTO", precio_actual: 0.079, precio_compra: 0.078, precio_venta: 0.081, variacion: "+3.25%", variacion_24h: "+0.95%", variacion_7d: "+5.80%", market_cap: 11000000000, volumen_24h: 1000000000, suministro: 140000000000 },
  { id: 15, nombre: "Yen Japonés", simbolo: "JPY", tipo: "FIAT", precio_actual: 0.0067, precio_compra: 0.0066, precio_venta: 0.0068, variacion: "-0.30%", variacion_24h: "-0.10%", variacion_7d: "-0.90%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 16, nombre: "Cardano", simbolo: "ADA", tipo: "CRYPTO", precio_actual: 0.60, precio_compra: 0.59, precio_venta: 0.61, variacion: "+1.15%", variacion_24h: "+0.34%", variacion_7d: "+3.05%", market_cap: 21000000000, volumen_24h: 1300000000, suministro: 35000000000 },
  { id: 17, nombre: "Meta Platforms", simbolo: "META", tipo: "STOCK", precio_actual: 245.30, precio_compra: 243.50, precio_venta: 247.10, variacion: "+0.88%", variacion_24h: "+0.19%", variacion_7d: "+1.95%", market_cap: 670000000000, volumen_24h: 6000000000, suministro: 2700000000 },
  { id: 18, nombre: "Litecoin", simbolo: "LTC", tipo: "CRYPTO", precio_actual: 92.15, precio_compra: 90.50, precio_venta: 93.80, variacion: "-0.63%", variacion_24h: "-0.25%", variacion_7d: "+0.50%", market_cap: 6800000000, volumen_24h: 500000000, suministro: 73000000 },
  { id: 19, nombre: "Francos Suizos", simbolo: "CHF", tipo: "FIAT", precio_actual: 1.12, precio_compra: 1.11, precio_venta: 1.13, variacion: "-0.18%", variacion_24h: "-0.05%", variacion_7d: "-0.40%", market_cap: "-", volumen_24h: "-", suministro: 0 },
  { id: 20, nombre: "Alibaba Group", simbolo: "BABA", tipo: "STOCK", precio_actual: 81.40, precio_compra: 80.10, precio_venta: 82.70, variacion: "-1.10%", variacion_24h: "-0.32%", variacion_7d: "-2.05%", market_cap: 220000000000, volumen_24h: 4700000000, suministro: 2700000000 }
];*/

let activos = []

async function obtenerCriptos() {
  try {
    const urlBase = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1&price_change_percentage=24h,7d';
    const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(urlBase);
    const respuesta = await fetch(proxyUrl);

    if (!respuesta.ok) throw new Error(`HTTP error: ${respuesta.status}`);

    const contenido = await respuesta.json();
    const datos = JSON.parse(contenido.contents);

    activos = datos.map((coin, index) => ({
      id: index + 1,
      nombre: coin.name,
      simbolo: coin.symbol.toUpperCase(),
      tipo: "CRYPTO",
      precio_actual: coin.current_price,
      precio_compra: coin.low_24h,
      precio_venta: coin.high_24h,
      variacion: calcularVariacion(coin.current_price, coin.low_24h),
      variacion_24h: formatPorcentaje(coin.price_change_percentage_24h),
      variacion_7d: formatPorcentaje(coin.price_change_percentage_7d_in_currency),
      market_cap: coin.market_cap,
      volumen_24h: coin.total_volume,
      suministro: coin.circulating_supply
    }));
    console.log(activos); 
   // loadSelecetFavorite();
    // Ejecutar la función
    //obtenerCriptos();

    loadContainerFavorite();
    loadConversor();
    loadTable();
  } catch (error) {
    //alert('Error al obtener los datos de la API: ' + error.message);
    console.error('Error:', error.message);
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


