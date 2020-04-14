import cookie from "js-cookie";
import { Storage } from "../tasks/interface";

export class CookieStorage implements Storage {
  public readonly name = CookieStorage.name;
  public set(key: string, value: object) {
    cookie.set(key, JSON.stringify(value));
    return Promise.resolve();
  }

  public get(key: string) {
    const value = cookie.get(key);
    if (value === undefined) {
      return Promise.resolve(undefined);
    }
    return Promise.resolve(JSON.parse(value));
  }
}
