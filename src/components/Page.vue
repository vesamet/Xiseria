<template>
  <draggable v-model="content" @start="drag=true" @end="drag=false">
    <div v-for="element in content" :key="element.id">{{element.value}}</div>
  </draggable>
</template>

<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
export default {
  name: "Page",
  computed: {
    ...mapGetters(["page"]),
    selectedVault() {
      return this.$store.state.selection.vault;
    },
    selectedPage() {
      return this.$store.state.selection.page;
    },
    content: {
      get() {
        return this.page.content;
      },
      set(value) {
        var payload = {
          vault: this.selectedVault,
          page: this.selectedPage,
          content: value
        };
        this.$store.commit("updatePage", payload);
      }
    }
  },
  components: {
    draggable
  }
};
</script>

<style>
</style>