<template>
  <div>
    <h1>Child section 1</h1>
    <div class="card" style="width: 30rem">
      <ul v-for="person in personData" :key="person.id">
        <li>Name: {{ person.name }}</li>
        <li>Age: {{ person.age }}</li>
        <li>Place: {{ person.place }}</li>
        <li>Education: {{ person.education }}</li>
        <li>Role: {{ person.role }}</li>
      </ul>
      <div>
        <button class="btn btn-info btn-style" @click="sendDataToParent">Send Data to Parent</button>
        <button class="btn btn-info"  @click="sendDataToChild">Send Data child to child</button>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus";
export default {
  name: "child-section",
  data() {
    return {
      uiFramWorks: [
        {
          id: 1,
          item1: "Vuetify",
          item2: "Tailwind css",
          item3: "Vue bootstrape",
        },
      ],
      personSkills: [
        {
          frontEnd: "Vue js",
          backEnd: "Laravel",
          dataBase: "Mysql",
        },
      ],
    };
  },
  props: {
    personData: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  methods: {
    sendDataToParent() {
      this.$emit("child-event", this.personSkills);
    },
    sendDataToChild() {
      EventBus.$emit("my-event", this.uiFramWorks);
    },
  },
};
</script>

<style>
.btn-style {
  margin-right: 10px;
}
</style>