const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('verifica se count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('verifica se names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('verifica se retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('verifica se retorna a inteligência dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('verifica se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('verifica se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('verifica se a função retorna uma frase, caso o parâmetro passado não seja uma string', () => {
    expect(handlerElephants(!String)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('verifica se a função retorna null, caso o parâmetro passado seja inesistente', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });
});
