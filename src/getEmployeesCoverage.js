const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getEmployee(funcionario) {
  const funcionarioEncontrado = employees.find((employee) =>
    funcionario.name === employee.firstName || funcionario.name === employee.lastName
    || funcionario.id === employee.id);
  const animaisID = funcionarioEncontrado.responsibleFor;
  const residentsDaSpecie = animaisID.map((id) => species.find((specie) => specie.id === id));
  const nomeAnimal = residentsDaSpecie.map((animal) => animal.name);
  const locationAnimal = residentsDaSpecie.map((animal) => animal.location);

  return {
    id: funcionarioEncontrado.id,
    fullName: `${funcionarioEncontrado.firstName} ${funcionarioEncontrado.lastName}`,
    species: nomeAnimal,
    locations: locationAnimal,
  };
}

function getEmployeesCoverage(funcionario) {
  const invalidID = employees.every((employee) => (
    funcionario && funcionario.id ? employee.id !== funcionario.id : false));
  if (!funcionario) {
    const funcionarios = employees.map((employee) => getEmployee({ id: employee.id }));
    return funcionarios;
  } if (invalidID) {
    throw new Error('Informações inválidas');
  }
  return getEmployee(funcionario);
}

module.exports = getEmployeesCoverage;
