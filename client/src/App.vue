<template>
  <div id="app">
    <nav>
      <router-link to="/">SaveTheDate</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@font-face {
  font-family: "Pacifico";
  src: local("Pacifico"), url(./fonts/Pacifico-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Raleway";
  src: local("Raleway"), url(./fonts/Raleway-Regular.ttf) format("truetype");
}
* {
  margin: 0;
  padding: 0;
  font-family: Raleway, Helvetica, Arial;
}
div {
  background-image: url("./assets/flower-field.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
</style>
