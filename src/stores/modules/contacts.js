import { contentCollection } from '@/firebase'

export default {
  state: { contacts: {} },
  getters: {
    CONTACTS_EMAIL: state => { return state.contacts.email },
    CONTACTS_PHONE: state => { return state.contacts.phone },
    CONTACTS_CEO_EMAIL: state => { return state.contacts.ceo_email },
    CONTACTS_BOOKER_EMAIL: state => { return state.contacts.booker_email }
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
