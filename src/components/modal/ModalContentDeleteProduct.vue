<template>
  <div>
    <div class="subtitle is-4">
      Da li sigurno želite da obrišete prozvod "{{ product.nazivProizvoda }}" sa
      šifrom {{ product.idProizvoda }}?
    </div>
    <div class="control">
      <button class="button is-link" @click="deleteProduct">Obriši</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { api } from "@/axios/api";
export default {
  computed: {
    ...mapState("modal", ["product"])
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    deleteProduct() {
      api
        .deleteProduct(this.product.idProizvoda)
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message:
              "Uspešno ste obrisali proizvod sa šifrom " +
              this.product.idProizvoda
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