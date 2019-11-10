<template>
  <div class="page-container">
    <v-card v-if="selectedPage" class="page" height="100%">
      <draggable
        element="div"
        handle=".handle"
        v-model="content"
        @start="drag=true"
        @end="drag=false"
        ghost-class="ghost"
      >
        <div v-for="element in content" :key="element.id">
          <span class="handle">
            <v-icon x-small class="d-inline">mdi-hand-okay</v-icon>
          </span>
          <TextEdit v-model="element.value"></TextEdit>
        </div>
      </draggable>
    </v-card>
    <div v-if="!selectedPage">
      <v-row align="center" justify="center">
        <v-col>
          <p class="notice">Select a page on the left to view it's content.</p>
          <v-img
            src="../../assets/img/file.svg"
            alt="Select a file"
            aspect-ratio="1"
            contain
            height="400px"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
import TextEdit from "../Forms/TextEdit";
export default {
  name: "Page",
  data: () => ({
    editValue: null,
    editField: ""
  }),
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
  methods: {},
  components: {
    draggable,
    TextEdit
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
.page-container {
  height: 100%;
}
.page {
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  overflow-y: auto;
}
.notice {
  font-size: $size-2;
  text-align: center;
}
.ghost {
  opacity: 0.2;
}
</style>