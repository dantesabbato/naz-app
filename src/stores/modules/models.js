import { storage, modelsCollection } from "@/firebase"
import { firestore } from "firebase/app"

export default {
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
        .orderBy("name")
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
      await modelsCollection.add({
        name: obj.name, surname: obj.surname, birthdate: obj.birthdate, gender: obj.gender, phone: obj.phone,
        email: obj.email, instagram: obj.email, height: obj.height, waist: obj.waist, bust: obj.bust,
        hips: obj.hips, hair: obj.hair || "", eyes: obj.eyes || "", about: obj.about, photos: [],
        created_at: firestore.Timestamp.fromDate(new Date())
      }).then(async docRef => {
        await Promise.all(obj.photos.map(async photo => {
          let photoRef = storage.ref().child(photo.file_name)
          await photoRef.put(photo.file, { contentType: "image/png" })
          let path = await photoRef.getDownloadURL()
          await modelsCollection.doc(docRef.id).update({"photos": firestore.FieldValue.arrayUnion(path) })
        }))
      })
    },
    getModel({ state }, id) {
      return state.models.find( model => model.id === id )
    },
    async updateModel(context, obj) {
      await modelsCollection.doc(obj.id).update(obj)
    },
    async removeModel(context, id) {
      await modelsCollection.doc(id).delete()
    },
    async removePhoto(context, obj) {
      await modelsCollection.doc(obj.id).update({ "photos": firestore.FieldValue.arrayRemove(obj.photo) })
    }
  }
}
