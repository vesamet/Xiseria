<template>
  <div class="d-inline">
    <textarea
      type="text"
      v-if="edit"
      :value="valueLocal"
      @blur.native="valueLocal = $event.target.value; edit = false; $emit('textarea', valueLocal);"
      @keyup.enter.exact="valueLocal = $event.target.value; edit = false; $emit('textarea', valueLocal);"
      v-focus
    />
    <pre v-else @click="edit = true;" class="d-inline-block text">{{valueLocal}}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"],

  data() {
    return {
      edit: false,
      valueLocal: this.value
    };
  },

  watch: {
    value: function() {
      this.valueLocal = this.value;
    }
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  },
  methods: {
    newline() {
      this.valueLocal = `${this.valueLocal}\n`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
.text {
    white-space: pre-wrap;
    font-family: $text-font;
}
</style>