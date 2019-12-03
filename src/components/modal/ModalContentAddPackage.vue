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
        <button class="button is-link">Dodaj</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageType: {
        idTipaPakovanja: null,
        nazivTipaPakovanja: null
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>