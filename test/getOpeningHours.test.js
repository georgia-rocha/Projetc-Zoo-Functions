const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('verifica se nome do dia da semana passado como argumento tem que ser em inglês', () => {
    expect(getOpeningHours()).toEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  });
  it('verifica se o horário tem a seguinte formatação `XX:XX-XM`', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('09:00-AM');
  });
  it('verifica se o Zoo está fechado na segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('verifica se o Zoo está fechado na terça', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('verifica se o Zoo está fechado na quarta', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('verifica se passado os argumentos Thu e 09:00-AM lança uma mensagem:`The day must be valid. Example: Monday`', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('verifica se passado os argumentos Friday e 09:00-ZM lança uma mensagem:`The abbreviation must be \'AM\' or \'PM\'`', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('verifica se passado os argumentos Saturday e C9:00-AM lança uma mensagem:`The hour should represent a number`', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('verifica se passado os argumentos Sunday e 09:c0-AM lança uma mensagem:`The minutes should represent a number`', () => {
    expect(getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('verifica se passado os argumentos Sunday e 13:40-AM lança uma mensagem:`The hour must be between 0 and 12`', () => {
    expect(getOpeningHours('Sunday', '13:40-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('verifica se passado os argumentos Sunday e 09:60-AM lança uma mensagem:`The minutes must be between 0 and 59`', () => {
    expect(getOpeningHours('Sunday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
