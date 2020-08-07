<template>
  <div id="model">
    <b-container>
      <a @click="$router.go(-1)"><v-icon name="chevron-left" scale="2"/></a>
      <b-row>
        <b-col sm>
          <img :src="selectedModel.preview_path">
        </b-col>
        <b-col sm align-self="center">
          <content>
            <p>{{ selectedModel.name }}</p>
            <ul>
              <li><label>Height</label><div>{{ selectedModel.height }}</div></li>
              <li><label>Bust</label><div>{{ selectedModel.bust }}</div></li>
              <li><label>Waist</label><div>{{ selectedModel.waist }}</div></li>
              <li><label>Hips</label><div>{{ selectedModel.hips }}</div></li>
              <li><label>Shoe</label><div>{{ selectedModel.shoe }}</div></li>
              <li><label>Hair</label><div>{{ selectedModel.hair }}</div></li>
              <li><label>Eyes</label><div>{{ selectedModel.eyes }}</div></li>
            </ul>
          </content>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    name: "model",
    resource: "Model",
    props: ["id"],
    created () { this.getModel(this.id) },
    computed: mapState(["selectedModel"]),
    methods: {
      getModel(id) {
        this.model = this.$store.dispatch('getModel', id)
      }
    }
  }
</script>

<style lang="sass" scoped>@import "style"</style>
