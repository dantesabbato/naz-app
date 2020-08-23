import { modelsCollection } from "@/firebase"

export default {
  namespaced: true,
  state: { models: [] },
  getters: {
    MEN: state => { return state.models.filter(model => model.gender) },
    WOMEN: state => { return state.models.filter(model => !model.gender) }
  },
  mutations: { setModels(state, val) { state.models = val } },
  actions: {
    async getModels({ state, commit }) {
      if (state.models.length) { return }
      return new Promise((resolve) => {
        modelsCollection
        .orderBy('name')
        .onSnapshot(snapshot => {
          let modelArray = []
          snapshot.forEach(doc => {
            let model = doc.data()
            model.id = doc.id
            modelArray.push(model)
          })
          commit("setModels", modelArray)
          resolve()
        })
      })
    },
    async createModel({ commit }, obj) {
      await modelsCollection.add(obj)
      commit("setModels", obj)
    },
    getModel({ state }, id) {
      return state.models.find( model => model.id === id )
    }
  }
}
