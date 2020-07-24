const state = {
  contacts: {
    email: 'info@nazmanagement.com',
    phone: '+7777777777',
    info_email: 'info@nazmanagement.com',
    ceo_email: 'ekaterina@nazmanagement.com',
    booker_email: 'booker@nazmanagement.com'
  }
}
const getters = {
  CONTACTS_EMAIL: state => {
    return state.contacts.email
  },
  CONTACTS_PHONE: state => {
    return state.contacts.phone
  },
  CONTACTS_INFO_EMAIL: state => {
    return state.contacts.info_email
  },
  CONTACTS_CEO_EMAIL: state => {
    return state.contacts.ceo_email
  },
  CONTACTS_BOOKER_EMAIL: state => {
    return state.contacts.booker_email
  }
}

export default { state, getters }