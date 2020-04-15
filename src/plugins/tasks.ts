import { PluginObject } from "vue";
import { VisitUser, Event } from "../tasks/visitor";
import { LocalStorage } from "../storage/localstorage";
import { CookieStorage } from "../storage/cookie";

export type Options = {};

export type TaskEvent = {
  onVisit: () => Promise<void>;
  getEvents: () => Promise<Event[]>;
};

declare module "vue/types/vue" {
  interface Vue {
    $task: TaskEvent;
  }
}

export const taskPlugin: PluginObject<Options> = {
  install(Vue) {
    const visitUserTasks = [
      new VisitUser(new LocalStorage()),
      new VisitUser(new CookieStorage())
    ];
    async function onVisit() {
      await Promise.all(visitUserTasks.map(task => task.run()));
    }
    async function getEvents() {
      const events = await Promise.all(
        visitUserTasks.map(task => task.getEvents())
      );
      return events.flat();
    }

    Vue.prototype.$task = {
      onVisit,
      getEvents
    };
  }
};
