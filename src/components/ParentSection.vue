<template>
  <div class="container">
    <div class="card-data">
      <div class="card" style="width: 30rem">
        <h1>ParentComponent</h1>
        <h1>Skills</h1>
        <ul v-for="(skill, index) in skills" :key="index">
          <li>Frontend: {{ skill.frontEnd }}</li>
          <li>Backend: {{ skill.backEnd }}</li>
          <li>Database: {{ skill.dataBase }}</li>
        </ul>
      </div>
      <div>
        <child-section
          :person-data="personDetials"
          @child-event="handleChildEvent"
        />
      </div>
      <div class="card">
        <child-section-2 />
      </div>
    </div>
  </div>
</template>

<script>
import ChildSection from "./ChildSection1.vue";
import ChildSection2 from "./ChildSection2.vue";
export default {
  components: { ChildSection, ChildSection2 },
  name: "parent-section",
  data() {
    return {
      personDetials: [
        {
          id: 1,
          name: "vishnu",
          age: 22,
          place: "Tamilnadu",
          education: "Bas IT",
          role: "Vue js Developer",
        },
      ],
      skills: [],
    };
  },
  methods: {
    handleChildEvent(data) {
      this.skills = data;
      console.log("Received", data);
    },
  },
};
</script>

<style>
.card-data {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>