import { Task, Storage } from "./interface";

export class Event {
  private readonly time: Date;
  private readonly storageName: string;

  constructor(time: Date | number, storageName: string) {
    if (typeof time === "number") {
      this.time = new Date(time);
    } else {
      this.time = time;
    }
    this.storageName = storageName;
  }

  public get timestamp() {
    return this.time.getTime();
  }

  public asPrimitive() {
    return {
      time: this.timestamp,
      storageName: this.storageName
    };
  }
}

export class VisitUser implements Task {
  public constructor(private readonly storage: Storage) {}
  private get keys() {
    const prefix = `itp-sandbox_${this.storage.name}`;
    return {
      LAST_VISITED_AT: `${prefix}_last_visited_at`,
      FIRST_VISITED_AT: `${prefix}_first_visited_at`
    };
  }
  public async run() {
    const event = new Event(new Date(), this.storage.name);
    this.storage.set(this.keys.LAST_VISITED_AT, event.asPrimitive());

    if (!(await this.storage.get(this.keys.FIRST_VISITED_AT))) {
      this.storage.set(this.keys.FIRST_VISITED_AT, event.asPrimitive());
    }
  }
}
