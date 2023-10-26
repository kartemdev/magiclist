type Entry<T> = {
  [K in Key<T>]: [K, T[K]]
}[Key<T>];

type Callback<T> = (value: Entry<T>,  index: number, array: Entry<T>[]) => boolean;

export const filterObject = <T extends {}, R extends {}, >(object: T, callback: Callback<T>) =>
  Object.fromEntries((Object.entries(object) as Entry<T>[]).filter(callback)) as R;

export const withoutField = <T extends {}, R extends {}, >(object: T, selfKey: Key<T>) => {
  if (!(selfKey in object)) {
    return object;
  }

  return filterObject<T, R>(object, ([key]) => key !== selfKey);
};
