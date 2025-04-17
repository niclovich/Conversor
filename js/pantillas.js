



function createCardactivos({ title, variation, spread, time, sellPrice, buyPrice }) {
  const className = variation > 0 ? 'positive' : variation < 0 ? 'negative' : 'neutral';
  return `
    <div class="card cotizacion-card ${className}">
      <div class="card-header-custom">
        <span>${title}</span>
        <span class="variation-badge">${variation > 0 ? '+' : ''}${variation.toFixed(2)}%</span>
      </div>
      <div class="spread-info">${time} &nbsp;|&nbsp; Spread: ${spread.toFixed(2)}</div>
      <div class="d-flex justify-content-between">
        <div class="price-block">
          <div class="price-label">VENDÉ A:</div>
          <div class="price-value">${sellPrice}</div>
        </div>
        <div class="price-block text-end">
          <div class="price-label">COMPRÁ A:</div>
          <div class="price-value">${buyPrice}</div>
        </div>
      </div>
      <div class="action-icons ">
        <i class="fas fa-clock"></i>
        <i class="fas fa-clipboard"></i>
      </div>
    </div>
  `;
}


function rowTable(simbolo,title,price,varation1h,varation24h,varation7d,volumen,marketcap,outstanding) {
  const tendencia7d = varation7d.charAt(0);
  const tendencia24h = varation24h.charAt(0);
  const tendencia1h = varation1h.charAt(0);
  const className7d = tendencia7d === '+' ? 'green-text' : 'red-text';
  const className24h = tendencia24h === '+' ? 'green-text' : 'red-text';
  const className1h = tendencia1h === '+' ? 'green-text' : 'red-text';
 //Imagen de gráfico según la tendencia 7d
  const sparklineImg = tendencia7d === '+' 
  ? 'img/grafico-up.png' 
  : 'img/grafico-down.png';

  return `
  <tr>
    <td><button class="fav-btn">☆</button></td><td>${simbolo}</td><td>${title}</td><td>${price}</td><td  class=${className1h} >${varation1h}</td><td class=${className24h} >${varation24h}</td><td class=${className7d} >${varation7d}</td><td>${volumen}</td><td>${marketcap}</td><td>${outstanding}</td>
    <td><img src=${sparklineImg} class="sparkline" alt="sparkline"></td>
  </tr> `;
}