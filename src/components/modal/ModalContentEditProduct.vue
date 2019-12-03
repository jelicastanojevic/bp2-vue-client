<template>
  <div>
    <div class="field">
      <label class="label">Šifra</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="product.idProizvoda"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Naziv</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="product.nazivProizvoda"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Trenutna cena</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="product.trenutnaCena"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Količina</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="product.kolicina"
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
          v-model="product.nazivTipaPakovanja"
        />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="editProduct">Izmeni</button>
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
    this.id = this.product.idProizvoda;
  },
  computed: {
    ...mapState("modal", ["product"])
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    editProduct() {
      api
        .editProduct(this.id, { ...this.product })
        .then(res => {
          console.log(res);
          this.addNotification({
            type: "is-success",
            message: "Uspešno ste izmenili proizvod sa šifrom " + this.id
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