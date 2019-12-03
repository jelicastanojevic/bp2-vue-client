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
        <button class="button is-link" @click="addDrug">Dodaj</button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/axios/api";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      drug: {
        idLeka: null,
        dozaPoPakovanju: null,
        komadPoPakovanju: null,
        jkl: null,
        idJediniceMere: null,
        idTipaPakovanja: null
      }
    };
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    addDrug() {
      api
        .addDrug({ ...this.drug })
        .then(({ data }) => {
          this.addNotification({
            type: "is-success",
            message: "Uspešno ste uneli novi lek sa šifrom " + data.insertId
          });
        })
        .catch(error => {
          this.addNotification({
            type: "is-danger",
            message: error.response.data.message
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>