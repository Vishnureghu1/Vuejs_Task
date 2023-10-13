<template>
  <div id="app">
    <nav>
      <router-link class="btn btn-primary text-white" to="/">Data Communication</router-link> |
      <router-link class="btn btn-primary text-white" to="/about">Api section</router-link> |
      <router-link class="btn btn-primary text-white" to="/input-from"> DynamicForm section</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
