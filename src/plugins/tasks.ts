import { PluginObject } from "vue";
import { VisitUser } from "../tasks/visitor";
import { LocalStorage } from "../storage/localstorage";
import { CookieStorage } from "@/storage/cookie";

export type Options = {};

type TaskEvent = {
  onVisit: () => Promise<void>;
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

    Vue.prototype.$task = {
      onVisit
    };
  }
};
