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
        <button class="button is-link" @click="editPackage">Izmeni</button>
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
    this.id = this.packageType.idTipaPakovanja;
  },
  computed: {
    ...mapState("modal", ["packageType"])
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    editPackage() {
      api
        .editPackage(this.id, { ...this.packageType })
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message: "Uspešno ste izmenili tip pakovanja sa šifrom " + this.id
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