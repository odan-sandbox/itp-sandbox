export interface Storage {
  get(key: string): Promise<object | undefined>;
  set(key: string, value: object): Promise<void>;
}
