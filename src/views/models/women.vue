<template>
  <div id="women" class="models">
    <b-card-group deck class="fade-in">
      <router-link v-for='model in $store.getters.WOMEN'
                   :key='model.id'
                   :to="{ name: 'model', params: { id: model.id } }"
      >
        <b-card :img-src='model.preview_path'
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
  name: 'women',
  created () { this.$store.dispatch("getModels") }
}
</script>

<style lang="sass"> @import "style" </style>
