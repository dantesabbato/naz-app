<template>
  <div>
    <img :src="photo">
    <b-button-group vertical>
      <b-button v-if="index !== 0"
                variant="link"
                @click="movePhoto(index, - 1)"
      >
        <b-icon class="m-3"
                icon="chevron-up"
                scale="4"
        />
      </b-button>
      <b-button v-if="index !== 0"
                variant="link"
                squared
                @click="setAsPreview(index)"
      >
        <b-icon class="m-4"
                icon="chevron-double-up"
                scale="4"
        />
      </b-button>
      <b-button variant="link"
                squared
                @click="removePhoto(photo, index)"
      >
        <b-icon class="m-4"
                icon="x"
                scale="6"
        />
      </b-button>
      <b-button v-if="index !== ($store.getters['models/PHOTOS_LENGTH'] - 1)"
                variant="link"
                @click="movePhoto(index, 1)"
      >
        <b-icon class="m-4"
                icon="chevron-down"
                scale="4"
        />
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
  export default {
    props: ["photo", "index"],
    methods: {
      removePhoto(photo, index) {
        this.$store.dispatch("models/removePhoto", { photo, index })
      },
      setAsPreview(index) {
        this.$store.dispatch("models/setAsPreview", index)
      },
      movePhoto(index, position) {
        this.$store.dispatch("models/movePhoto", { index, position })
      },
    }
  }
</script>

<style lang="sass">@import "style"</style>
