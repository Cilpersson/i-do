<template>
  <div>
    <h1>Save the Date</h1>
    <h2>2023-07-20</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SaveTheDate extends Vue {}
</script>
<style lang="scss" scoped>
div {
  background-image: url("../assets/flower-field.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1 {
  margin: 0;
  font-family: "Pacifico";
  font-weight: 200;
  font-size: 60px;
  color: #fb566d;
  h2 {
    margin: 0;
    font-size: 30px;
  }
}
</style>
