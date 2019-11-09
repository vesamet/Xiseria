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
      <v-icon
        class="rounded"
        v-ripple
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >mdi-format-paint</v-icon>
      <span>{{dateNow}}</span>
    </v-system-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <Page></Page>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="primary" app height="30">
      <v-spacer />
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>


<script>
import HeaderNav from "./components/HeaderNav";
import SideNav from "./components/SideNav";
import Page from "./components/Page";
import PageList from "./components/PageList";

export default {
  name: "App",

  components: {
    HeaderNav,
    SideNav,
    Page,
    PageList
  },

  data: () => ({
    drawer: null,
    dateNow: "",
    darkMode: false
  }),
  methods: {
    time() {
      var d = new Date();
      this.dateNow = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
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