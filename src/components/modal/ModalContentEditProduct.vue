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
        <button class="button is-link">Izmeni</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("modal", ["product"])
  }
};
</script>

<style lang="scss" scoped>
</style>