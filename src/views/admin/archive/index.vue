<template>
  <div id="admin-archive">
    <Edit/>
    <b-container>
      <b-card-group v-if="ARCHIVE.length">
        <div v-for="model in ARCHIVE" :key="model.id">
          <b-card class="border-0"
                  img-top
                  @click="passModel(model)"
                  v-b-modal.archive_edit
          >
            <b-card-img-lazy :src="model.photos[0]"/>
            <b-card-text>
              <div>
                <div class="font-weight-bold text-uppercase inline mr-2">{{ model.name }}</div>
                <div class="font-weight-bold text-uppercase inline">{{ model.surname }}</div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </b-card-group>
      <div v-else id="empty" class="mt-5 text-center"><v-icon name="inbox" scale="10"/><p>ПУСТО</p></div>
    </b-container>
  </div>
</template>

<script>
  import Edit from "./edit"
  import { mapGetters } from "vuex"
  export default {
    name: "admin-archive",
    components: { Edit },
    created() { this.$store.dispatch("archive/getArchive") },
    computed: mapGetters("archive", ["ARCHIVE"]),
    methods: {
      passModel(model) { this.$store.commit("models/setModel", model) }
    }
  }
</script>

<style lang="sass">@import "style"</style>
