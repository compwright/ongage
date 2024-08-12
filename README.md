# Ongage API Javascript Client

Works by composing fetch-compatible request objects.

## Installation

```
$ npm install ongage --save
```

## Usage

```js
import { ContactsApi } from 'ongage';

const contactsApi = new ContactsApi('username', 'password', 'account code');

const { url, ...req } = contactsApi.getByEmail('jonathon@compwright.com');
const res = await fetch(url, req);
const data = await res.json();
```

## API

### [ContactsApi](https://ongage.atlassian.net/wiki/spaces/HELP/pages/1004175381/Contacts+API+Methods)

* getById(id, listId)
* getByEmail(email, listId)
* getListsByEmail(email)
* create({ email, overwrite, fields }, listId)
* create([{ email, overwrite, fields }, { email, overwrite, fields }, ...], listId)
* update({ email, ...fields }, listId)
* update([{ email, ...fields }, { email, ...fields }, { email, ...fields }, ...], listId)
* delete({ contact_id }, listId)
* delete({ contact_ids }, listId)
* changeStatus({ emails, change_to, ocx_child_id, ocx_connection_id }, listId)
* changeEmail({ email, new_email }, listId)

### [ListsApi](https://ongage.atlassian.net/wiki/spaces/HELP/pages/1027965140/List+API+Methods)

* get(id)
* getAll({ name, type, sort, order, offset, limit })
* createExport({ list_id, name, segment_id, mailing_id, date_format, file_format, fields_selected, status })
* retrieveExport(id)

## License

MIT license
