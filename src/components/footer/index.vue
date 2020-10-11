<template>
  <div id="footer">
    <b-container>
      <hr>
      <b-nav align="center">
        <b-nav-item to="/facebook">
          <v-icon name="brands/facebook-f" scale="2" style="fill: black"/>
        </b-nav-item>
        <b-nav-item to="/vk">
          <v-icon name="brands/vk" scale="2" style="fill: black"/>
        </b-nav-item>
        <b-nav-item to="/instagram">
          <v-icon name="brands/instagram" scale="2" style="fill: black"/>
        </b-nav-item>
      </b-nav>
      <div class="copyright" align="center">
        © NAZ model management 2020 / Created by MaxKagami
      </div>
    </b-container>
  </div>
</template>

<script>
  export default { name: "footer" }
</script>

<style lang="sass">@import "style"</style>
