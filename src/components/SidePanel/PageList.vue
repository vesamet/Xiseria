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
      :active.sync="active"
      activatable
      hoverable
      shaped
      color="accent"
      @update:active="viewPage"
    >
      <template slot="label" slot-scope="{ item }">
        <a class="page-title">{{ item.title }}</a>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "PageList",
  data: () => ({
    search: null,
    active: []
  }),
  computed: {
    ...mapGetters({
      pages: "pagesTree",
    }),
    selectedVault() {
      return this.$store.state.selection.vault;
    }
  },
  methods: {
    ...mapMutations(["setPage", "setView"]),
    viewPage: function(page) {
      if (page !== undefined && page.length >= 1) {
        this.setPage(page);
        this.setView("page");
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    selectedVault: function(newVault, oldVault) {
      this.active = [];
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.page-title {
  font-size: 1.2em;
}
.v-treeview {
  padding-right: 10px;
  overflow: auto;
}
</style>