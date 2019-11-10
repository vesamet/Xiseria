<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app left>
      <SideNav></SideNav>
      <PageList></PageList>
    </v-navigation-drawer>

    <v-system-bar app height="30" color="primary">
      <v-icon class="rounded" size="20" v-ripple @click.stop="drawer = !drawer">mdi-menu</v-icon>
      <h1 class="app-title accent--text">XISERIA</h1>
      <v-spacer></v-spacer>
      <HeaderNav></HeaderNav>
      <v-spacer></v-spacer>
      <v-icon
        class="rounded"
        v-ripple
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >mdi-format-paint</v-icon>
      <span>{{dateNow}}</span>
    </v-system-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <VaultList v-if="view == 'vault'"></VaultList>
            <Page v-if="view == 'page'"></Page>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="primary" app height="30">
      <v-spacer />
      <span>Gwenaël Guyot &copy; 2019</span>
    </v-footer>
  </v-app>
</template>


<script>
import HeaderNav from "./components/HeaderNav";
import SideNav from "./components/SidePanel/SideNav";
import Page from "./components/BoardPanel/Page";
import PageList from "./components/SidePanel/PageList";
import VaultList from "./components/BoardPanel/VaultList";

export default {
  name: "App",

  components: {
    HeaderNav,
    SideNav,
    Page,
    PageList,
    VaultList
  },

  data: () => ({
    drawer: null,
    dateNow: "",
    darkMode: false
  }),
  computed: {
    view() {
      return this.$store.state.view;
    }
  },
  methods: {
    time() {
      var d = new Date();
      function getSecondsWithZeros(dt) {
        return (dt.getSeconds() < 10 ? "0" : "") + dt.getSeconds();
      }
      this.dateNow = d.getHours() + ":" + d.getMinutes() + ":" + getSecondsWithZeros(d);
    }
  },
  mounted() {
    this.interval = setInterval(this.time, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

html,
body,
.v-application {
  font-family: $text-font !important;
  font-size: $body-size;
}
.v-application a {
  color: inherit !important;
}
.v-application p {
  margin-bottom: 0px !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $title-font;
}
.app-title {
  padding-left: 10px;
  font-size: $size-2;
}
.rounded {
  border-radius: 50%;
  padding: 3px;
}
</style>