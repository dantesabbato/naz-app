import { contentCollection } from '@/firebase'
import store from "@/stores"

export default {
  namespaced: true,
  state: { info: {} },
  getters: {
    INFO_EN: state => { return state.info.info_en },
    INFO_RU: state => { return state.info.info_ru }
  },
  mutations: { setInfo(state, val) { state.info = val } },
  actions: {
    async getInfo ({ state }) {
      if (state.info.length) { return }
      await contentCollection.doc("info").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        store.commit('info/setInfo', data)
      })
    }
  }
}
