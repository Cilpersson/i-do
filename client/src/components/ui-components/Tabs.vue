<template>
  <div class="form-tabs">
    <div
      v-for="(tab, index) in tabs"
      @click="selectedTab(tab.name)"
      :key="index"
      :class="['tab', { 'tab-selected': isSelected(tab.name) }]"
    >
      <p>{{ tab.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class Tabs extends Vue {
  get tabs() {
    return [{ name: "RSVP" }, { name: "Logga in" }];
  }

  currentTab = "RSVP";

  @Emit()
  selectedTab(tabName: string) {
    this.currentTab = tabName;
    return tabName;
  }

  isSelected(tabName: string): boolean {
    return this.currentTab === tabName;
  }
}
</script>

<style scoped lang="scss">
.form-tabs {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;

  .tab {
    width: 50%;
    height: fit-content;
    background: white;
    cursor: pointer;

    &:last-child {
      text-align: end;
    }
  }
  .tab-selected {
    background: #efdbe4;
  }
}
</style>
