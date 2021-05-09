<template>
  <div id="admin_models">
    <Edit/>
    <New/>
    <b-container>
      <b-tabs pills>
        <b-tab title="Девушки">
          <card-group :models="$store.getters['models/WOMEN']"/>
        </b-tab>
        <b-tab title="Парни">
          <card-group :models="$store.getters['models/MEN']"/>
        </b-tab>
        <template #tabs-start>
          <b-button variant="outline-dark squared" size="md" class="mr-2" v-b-modal.model_new><v-icon name="plus"/></b-button>
        </template>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
  import Edit from "./edit"
  import New from "./new"
  import CardGroup from "./index-card-group"
  export default {
    name: "admin_models",
    components: { Edit, New, CardGroup },
    created() { this.$store.dispatch("models/getModels") }
  }
</script>

<style lang="sass" scoped>@import "style"</style>
