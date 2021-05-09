import { contentCollection } from '@/firebase'

export default {
  state: { contacts: {} },
  getters: {
    EMAIL: state => { return state.contacts.email },
    PHONE: state => { return state.contacts.phone },
    CEO_EMAIL: state => { return state.contacts.ceo_email },
    BOOKER_EMAIL: state => { return state.contacts.booker_email },
    BOOKER_PHONE: state => { return state.contacts.booker_phone }
  },
  mutations: { setContacts(state, val) { state.contacts = val } },
  actions: {
    async getContacts ({ state, commit }) {
      if (state.contacts.length) { return }
      await contentCollection.doc("contacts").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        commit("setContacts", data)
      })
    }
  }
}
