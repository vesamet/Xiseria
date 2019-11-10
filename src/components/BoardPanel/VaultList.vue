<template>
  <div>
    <h3 class="category-title text-left">
      <v-icon class="pb-1 pr-2">mdi-apps</v-icon>Vaults
    </h3>
    <v-card class="mb-5 pb-3 mt-3 px-3">
      <v-text-field
        v-model="search"
        label="Search Vaults"
        solo
        flat
        dence
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
      <v-data-iterator :items="vaults" :search="search" disable-pagination hide-default-footer>
        <template v-slot:default="props">
          <v-row class="vaults">
            <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
              <v-hover v-slot:default="{ hover }">
                <v-card v-ripple @click="viewVault(item.id)" :elevation="hover ? 7 : 2">
                  <v-card-title>
                    <h4>
                      <v-icon
                        class="pb-1 pr-2"
                        :color="item.id == selectedVault ? 'accent' : ''"
                      >mdi-treasure-chest</v-icon>
                      {{ item.name }}
                    </h4>
                  </v-card-title>
                  <v-divider></v-divider>
                  <p class="text-md px-2 py-2">Pages: {{ item.pages.length }}</p>
                </v-card>
              </v-hover>
            </v-col>
            <v-col class="col-sm-6">
              <v-img
                src="../../assets/img/box.svg"
                alt="Select a file"
                aspect-ratio="1"
                contain
                height="200px"
              ></v-img>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "VaultList",
  data: () => ({
    search: null
  }),
  computed: {
    vaults() {
      return this.$store.state.vaults;
    },
    selectedVault() {
      return this.$store.state.selection.vault;
    }
  },
  methods: {
    ...mapMutations(["setVault", "setView", "setPage"]),
    viewVault: function(vault) {
      if (vault !== undefined && vault.length >= 1) {
        this.setVault(vault);
        this.setPage('');
        this.setView("page");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";
.category-title {
  font-size: $size-2;
}
.vaults {
  overflow:auto;
}
</style>