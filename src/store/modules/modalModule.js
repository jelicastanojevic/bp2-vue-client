export default {
  state: {
    modalVisible: false,
    componentName: null,
    product: null,
    drug: null,
    packageType: null,
    price: null,
    state: null,
    supplier: null,
    catalogue: null,
    catalogueItem: null,
    employee: null,
    itemProduct: null,
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
    setPrice(state, price) {
      state.price = price;
    },
    setState(state, statee) {
      state.state = statee;
    },
    setSupplier(state, supplier) {
      state.supplier = supplier;
    },
    setCatalogue(state, catalogue) {
      state.catalogue = catalogue;
    },
    setCatalogueItem(state, catalogueItem) {
      state.catalogueItem = catalogueItem;
    },
    setEmployee(state, employee) {
      state.employee = employee;
    },
    setItemProduct(state, itemProduct) {
      state.itemProduct = itemProduct;
    },
  },
  namespaced: true,
};
