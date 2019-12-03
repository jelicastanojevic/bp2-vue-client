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
        <button class="button is-link" @click="addProduct">Dodaj</button>
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
      product: {
        idProizvoda: null,
        nazivProizvoda: null,
        trenutnaCena: null,
        kolicina: null,
        nazivTipaPakovanja: null
      }
    };
  },
  methods: {
    ...mapMutations("notification", ["addNotification"]),
    addProduct() {
      api
        .addProduct({ ...this.product })
        .then(({ data }) => {
          this.addNotification({
            type: "is-success",
            message:
              "Uspešno ste uneli novi proizvod sa šifrom " + data.insertId
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