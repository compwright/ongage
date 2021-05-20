import { Api } from './Api';
import { get } from './utils';

export class ListsApi extends Api {
  get (id) {
    const parts = [get('/lists/' + encodeURIComponent(id))];
    return this.compile(parts);
  }

  getAll (config = {}) {
    const parts = [get('/lists', config)];
    return this.compile(parts);
  }
}
