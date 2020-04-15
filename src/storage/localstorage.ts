import { Storage } from "../tasks/interface";

export class LocalStorage implements Storage {
  public readonly name = "LocalStorage";
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
