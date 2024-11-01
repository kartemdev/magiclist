export const dateFormat = (date: Date | string) =>
  new Intl.DateTimeFormat(undefined).format(new Date(date));
