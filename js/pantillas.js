



function createCardactivos(activo) {
  const time = new Date().toLocaleTimeString();
  const variacionNum = parseFloat(activo.variacion_1h ?? 0);
  const classNameCard = variacionNum >= 0 ? 'success' : variacionNum < 0 ? 'warning' : '';
  const ClassNameBadge = variacionNum>= 0 ? 'variation-badge-success' :'variation-badge-warning' ;
  const spread = activo.precio_venta - activo.precio_compra;
  return `
    <div class="cotizacion-card ${classNameCard}" id="fav-${activo.id}">
      <div class="card-header-custom">
        <span>${activo.nombre} (${activo.simbolo})</span>
        <span class="${ClassNameBadge}">${activo.variacion_1h > 0 ? '+' : ''}${activo.variacion_1h}</span>
      </div>
      <div class="spread-info">${time} &nbsp;|&nbsp; Spread: ${spread.toFixed(2)}</div>
      <div class="d-flex justify-content-between">
        <div class="price-block">
          <div class="price-label">VENDÉ A:</div>
          <div class="price-value">${activo.precio_venta}</div>
        </div>
        <div class="price-block text-end">
          <div class="price-label">COMPRÁ A:</div>
          <div class="price-value">${activo.precio_compra}</div>
        </div>
      </div>
      <div class="action-icons ">
          <i class="fas fa-star" onclick="addFavorite(this, ${activo.id})" ></i> 
          <i class="fas fa-calculator" onclick="loadToConverter(${activo.id})"  ></i>

      </div>
    </div>
  `;
}


function createCardFiat(activo) {
  const time = new Date().toLocaleTimeString();

  return `
    <div class="cotizacion-card success" id="fav-${activo.id}">
      <div class="card-header-custom">
        <span>💸${activo.moneda} - ${activo.nombre} </span>
      </div>
      <div class="spread-info">${time}</div>
      <div class="d-flex justify-content-between">
        <div class="price-block">
          <div class="price-label">VENDÉ A:</div>
          <div class="price-value">${activo.precio_venta}</div>
        </div>
        <div class="price-block text-end">
          <div class="price-label">COMPRÁ A:</div>
          <div class="price-value">${activo.precio_compra}</div>
        </div>
      </div>
    </div>
  `;

}

function rowTable(activo) {
  //    const rowHTML = rowTable(activo.simbolo, activo.nombre, activo.precio_actual, activo.variacion, activo.variacion_24h, activo.variacion_7d, activo.volumen_24h, activo.market_cap, activo.suministro, 'img/grafico.png');
  //console.log(activo.variacion_7d);
  const tendencia7d = String(activo.variacion_7d).charAt(0);
  const tendencia24h = String(activo.variacion_24h).charAt(0);
  const tendencia1h = String(activo.variacion_1h).charAt(0);
  const className7d = tendencia7d >=0 ? 'green-text' : 'red-text';
  const className24h = tendencia24h >=0  ? 'green-text' : 'red-text';
  const className1h = tendencia1h >=0   ? 'green-text' : 'red-text';
 //Imagen de gráfico según la tendencia 7d
  const sparklineImg = tendencia7d  >=0 
  ? 'img/grafico-up.png' 
  : 'img/grafico-down.png';

  const iconoFavorito = inFavoritos(activo.id) ? '★' : '☆';
  const claseFavorito = inFavoritos(activo.id) ? 'favorited' : '';
  return `
  <tr>
    <td><button class="fav-btn ${claseFavorito}" onclick="addFavorite(this, ${activo.id})">${iconoFavorito}</button></td>
    <td>${activo.simbolo}</td><td>${activo.nombre}</td><td>${activo.precio_actual}</td>
    <td class=${className1h}>${activo.variacion_1h}</td>
    <td class=${className24h}>${activo.variacion_24h}</td>
    <td class=${className7d}>${activo.variacion_7d}</td>
    <td>${activo.volumen_24h}</td><td>${activo.market_cap}</td><td>${activo.suministro}</td>
    <td><img src=${sparklineImg} class="sparkline" alt="sparkline"></td>
  </tr>`;
}