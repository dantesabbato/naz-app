import { storage, modelsCollection } from "@/firebase"
import { firestore } from "firebase/app"

export default {
  namespaced: true,
  state: { models: [] },
  getters: {
    MEN: state => { return state.models.filter(model => model.gender) },
    WOMEN: state => { return state.models.filter(model => !model.gender) }
  },
  mutations: { setModels(state, val) { state.models = val } },
  actions: {
    getModels({ state, commit }) {
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
    async createModel(context, obj) {
      let imageRef = storage.ref().child(obj.image_name)
      await imageRef.put(obj.file, { contentType: "image/png" })
      let preview_path = await imageRef.getDownloadURL()
      await modelsCollection.add({
        name: obj.name, surname: obj.surname, birthdate: obj.birthdate, gender: obj.gender, phone: obj.phone,
        email: obj.email, instagram: obj.email, height: obj.height, waist: obj.waist, bust: obj.bust,
        hips: obj.hips, hair: obj.hair || "", eyes: obj.eyes || "", about: obj.about, preview_path: preview_path,
        created_at: firestore.Timestamp.fromDate(new Date())
      })
    },
    getModel({ state }, id) {
      return state.models.find( model => model.id === id )
    },
    async updateModel(context, obj) { await modelsCollection.doc(obj.id).update(obj) },
    async removeModel(context, id) { await modelsCollection.doc(id).delete() }
  }
}
