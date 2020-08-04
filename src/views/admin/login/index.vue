<template>
  <div id='login'>
    <section>
      <form @submit.prevent>
        <h1>LOGIN</h1>
        <div>
          <input v-model.trim="loginForm.email" type="text" placeholder="your@email.com" id="email" />
        </div>
        <div>
          <input v-model.trim="loginForm.password" type="password" placeholder="password" id="password" />
        </div>
        <button @click="login()">Log In</button>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: () => ({
      loginForm: {
        email: '',
        password: ''
      }
    }),
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.loginForm.email,
          password: this.loginForm.password
        })
      }
    }
  }
</script>

<style lang="sass">@import "style"</style>

