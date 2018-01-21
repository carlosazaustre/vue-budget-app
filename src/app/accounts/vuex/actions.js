import { guid } from '@/utils'
import { deleteAccount as deleteAccountFromAPI, saveAccount, fetchAccounts } from '../api'

export const createAccount = ({ commit }, data) => {
  let id = guid()
  let account = Object.assign({ id }, data)
  commit('ADD_ACCOUNT', { account })
  saveAccount(account).then((value) => {
    // we've saved the account, what now
  })
}

export const updateAccount = ({ commit }, data) => {
  commit('UPDATE_ACCOUNT', { account: data })
  saveAccount(data)
}

export const deleteAccount = ({ commit }, data) => {
  commit('DELETE_ACCOUNT', { account: data })
  deleteAccountFromAPI(data)
}

export const loadAccounts = (state) => {
  // Load accounts only if they are not already loaded
  if (!state.accounts || Object.keys(state.accounts).length === 0) {
    return fetchAccounts().then(res => {
      state.commit('LOAD_ACCOUNTS', res)
    })
  }
}
