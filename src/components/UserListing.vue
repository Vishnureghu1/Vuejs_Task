<template>
  <div>
    <div class="form-group">
      <div class="col-xs-2">
        <label for="ex1">Search</label>
        <input
          class="form-control"
          v-model.trim="searchQuery"
          placeholder="search..."
          id="ex1"
          type="text"
        />
      </div>
    </div>
    <div class="">
      <div v-if="usersList.length == 0">
        <h1>Users not found!</h1>
      </div>
      <div v-else class="container main">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">UserId</th>
              <th scope="col">body</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in usersList" :key="post.id">
              <th scope="row">{{ post.id }}</th>
              <td>{{ post.title }}</td>
              <td>{{ post.userId }}</td>
              <td>{{ post.body }}</td>
            </tr>
            <tr>
              <td colspan="4">
                <button @click="previousPage" style="margin-right: 5px;" class="btn btn-primary">
                  Previous
                </button>
                <button @click="nextPage" class="btn btn-primary">Next</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["currentPage", "itemsPerPage"]),
    ...mapGetters(["paginatedUsers"]),
    usersList() {
      return this.paginatedUsers.filter((user) => {
        return (
          user.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.body.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.id.toString() == this.searchQuery
        );
      });
    },
  },
  methods: {
    ...mapMutations(["setPosts", "setCurrentPage"]),
    ...mapActions(["fetchUsers"]),
    previousPage() {
      this.setCurrentPage(this.currentPage - 1);
    },
    nextPage() {
      this.setCurrentPage(this.currentPage + 1);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style>
.main {
  width: 95%;
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-group {
  width: 20%;
  display: flex;
  /* align-items: center; */
  margin-left: 53rem;
  padding: 16px;
}
</style>