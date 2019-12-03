export default {
  state: {
    notifications: [],
  },
  mutations: {
    setNotifications(state, notifications) {
      state.notifications = notifications;
    },
    addNotification(state, notification) {
      state.notifications.unshift(notification);
    },
    removeNotification(state, notification) {
      state.notifications.pop(notification);
    },
  },
  namespaced: true,
};
