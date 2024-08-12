import { Api } from './Api'
import { list, get, post, put } from './utils'

export class ContactsApi extends Api {
  getById (id, listId = null) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(get('/contacts/by_id/' + encodeURIComponent(id)))
    return this.compile(parts)
  }

  getByEmail (email, listId = null) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(get('/contacts/by_email/' + encodeURIComponent(email)))
    return this.compile(parts)
  }

  getListsByEmail (email) {
    const parts = [get('/contacts/cross_account', { email })]
    return this.compile(parts)
  }

  create (payload, listId) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(post('/v2/contacts', payload))
    return this.compile(parts)
  }

  update (payload, listId) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(put('/v2/contacts', payload))
    return this.compile(parts)
  }

  changeStatus (payload, listId) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(post('/v2/contacts/change_status', payload))
    return this.compile(parts)
  }

  changeEmail (payload, listId) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(put('/contacts/change_email', payload))
    return this.compile(parts)
  }

  delete (payload, listId) {
    const parts = []
    if (listId) parts.push(list(listId))
    parts.push(post('/contacts/delete', payload))
    return this.compile(parts)
  }
}
