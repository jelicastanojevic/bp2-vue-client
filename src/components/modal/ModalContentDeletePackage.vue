<template>
  <div>
    <div class="subtitle is-4">
      Da li sigurno želite da obrišete vrstu pakovanja "{{
        packageType.nazivTipaPakovanja
      }}" sa šifrom {{ packageType.idTipaPakovanja }}?
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
    ...mapState("modal", ["packageType"])
  }
};
</script>

<style lang="scss" scoped>
</style>