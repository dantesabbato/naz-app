<template>
  <div id="men" class="models">
    <b-card-group deck class="fade-in">
      <router-link v-for="model in $store.getters['models/MEN']"
                   :key="model.id"
                   :to="{ name: 'model', params: { id: model.id } }"
      >
        <b-card :img-src="model.preview_path"
                img-top
                class="border-0"
        >
          <b-card-text>
            {{ model.name }}
          </b-card-text>
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "men",
  created () { this.$store.dispatch("models/getModels") }
}
</script>

<style lang="sass">@import "style"</style>
