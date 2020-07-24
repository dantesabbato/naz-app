import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from  '../router'
//\\//\\//\\//\\ IMPORT MODULES //\\//\\//\\//\\
import contacts from './contacts'
import info from './info'
import model_forms from './model_forms'
import models from './models'

Vue.use(Vuex)

fb.modelsCollection.onSnapshot(snapshot => {
  let modelArray = []
  snapshot.forEach(doc => {
    let model = doc.data()
    model.id = doc.id
    modelArray.push(model)
  })
  store.commit('setModels', modelArray)
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
    models: [],
    model_forms: [],
    selectedModel: []
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setModels(state, val) {
      state.models = val
    },
    setModelForms(state, val) {
      state.model_forms = val
    },
    setSelectedModel(state, val) {
      state.selectedModel = val
    }
  },
  actions: {
    async createModelForms(model_form) {
      await fb.modelFormsCollection.add({
        created_at: new Date(),
        name: model_form.name,
        surname: model_form.surname,
        birthdate: model_form.birthdate,
        phone: model_form.phone,
        email: model_form.email,
        instagram: model_form.instagram,
        height: model_form.height,
        weight: model_form.weight,
        bust: model_form.bust,
        hips: model_form.hips,
        about: model_form.about
      })
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login') {
        router.push('/admin')
      }
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
  modules: { contacts, info, model_forms, models }
})

export default store