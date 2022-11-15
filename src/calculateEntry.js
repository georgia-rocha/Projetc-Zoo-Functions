const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const visitantes = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      visitantes.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      visitantes.adult += 1;
    } else {
      visitantes.senior += 1;
    }
  });
  return visitantes;
};

function calculateEntry(entrants) {
  if (!entrants || !Object.entries(entrants).length) {
    return 0;
  }
  const funcaoEntrants = countEntrants(entrants);
  const valores = (funcaoEntrants.child * prices.child)
    + (funcaoEntrants.adult * prices.adult)
    + (funcaoEntrants.senior * prices.senior);
  return valores;
}

module.exports = { calculateEntry, countEntrants };
