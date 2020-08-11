import { contentCollection } from '@/firebase'
import store from "@/stores"

contentCollection.doc("info").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setInfo', data)
})

const state = { info: {} }

const getters = {
  INFO_EN: state => { return state.info.info_en },
  INFO_RU: state => { return state.info.info_ru }
}

const mutations = {
  setInfo(state, val) {
    state.info = val
  }
}

export default { state, getters, mutations }
