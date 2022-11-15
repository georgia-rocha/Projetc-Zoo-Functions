const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => id === employee.id);
  if (funcionario) {
    const animalId = funcionario.responsibleFor[0];
    const residentsDaSpecie = species.find((specie) => specie.id === animalId).residents;

    const animalMaisVelho = residentsDaSpecie.reduce((acc, curr) => (
      acc.age < curr.age ? curr : acc));
    return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
  }
}
module.exports = getOldestFromFirstSpecies;
