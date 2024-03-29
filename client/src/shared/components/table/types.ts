export interface ISelectedRows<T> {
  [key: string]: T;
}

export interface IRow<T> {
  id: string;
  data: T;
}
export interface ISortData<T> {
  fieldName: Key<T>;
  sortType: string;
}
