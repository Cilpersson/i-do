<template>
  <div class="wrapper">
    <label class="checkbox-container">
      {{ label }}
      <input type="checkbox" checked="checked" v-model="checkedValue" />
      <span class="custom-checkbox"></span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit, Prop } from "vue-property-decorator";

@Component
export default class Checkbox extends Vue {
  @Prop() label: string;
  checkedValue = false;

  @Watch("checkedValue")
  watchChecked() {
    this.checkboxValue();
  }

  @Emit()
  checkboxValue() {
    return this.checkedValue;
  }

  mounted() {
    this.checkedValue = true;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background: inherit;
  display: flex;
  justify-content: space-around;
  height: -webkit-fit-content;

  height: fit-content;
  width: 100%;
  padding: 8px 0;
}
/* Container for both checkbox and label*/
.checkbox-container {
  display: block;
  position: relative;
  padding-right: 25px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

/* Hide the default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Hide the default checkbox */
.custom-checkbox {
  position: absolute;
  top: 0;
  right: 0;
  height: 18px;
  width: 18px;
  border-radius: 2px;
  background: #efdbe4;
  box-shadow: 2px 2px 4px #cbbac6, -2px -2px 4px #fffcff;
}

/* On hover add darken background for custom checkbox*/
.checkbox-container:hover input ~ .custom-checkbox {
  background: linear-gradient(145deg, #cbbac6, #ffeafc);
  box-shadow: 2px 2px 4px #cbbac9, -2px -2px 4px #fffcff;
}

/* When the checkbox is checked, darker background */
.checkbox-container input:checked ~ .custom-checkbox {
  background: #efdbe4;
  box-shadow: inset 2px 2px 4px #cbbac7, inset -2px -2px 4px #fffcff;
  box-shadow: 2px 2px 4px #cbbac9, -2px -2px 4px #fffcff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.custom-checkbox:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .custom-checkbox:after {
  display: block;
}

/* Style custom checkmark ✔ */
.checkbox-container .custom-checkbox:after {
  left: 7px;
  top: 4px;
  width: 3px;
  height: 6px;
  border-radius: 1px;
  border: solid #fb566d;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
checkbox-container
  input:focus:not([data-focus-visible-added])
  + .custom-checkbox {
  outline: none;
}
</style>
