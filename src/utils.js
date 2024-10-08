import { merge } from 'lodash-es'

export const list = listId => req => merge({}, req, {
  url: `https://api.ongage.net/${encodeURIComponent(listId)}/api`
})

export const get = (path, args) => req => merge({}, req, {
  method: 'GET',
  url: (req.url || '') + path + (args ? `?${new URLSearchParams(args).toString()}` : '')
})

export const post = (path, body) => req => merge({}, req, {
  method: 'POST',
  url: (req.url || '') + path,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})

export const put = (path, body) => req => merge({}, req, {
  method: 'PUT',
  url: (req.url || '') + path,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
