/* eslint-disable camelcase */
import flow from 'lodash/fp/flow'

export class Api {
  constructor (username, password, account_code) {
    this.defaultRequest = {
      url: 'https://api.ongage.net/api',
      method: 'GET',
      headers: {
        X_USERNAME: username,
        X_PASSWORD: password,
        X_ACCOUNT_CODE: account_code
      }
    }
  }

  compile (parts = []) {
    return flow(parts)(this.defaultRequest)
  }
}
