<template>
  <div>
    <table class="table is-striped is-hoverable is-fullwidth is-clickable">
      <thead>
        <tr>
          <template v-for="(column, i) in tableColumns">
            <th :key="i">{{ column }}</th>
          </template>
          <th>Akcija</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <template v-for="(column, i) in tableColumns">
            <th :key="i">{{ column }}</th>
          </template>
          <th>Akcija</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="(row, i) in tableData" :key="i" @click="rowClicked(row)">
          <th>{{ i + 1 }}</th>
          <td v-for="(value, propertyName, i) in row" :key="i">{{ value }}</td>
          <td>
            <div class="buttons">
              <button class="button is-info" @click="$emit('editRow', row)">
                <span class="icon is-small"
                  ><i class="fas fa-edit" aria-hidden="true"></i></span
                ><span>Izmeni</span>
              </button>
              <button class="button is-danger" @click="$emit('deleteRow', row)">
                <span class="icon is-small"
                  ><i class="fas fa-trash" aria-hidden="true"></i></span
                ><span>Obriši</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("table", ["tableColumns", "tableData"])
  },
  methods: {
    rowClicked(row) {
      console.log(row);
    }
  }
};
</script>

<style lang="scss" scoped>
.is-clickable {
  cursor: pointer;
}
</style>
