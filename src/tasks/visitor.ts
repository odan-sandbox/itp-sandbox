import { Task } from "./interface";
import { Storage } from "../storage/interface";

export class VisitUser implements Task {
  public constructor(private readonly storage: Storage) {}
  private get keys() {
    return {
      LAST_VISITED_AT: "last_visited_at",
      FIRST_VISITED_AT: "first_visited_at"
    };
  }
  public async run() {
    this.storage.set(this.keys.LAST_VISITED_AT, { time: new Date().getTime() });

    if (!this.storage.get(this.keys.FIRST_VISITED_AT)) {
      this.storage.set(this.keys.FIRST_VISITED_AT, {
        time: new Date().getTime()
      });
    }
  }
}
