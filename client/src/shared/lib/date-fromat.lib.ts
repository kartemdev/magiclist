export enum LocalesTags {
  RUS = 'ru-RU',
  US = 'en-US',
}

export const dateFormat = (date: Date | string, localeTag: LocalesTags) =>
  new Intl.DateTimeFormat(localeTag).format(new Date(date));
