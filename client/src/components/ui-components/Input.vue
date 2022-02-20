<template>
  <label>
    {{ label }}
    <input
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', type, $event.target.value)"
    />
    <span></span>
  </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop({ default: "text" }) type: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
input {
  padding: 4px;
  margin-top: 4px;
  border: none;
  transition: all 200ms linear;
  border-radius: 2px;
  background: #efdbe4;
  box-shadow: 2px 2px 4px #cbbac6, -2px -2px 4px #fffcff;
}
input::placeholder {
  color: #fb566d;
  font-size: 8px;
}

input:focus {
  background: white;
  box-shadow: 2px 2px 4px #cccccc, -2px -2px 4px #fafafa;
  transition: all 200ms linear;
  color: grey;
}
input:focus::placeholder {
  color: transparent;
}

input:focus:not([data-focus-visible-added]) {
  outline: none;
}
</style>
