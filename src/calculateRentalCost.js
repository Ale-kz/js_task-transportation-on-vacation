/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const aluguelDia = days * 40;
  const descontoTresDias = aluguelDia - 20;
  const descontoSeteDias = aluguelDia - 50;

  if (days < 3) {
    return aluguelDia;
  }

  if (days >= 3 && days < 7) {
    return descontoTresDias;
  }

  if (days >= 7) {
    return descontoSeteDias;
  }
}

module.exports = calculateRentalCost;
