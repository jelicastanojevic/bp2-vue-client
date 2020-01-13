<template>
  <div class="notification " :class="notification.type">
    <button class="delete" @click="removeNotification(notification)"></button>
    {{ notification.message }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["notification"],
  created() {
    this.deleteNotification();
  },
  methods: {
    ...mapMutations("notification", ["removeNotification"]),
    deleteNotification() {
      setTimeout(this.removeNotification, 10000, this.notification);
    }
  }
};
</script>

<style lang="scss">
</style>