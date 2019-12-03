<template>
  <div>
    <div class="subtitle is-4">
      Da li sigurno želite da obrišete lek sa šifrom {{ drug.idLeka }}?
    </div>
    <div class="control">
      <button class="button is-link" @click="deleteDrug">Obriši</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { api } from "@/axios/api";
export default {
  computed: {
    ...mapState("modal", ["drug"])
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    deleteDrug() {
      api
        .deleteDrug(this.drug.idLeka)
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message: "Uspešno ste obrisali lek sa šifrom " + this.drug.idLeka
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