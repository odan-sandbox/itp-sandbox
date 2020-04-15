export interface Task<Event> {
  run(): Promise<void>;
  // 責務多すぎない？
  getEvents(): Promise<Event[]>;
}

export interface Storage {
  readonly name: string;
  get(key: string): Promise<object | undefined>;
  set(key: string, value: object): Promise<void>;
}
