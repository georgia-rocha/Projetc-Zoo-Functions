const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionariosGerenciados = employees.filter((employee) =>
    employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
  return funcionariosGerenciados;
}
module.exports = { isManager, getRelatedEmployees };
