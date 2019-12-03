<template>
  <div id="app">
    <transition
      appear
      appear-active-class="animated faster fadeIn"
      mode="out-in"
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    >
      <!--<keep-alive>-->
      <router-view />
      <!--</keep-alive>-->
    </transition>

    <modal v-show="modalVisible" />
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import { mapState } from "vuex";
export default {
  components: {
    Modal
  },
  computed: {
    ...mapState("modal", ["modalVisible"])
  }
};
</script>

<style lang="scss">
@import url("./assets/css/animate.css");
// @import url("../node_modules/bulma/css/bulma.css");
// @import url('https://use.fontawesome.com/releases/v5.6.1/css/all.css');

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
