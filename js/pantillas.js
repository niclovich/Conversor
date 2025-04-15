



function createCardMoneda({ title, variation, spread, time, sellPrice, buyPrice }) {
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
