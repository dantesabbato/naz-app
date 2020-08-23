import { modelFormsCollection } from "@/firebase"

export default {
  namespaced: true,
  state: { model_forms: [] },
  getters: { MODEL_FORMS: state => { return state.model_forms } },
  mutations: { setModelForms(state, val) { state.model_forms = val } },
  actions: {
    async getModelForms({ state, commit }) {
      if (state.model_forms.length) { return }
      await modelFormsCollection
      .orderBy("created_at", "desc")
      .onSnapshot(snapshot => {
        let modelFormsArray = []
        snapshot.forEach(doc => {
          let model_form = doc.data()
          model_form.id = doc.id
          modelFormsArray.push(model_form)
        })
        commit("setModelForms", modelFormsArray)
      })
    },
    async createModelForm(context, obj) {
      await modelFormsCollection.add(obj)
    },
    async removeModelForm(id) { await modelFormsCollection.doc(id).delete() }
  }
}
