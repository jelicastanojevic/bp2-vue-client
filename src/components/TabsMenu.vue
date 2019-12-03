<template>
  <div>
    <div class="tabs is-boxed">
      <ul>
        <template v-for="(tab, i) in tabs">
          <li
            @click="selectTab(i)"
            :class="{ 'is-active': selectedTab == i }"
            :key="i"
          >
            <a>
              <span class="icon is-small"
                ><i :class="tab.icon" aria-hidden="true"></i
              ></span>
              <span>{{ tab.name }}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>

    <button class="button is-primary" @click="addRow">
      Dodaj novi {{ tabs[selectedTab].name }}
    </button>

    <Table @editRow="editRow" @deleteRow="deleteRow"></Table>
  </div>
</template>

<script>
import Table from "@/components/Table";
import { api } from "@/axios/api";
import { mapMutations } from "vuex";

export default {
  props: {
    tabs: Array
  },
  components: {
    Table
  },
  data() {
    return {
      selectedTab: 0
    };
  },

  created() {
    this.selectTab(this.selectedTab);
  },
  methods: {
    ...mapMutations("table", ["setTableData", "setTableColumns"]),
    ...mapMutations("modal", [
      "showModal",
      "setPackage",
      "setProduct",
      "setDrug"
    ]),
    selectTab(i) {
      switch (i) {
        case 0:
          api
            .getAllProducts()
            .then(res => {
              console.log(res);
              this.setTableColumns(res.data.tableColumns);
              this.setTableData(res.data.tableData);
            })
            .catch(() => {});
          break;
        case 1:
          api
            .getAllDrugs()
            .then(res => {
              this.setTableColumns(res.data.tableColumns);
              this.setTableData(res.data.tableData);
            })
            .catch(() => {});
          break;
        case 2:
          api
            .getAllTypesOfPackages()
            .then(res => {
              this.setTableColumns(res.data.tableColumns);
              this.setTableData(res.data.tableData);
            })
            .catch(() => {});
          break;
      }

      this.selectedTab = i;
    },
    addRow() {
      switch (this.selectedTab) {
        case 0:
          this.showModal("ModalContentAddProduct");
          break;
        case 1:
          this.showModal("ModalContentAddDrug");
          break;
        case 2:
          this.showModal("ModalContentAddPackage");
          break;
      }
    },
    editRow(row) {
      switch (this.selectedTab) {
        case 0:
          this.showModal("ModalContentEditProduct");
          this.setProduct(row);
          break;
        case 1:
          this.showModal("ModalContentEditDrug");
          this.setDrug(row);
          break;
        case 2:
          this.showModal("ModalContentEditPackage");
          this.setPackage(row);
          break;
      }
    },
    deleteRow(row) {
      switch (this.selectedTab) {
        case 0:
          this.showModal("ModalContentDeleteProduct");
          this.setProduct(row);
          break;
        case 1:
          this.showModal("ModalContentDeleteDrug");
          this.setDrug(row);
          break;
        case 2:
          this.showModal("ModalContentDeletePackage");
          this.setPackage(row);
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
