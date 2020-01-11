<template>
  <div>
    <div class="field">
      <label class="label">Šifra</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="drug.idLeka"
          readonly
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Doza</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="drug.dozaPoPakovanju"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Broj komada</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="drug.komadPoPakovanju"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">JKL</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="drug.jkl"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Šifra tipa pakovanja</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="drug.idTipaPakovanja"
        />
      </div>

      <div class="field">
        <label class="label">Šifra jedinice mere</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            v-model="drug.idJediniceMere"
          />
        </div>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="editDrug">Izmeni</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { api } from "@/axios/api";

export default {
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.drug.idLeka;
  },
  computed: {
    ...mapState("modal", ["drug"])
  },
  methods: {
    ...mapMutations("table", ["setTableData", "setTableColumns"]),
    ...mapMutations("modal", ["closeModal"]),
    ...mapMutations("notification", ["addNotification"]),
    editDrug() {
      this.transformDrug();
      api
        .editDrug(this.id, { ...this.drug })
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message: "Uspešno ste izmenili lek sa šifrom " + this.id
          });

          api
            .getAllDrugs()
            .then(res => {
              this.setTableColumns(res.data.tableColumns);
              this.setTableData(res.data.tableData);
            })
            .catch(() => {});

          this.closeModal();
        })
        .catch(error => {
          this.addNotification({
            type: "is-danger",
            message: error.response.data.message
          });
        });
    },
    transformDrug() {
      if (this.drug.dozaPoPakovanju === "") {
        this.drug.dozaPoPakovanju = null;
      }
      if (this.drug.idLeka === "") {
        this.drug.idLeka = null;
      }
      if (this.drug.komadPoPakovanju === "") {
        this.drug.komadPoPakovanju = null;
      }
      if (this.drug.jkl === "") {
        this.drug.jkl = null;
      }

      if (this.drug.idJediniceMere === "") {
        this.drug.idJediniceMere = null;
      }

      if (this.drug.idTipaPakovanja === "") {
        this.drug.idTipaPakovanja = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>