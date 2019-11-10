<template>
  <v-list dense>
    <v-list-item link @click="setView('home')">
      <v-list-item-action>
        <v-icon small :color="view == 'home' ? 'accent' : ''">mdi-home</v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item link @click="setView('vault')">
      <v-list-item-action>
        <v-icon small :color="view == 'vault' ? 'accent' : ''">mdi-treasure-chest</v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>Vault</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SideNav",
  data() {
    return {};
  },
  computed: {
    view() {
      return this.$store.state.view;
    }
  },
  methods: {
    ...mapMutations(["setView"])
  }
};
</script>

<style>
</style>