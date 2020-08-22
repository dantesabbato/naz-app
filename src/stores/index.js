import Vue from "vue"
import Vuex from "vuex"
import * as fb from "../firebase"
import router from  "../router"
//\\//\\//\\//\\ IMPORT MODULES //\\//\\//\\//\\
import become from "./become"
import contacts from './contacts'
import info from "./info"

Vue.use(Vuex)

fb.modelFormsCollection.orderBy('created_at', 'desc').onSnapshot(snapshot => {
  let modelFormsArray = []
  snapshot.forEach(doc => {
    let model_form = doc.data()
    model_form.id = doc.id
    modelFormsArray.push(model_form)
  })
  store.commit('setModelForms', modelFormsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    models: [],
    model_forms: [],
    selectedModel: []
  },
  getters: {
    MEN: state => { return state.models.filter( model => model.gender ) },
    WOMEN: state => { return state.models.filter( model => !model.gender ) },
    MODEL_FORMS: state => { return state.model_forms },
  },
  mutations: {
    setUserProfile(state, val) { state.userProfile = val },
    setModels(state, val) { state.models = val },
    setModelForms(state, val) { state.model_forms = val },
    setSelectedModel(state, val) { state.selectedModel = val }
  },
  actions: {
    async getModels({ state }) {
      if (state.models.length) { return }
      await fb.modelsCollection.orderBy('name').onSnapshot(snapshot => {
        let modelArray = []
        snapshot.forEach(doc => {
          let model = doc.data()
          model.id = doc.id
          modelArray.push(model)
        })
        store.commit("setModels", modelArray)
      })
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login') {
        router.push('/admin')
      }
    },
    getModel({ state }, id) {
      // this.selectedModel = []
      // let model = await fb.modelsCollection.doc(id).get()
      return state.models.search( model => model.id = id )
      //commit('setSelectedModel', model.data())
    },
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/')
    },
    async passModel({ commit }, model) {
      commit('setSelectedModel', model)
    }
  },
  modules: { become, contacts, info }
})

export default store
