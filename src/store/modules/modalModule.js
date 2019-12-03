export default {
  state: {
    modalVisible: false,
    componentName: null,
    product: null,
    drug: null,
    packageType: null,
  },
  mutations: {
    showModal(state, componentName) {
      state.modalVisible = true;
      state.componentName = () => ({
        component: import(`@/components/modal/${componentName}.vue`),
        // loading: LoadingComponent,
        // error: ErrorComponent,
        delay: 200,
        timeout: 3000,
      });
    },
    closeModal(state) {
      state.modalVisible = false;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setDrug(state, drug) {
      state.drug = drug;
    },
    setPackage(state, packageTypee) {
      state.packageType = packageTypee;
    },
  },
  namespaced: true,
};
