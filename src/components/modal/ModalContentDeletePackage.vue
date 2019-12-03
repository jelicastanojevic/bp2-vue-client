<template>
  <div>
    <div class="subtitle is-4">
      Da li sigurno želite da obrišete vrstu pakovanja "{{
        packageType.nazivTipaPakovanja
      }}" sa šifrom {{ packageType.idTipaPakovanja }}?
    </div>
    <div class="control">
      <button class="button is-link" @click="deletePackage">Obriši</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { api } from "@/axios/api";
export default {
  computed: {
    ...mapState("modal", ["packageType"])
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    deletePackage() {
      api
        .deletePackage(this.packageType.idTipaPakovanja)
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message:
              "Uspešno ste obrisali tip pakovanja sa šifrom " +
              this.packageType.idTipaPakovanja
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