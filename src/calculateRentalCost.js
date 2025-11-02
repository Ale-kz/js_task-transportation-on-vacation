/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const valorPorDia = 40;
  const aluguelDia = days * valorPorDia;
  const descontoTresDias = 20;
  const descontoSeteDias = 50;
  const aluguelSeteDias = aluguelDia - descontoSeteDias;
  const aluguelTresDias = aluguelDia - descontoTresDias;

  if (days < 3) {
    return aluguelDia;
  }

  if (days >= 3 && days < 7) {
    return aluguelTresDias;
  }

  if (days >= 7) {
    return aluguelSeteDias;
  }
}

module.exports = calculateRentalCost;
