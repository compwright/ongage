import { Api } from './Api'
import { get, post } from './utils'

export class ListsApi extends Api {
  get (id) {
    const parts = [get('/lists/' + encodeURIComponent(id))]
    return this.compile(parts)
  }

  getAll (config = {}) {
    const parts = [get('/lists', config)]
    return this.compile(parts)
  }

  createExport (payload) {
    const parts = [post('/export', payload)]
    return this.compile(parts)
  }

  retrieveExport (id) {
    const parts = [get('/export/' + encodeURIComponent(id) + '/retrieve')]
    return this.compile(parts)
  }
}
