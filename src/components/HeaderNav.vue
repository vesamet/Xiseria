<template>
  <div class="nav">
    <p class="greeting">Welcome back, <strong>{{firstname | capitalize}} {{lastname | capitalize}}</strong></p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    firstname() {
      return this.$store.state.user.firstname;
    },
    lastname() {
      return this.$store.state.user.lastname;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.nav {
  display: block;
}
.greeting {
  vertical-align: middle;
  padding-right: 15px;
  margin-bottom: 0px;
}
</style>