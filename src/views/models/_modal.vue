<template>
  <b-modal id='model_modal' size='xl' hide-footer hide-header>
    <b-row>
      <b-col md='auto'>
       <img :src='selectedModel.preview_path'>
      </b-col>
      <b-col align-self='center'>
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
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'modal',
    data: () => ({
    }),
    computed: {
      ...mapState(['selectedModel'])
    }
  }
</script>

<style lang='sass'>
  @import "style"
</style>