import Vue from "vue"
import Vuex from "vuex"
import * as fb from "../firebase"
import router from  "../router"
import modules from "@/stores/modules"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {},
    selectedModel: {}
  },
  mutations: {
    setUserProfile(state, val) { state.userProfile = val },
    setSelectedModel(state, val) { state.selectedModel = val }
  },
  actions: {
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit("setUserProfile", userProfile.data())
      if (router.currentRoute.path === "/login") { router.push("/admin") }
    },
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch("fetchUserProfile", user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      commit("setUserProfile", {})
      router.push("/")
    },
    passModel({ commit }, model) {
      commit("setSelectedModel", model)
    },
    updateContent({ commit }, obj) {
      for (let property in obj) {
        console.log(property)
        fb.contentCollection.doc(property).update(obj[property])
      }
      commit("contacts/setContacts", obj.contacts)
      commit("info/setInfo", obj.info)
      commit("become/setBecome", obj.become)
    }
  },
  modules
})
