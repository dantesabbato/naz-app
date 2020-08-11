import { contentCollection } from '@/firebase'
import store from "@/stores"

contentCollection.doc("contacts").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setContacts', data)
})

const state = { contacts: {} }

const getters = {
  CONTACTS_EMAIL: state => { return state.contacts.email },
  CONTACTS_PHONE: state => { return state.contacts.phone },
  CONTACTS_INFO_EMAIL: state => { return state.contacts.info_email },
  CONTACTS_CEO_EMAIL: state => { return state.contacts.ceo_email },
  CONTACTS_BOOKER_EMAIL: state => { return state.contacts.booker_email }
}

const mutations = {
  setContacts(state, val) {
    state.contacts = val
  }
}

export default { state, getters, mutations }
