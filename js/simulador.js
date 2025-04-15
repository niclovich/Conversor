// Datos base simulados
const monedas = [
    // Monedas FIAT
    { nombre: "Peso Argentino", simbolo: "ARS", precioUSD: 1 / 1050 },
    { nombre: "Dólar Estadounidense", simbolo: "USD", precioUSD: 1 },  
    { nombre: "Peso Mexicano", simbolo: "MXN", precioUSD: 1 / 17 },    
    { nombre: "Real Brasileño", simbolo: "BRL", precioUSD: 1 / 5 },     
  
    // monedamonedas
    { nombre: "Bitcoin", simbolo: "BTC", precioUSD: 68000 },
    { nombre: "Ethereum", simbolo: "ETH", precioUSD: 3600 },
    { nombre: "Tether", simbolo: "USDT", precioUSD: 1 },
    { nombre: "BNB", simbolo: "BNB", precioUSD: 550 },
    { nombre: "Solana", simbolo: "SOL", precioUSD: 180 },
    { nombre: "XRP", simbolo: "XRP", precioUSD: 0.6 }
  ];

  

  const jump = "\n";
  const conversion = (cantidad, monedaDesde, monedaHacia) => {
    const valorUSD = cantidad * monedaDesde.precioUSD;
    return valorUSD / monedaHacia.precioUSD;
  };
    // Función para mostrar lista de monedas

    function mostrarmonedas() {
      const simbolos = monedas.map(moneda => moneda.simbolo);
      const baseSimbolo = prompt("Ingrese el símbolo de la moneda base para convertir\n(" + simbolos.join(", ") + ")").toUpperCase();
    
      const monedaBase = monedas.find(moneda => moneda.simbolo === baseSimbolo);
    
      if (!monedaBase) {
        alert("Moneda no encontrada.");
        return;
      }
    
      let mensaje = `Listado valuado en  ${monedaBase.simbolo}\n\n`;
    
      monedas.forEach(moneda => {
        if (moneda.simbolo !== monedaBase.simbolo) {
          const cantidadConvertida = conversion(1, moneda, monedaBase); 
          mensaje += `- 1 ${moneda.simbolo} = ${cantidadConvertida.toFixed(10)} ${monedaBase.simbolo} (${moneda.nombre})\n`;
        }
      });
    
      alert(mensaje);
    }
    
  // Función para convertir entre monedamonedas
  function convertirmoneda() {
    var simbolos = monedas.map(moneda => moneda.simbolo);
    const desde = prompt("Convertir desde ("+ simbolos.join(",")+").").toUpperCase();
    var rest_simbolos =simbolos.filter(simbolo => simbolo != desde);  ;
    const hacia = prompt("Convertir hacia ("+ rest_simbolos.join(",")+").").toUpperCase();
    const cantidad = parseFloat(prompt(`¿Cuántos ${desde} deseas convertir?`));
  
    const monedaDesde = monedas.find(c => c.simbolo === desde);
    const monedaHacia = monedas.find(c => c.simbolo === hacia);
  
    if (!monedaDesde || !monedaHacia || isNaN(cantidad) || cantidad <= 0) {
      alert("Datos inválidos.");
      return;
    }
  
    const cantidadConvertida = conversion(cantidad, monedaDesde, monedaHacia);
    
    //alert(`${cantidad} ${desde} equivale a ${cantidadConvertida.toFixed(10)} ${hacia}`);
  }
  
  // Menú de simulador
  function iniciarSimulador() {
    alert("¡Bienvenido a moneda Bro!");
    let continuar = true;
    while (continuar) {
      const opcion = prompt(
        "Seleccione una opción:"+jump+"1. Ver monedamonedas disponibles"+jump+"2. Convertir monedamonedas"+jump+"3. Salir"
      );
  
      switch (opcion) {
        case "1":
            mostrarmonedas();
          break;
        case "2":
            convertirmoneda();
            break;
        case "3":
          continuar = false;
          break;
        default:
          alert("Opción inválida.");
      }
  
      if (continuar) {
        continuar = confirm("¿Desea realizar otra operación?");
      }
    }
  
    alert("Gracias por usar el simulador.");
  }
  
  // Llamada inicial
  ///iniciarSimulador();
  