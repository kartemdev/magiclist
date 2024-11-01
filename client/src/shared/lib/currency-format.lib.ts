export const currencyFormat = (value: number) =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency: 'RUB' }).format(value);
