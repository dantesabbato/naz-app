import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from  '../router'
//\\//\\//\\//\\ IMPORT MODULES //\\//\\//\\//\\
import contacts from './contacts'
import info from './info'

Vue.use(Vuex)

fb.modelsCollection.onSnapshot(snapshot => {
  let modelArray = []
  snapshot.forEach(doc => {
    let model = doc.data()
    model.id = doc.id
    modelArray.push(model)
  })
  store.commit('setMen', modelArray)
  store.commit('setWomen', modelArray)
})
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
    men: [],
    women: [],
    model_forms: [],
    selectedModel: []
  },
  getters: {
    MEN: state => { return state.men },
    WOMEN: state => { return state.women }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setWomen(state, val) {
      state.women = val.filter( model => !model.gender )
    },
    setMen(state, val) {
      state.men = val.filter( model => model.gender )
    },
    setModelForms(state, val) {
      state.model_forms = val
    },
    setSelectedModel(state, val) {
      state.selectedModel = val
    }
  },
  actions: {
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login') {
        router.push('/admin')
      }
    },
    async getModel({ commit }, id) {
      let model = await fb.modelsCollection.doc(id).get()
      commit('setSelectedModel', model.data())
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
  modules: { contacts, info }
})

export default store
