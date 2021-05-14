<template>
  <b-card-group class="fade-in">
    <router-link v-for="model in models"
                 :key="model.id"
                 :to="{ name: 'model', params: { id: model.id } }"
    >
      <b-card img-top class="border-0">
        <b-card-img-lazy :src="model.photos[0]"/>
        <b-card-text>
          {{ model.name }}
        </b-card-text>
      </b-card>
    </router-link>
  </b-card-group>
</template>

<script>
  export default { props: ["models"] }
</script>

<style lang="sass">@import "style"</style>
