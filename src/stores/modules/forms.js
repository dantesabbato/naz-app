import { formsCollection } from "@/firebase"

export default {
  state: { forms: [] },
  getters: { FORMS: state => { return state.forms } },
  mutations: { setForms(state, val) { state.forms = val } },
  actions: {
    getForms({ state, commit }) {
      if (state.forms.length) { return }
      return new Promise(resolve => {
        formsCollection
        .orderBy("created_at", "desc")
        .onSnapshot(snapshot => {
          let formsArray = []
          snapshot.forEach(doc => {
            let form = doc.data()
            form.id = doc.id
            formsArray.push(form)
          })
          commit("setForms", formsArray)
          resolve()
        })
      })
    },
    async createForm(context, obj) { await formsCollection.add(obj) },
    async removeForm(context, id) { await formsCollection.doc(id).delete() }
  }
}
