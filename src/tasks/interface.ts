export interface Task {
  run(): Promise<void>;
}

export interface Storage {
  readonly name: string;
  get(key: string): Promise<object | undefined>;
  set(key: string, value: object): Promise<void>;
}
