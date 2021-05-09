import { storage, modelsCollection } from "@/firebase"
import { firestore } from "firebase/app"

export default {
  state: {
    models: [],
    model: {}
  },
  getters: {
    MEN: state => { return state.models.filter(model => model.gender) },
    WOMEN: state => { return state.models.filter(model => !model.gender) },
    MODEL: state => id => { return state.models.find( model => model.id === id ) },
    PHOTOS_LENGTH: state => { return state.model.photos.length }
  },
  mutations: {
    setModels(state, val) { state.models = val },
    setModel(state, val) { state.model = val },
    removeModelPhoto(state, index) { state.model.photos.splice(index, 1) },
    moveModelPhoto(state, obj) {
      let photos = state.model.photos
      photos.splice(obj.index + obj.position, 0, photos.splice(obj.index, 1)[0])
    },
    setAsModelPreview(state, index) {
      let photos = state.model.photos
      photos.unshift(photos.splice(index, 1)[0])
    }
  },
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
    async createModel({ state }) {
      let model = state.model
      model.created_at  = firestore.Timestamp.fromDate(new Date())
      await modelsCollection.add(
      //   {
      //   name: model.name, surname: model.surname, birthdate: model.birthdate, gender: model.gender, phone: model.phone,
      //   email: model.email, instagram: model.email, height: model.height, waist: model.waist, bust: model.bust,
      //   hips: model.hips, hair: model.hair || "", eyes: model.eyes || "", about: model.about, photos: [],
      //   created_at: firestore.Timestamp.fromDate(new Date())
      // }
      model).then(async docRef => {
        await Promise.all(model.photos.map(async photo => {
          let photoRef = storage.ref().child(photo.file_name)
          await photoRef.put(photo.file, { contentType: "image/png" })
          let path = await photoRef.getDownloadURL()
          // TODO: Fix it
          await modelsCollection.doc(docRef.id).update({ "photos": firestore.FieldValue.arrayUnion(path) })
        }))
      })
    },
    async updateModel({ state }) {
      await modelsCollection.doc(state.model.id).update(state.model)
    },
    async removeModel(context, id) {
      await modelsCollection.doc(id).delete()
    },
    async moveFromArchive({ state }) {
      let model = state.model
      model.created_at  = firestore.Timestamp.fromDate(new Date())
      await modelsCollection.add(model)
    },
    async addPhoto(context, obj) {
      let photoRef = storage.ref().child(obj.photo.file_name)
      await photoRef.put(obj.photo.file, { contentType: "image/png" })
      let path = await photoRef.getDownloadURL()
      await modelsCollection.doc(obj.id).update({ "photos": firestore.FieldValue.arrayUnion(path) })
      return path
    },
    async removePhoto({ state, commit }, obj) {
      await modelsCollection.doc(state.model.id).update({ "photos": firestore.FieldValue.arrayRemove(obj.photo) })
      commit("removeModelPhoto", obj.index)
    },
    movePhoto({ dispatch, commit }, obj) {
      commit("moveModelPhoto", obj)
      dispatch("updateModel")
    },
    setAsPreview({ dispatch, commit }, index) {
      commit("setAsModelPreview", index)
      dispatch("updateModel")
    }
  }
}
