<template>
  <div>
    <h1>Child section 2</h1>
    <ul v-for="fram in frameWorks" :key="fram.id">
      <li>{{ fram.item1 }}</li>
      <li>{{ fram.item2 }}</li>
      <li>{{ fram.item3 }}</li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus";
export default {
  name: "child-section2",
  data() {
    return {
      frameWorks: [],
    };
  },
  mounted() {
    EventBus.$on("my-event", (eventData) => {
      this.frameWorks = eventData;
      console.log("eventData", eventData);
    });
  },
  beforeDestroy() {
    EventBus.$off("my-event");
  },
};
</script>

<style>
</style>