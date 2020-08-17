<template>
  <div id='footer'>
    <b-container>
      <hr>
      <b-nav align='center'>
        <b-nav-item to="/facebook">
          <v-icon name='brands/facebook-f' scale="1.5" style="fill: black"/>
        </b-nav-item>
        <b-nav-item to="/vk">
          <v-icon name='brands/vk' scale="1.5" style="fill: black"/>
        </b-nav-item>
        <b-nav-item to="/instagram">
          <v-icon name='brands/instagram' scale="1.5" style="fill: black"/>
        </b-nav-item>
      </b-nav>
      <div id='copyright' align='center'>
        <div>© NAZ model management 2020 / Created by MaxKagami</div>
      </div>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="sass"></style>
