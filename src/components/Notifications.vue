<template>
  <div class="is-front">
    <notification
      v-for="(notification, i) of notifications"
      :key="i"
      :notification="notification"
    ></notification>
  </div>
</template>

<script>
import Notification from "@/components/Notification";
import { mapState } from "vuex";
export default {
  components: {
    Notification
  },
  computed: {
    ...mapState("notification", ["notifications"])
  }
};
</script>

<style lang="scss" scoped>
.is-front {
  z-index: 10000;
  position: absolute;
  top: 0;
  right: 0;
}
</style>