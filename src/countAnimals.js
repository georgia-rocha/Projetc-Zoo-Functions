const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const animalEspecifico = species.find((specie) =>
    specie.name === animal.specie).residents;

  if (animal.specie && !animal.sex) {
    return animalEspecifico.length;
  }
  const animaisPorSex = animalEspecifico.filter((specie) => specie.sex === animal.sex);
  return animaisPorSex.length;
}

module.exports = countAnimals;
