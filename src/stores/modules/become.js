import { contentCollection } from '@/firebase'

export default {
  namespaced: true,
  state: { become: {} },
  getters: {
    BECOME_EN: state => { return state.become.become_en },
    BECOME_RU: state => { return state.become.become_ru }
  },
  mutations: { setBecome(state, val) { state.become = val } },
  actions: {
    async getBecome ({ state, commit }) {
      if (state.become.length) { return }
      await contentCollection.doc("become").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        commit("setBecome", data)
      })
    }
  }
}
