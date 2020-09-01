import { photosCollection} from "@/firebase"

export default {
  state: { photos: {} },
  getters: {},
  mutations: { setPhotos(state, val) { state.photos = val } },
  actions: {
    getPhotos ({ state, commit }) {
      if (state.photos.length) { return }
      return new Promise((resolve) => {
        photosCollection.onSnapshot(snapshot => {
          let photoArray = []
          snapshot.forEach(doc => {
            let photo = doc.data()
            photo.id = doc.id
            photoArray.push(photo)
          })
          commit("setPhotos", photoArray)
          resolve()
        })
      })
    },
    getPhotosByModel({ state }, id) {
      console.log(state.photos)
      return state.photos.filter( photo => photo.model_id === id ).map( photo => photo.url )
    }
  }
}
