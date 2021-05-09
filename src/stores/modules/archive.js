import { archiveCollection } from "@/firebase"

export default {
  state: { archive: [] },
  getters: { ARCHIVE: state => { return state.archive } },
  mutations: { setToArchive(state, val) { state.archive = val } },
  actions: {
    getArchive({ state, commit }) {
      if (state.archive.length) { return }
      return new Promise(resolve => {
        archiveCollection
        .orderBy("name", "desc")
        .onSnapshot(snapshot => {
          let archiveArray = []
          snapshot.forEach(doc => {
            let archive = doc.data()
            archive.id = doc.id
            archiveArray.push(archive)
          })
          commit("setToArchive", archiveArray)
          resolve()
        })
      })
    },
    async addToArchive({ rootState, dispatch }) {
      let model = rootState.models.model
      await archiveCollection.add(model).then(await dispatch("models/removeModel", model.id, { root: true }))
    },
    async removeFromArchive(context, id) {
      await archiveCollection.doc(id).delete()
    }
  }
}
