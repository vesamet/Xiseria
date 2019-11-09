<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search Pages"
      solo
      flat
      dence
      hide-details
      clearable
      clear-icon="mdi-close-circle-outline"
    ></v-text-field>
    <v-treeview
      dense
      :items="pages"
      item-text="title"
      :search="search"
      activatable
      hoverable
      shaped
      color="accent"
      @update:active="setPage"
    ></v-treeview>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "PageList",
  data: () => ({
    search: null
  }),
  computed: {
    ...mapGetters({
      pages: "pagesTree"
    })
  },
  methods: {
    ...mapMutations(["setPage"])
  }
};
</script>

<style>
</style>