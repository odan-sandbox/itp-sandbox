import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { Task, Storage } from "./interface";

export class Event {
  public readonly name: string;
  public readonly time: number;
  public readonly storageName: string;

  constructor(name: string, time: number, storageName: string) {
    this.name = name;
    this.time = time;
    this.storageName = storageName;
  }

  public get timeForDate() {
    return new Date(this.time);
  }

  public asPrimitive() {
    return {
      name: this.name,
      time: this.time,
      storageName: this.storageName
    };
  }

  public static fromPrimitive(value: object) {
    return plainToClass(Event, value);
  }
}

export class VisitUser implements Task<Event> {
  public constructor(private readonly storage: Storage) {}
  private get keys() {
    const prefix = `itp-sandbox_${this.storage.name}`;
    return {
      LAST_VISITED_AT: `${prefix}_last_visited_at`,
      FIRST_VISITED_AT: `${prefix}_first_visited_at`
    };
  }
  public async run() {
    const time = new Date().getTime();
    this.storage.set(
      this.keys.LAST_VISITED_AT,
      new Event("LastVisited", time, this.storage.name).asPrimitive()
    );

    if (!(await this.storage.get(this.keys.FIRST_VISITED_AT))) {
      this.storage.set(
        this.keys.FIRST_VISITED_AT,
        new Event("FirstVisited", time, this.storage.name).asPrimitive()
      );
    }
  }
  public async getEvents() {
    const keys = Object.values(this.keys);
    const values = await Promise.all(keys.map(key => this.storage.get(key)));
    const events = values
      .filter((v): v is object => !!v)
      .map(v => Event.fromPrimitive(v));

    // transform と validate が離れるの微妙な気がする...
    // 次は poi とか試すか
    await Promise.all(events.map(event => validateOrReject(event)));

    return events;
  }
}
