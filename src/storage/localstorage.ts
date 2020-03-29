import { Storage } from "./interface";

export class LocalStorage implements Storage {
  public set(key: string, value: object) {
    window.localStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }

  public get(key: string) {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(JSON.parse(value));
  }
}
