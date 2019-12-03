export default {
  state: {
    tableColumns: null,
    tableData: null,
  },
  mutations: {
    setTableColumns(state, tableColumns) {
      state.tableColumns = tableColumns;
    },
    setTableData(state, tableData) {
      state.tableData = tableData;
    },
  },
  namespaced: true,
};
