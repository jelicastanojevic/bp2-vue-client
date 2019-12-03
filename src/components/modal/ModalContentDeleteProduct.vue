<template>
  <div>
    <div class="subtitle is-4">
      Da li sigurno želite da obrišete prozvod "{{ product.nazivProizvoda }}" sa
      šifrom {{ product.idProizvoda }}?
    </div>
    <div class="control">
      <button class="button is-link">Obriši</button>
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