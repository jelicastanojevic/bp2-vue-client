<template>
  <div>
    <div class="field">
      <label class="label">Šifra</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="packageType.idTipaPakovanja"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Naziv tipa pakovanja</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="packageType.nazivTipaPakovanja"
        />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="addPackage">Dodaj</button>
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
      packageType: {
        idTipaPakovanja: null,
        nazivTipaPakovanja: null
      }
    };
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    addPackage() {
      api
        .addPackage({ ...this.packageType })
        .then(({ data }) => {
          this.addNotification({
            type: "is-success",
            message:
              "Uspešno ste uneli novi tip pakovanja sa šifrom " + data.insertId
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