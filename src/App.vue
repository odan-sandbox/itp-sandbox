<template>
  <div id="app">
    <div class="browser">
      <span>{{ browser.name }}</span>
      <span>{{ browser.version }}</span>
    </div>
    <div
      v-for="(event, i) in events"
      :key="`${event.name}${event.storageName}`"
    >
      <span>
        {{ event.name }}
      </span>
      <span>
        {{ event.storageName }}
      </span>
      <span>
        {{ times[i] }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { format } from "date-fns";
import Bowser from "bowser";

import { Event } from "./tasks/visitor";

export default Vue.extend({
  name: "App",
  data: () => {
    return {
      events: [] as Event[],
      browser: undefined as Bowser.Parser.BrowserDetails | undefined
    };
  },
  computed: {
    times() {
      return this.events.map(event =>
        format(event.timeForDate, "yyyy/MM/dd HH:mm:ss")
      );
    }
  },
  created(): void {
    this.$task.onVisit().then(async () => {
      this.events = await this.$task.getEvents();
    });
    this.browser = Bowser.getParser(window.navigator.userAgent).getBrowser();
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.browser > span {
  margin: 4px;
}
</style>
