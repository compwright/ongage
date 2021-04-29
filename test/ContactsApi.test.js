import { ContactsApi } from '../src';

const api = new ContactsApi('a', 'b', 'c');

test('ContactsApi.getById()', () => {
  let req = api.getById(5);
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/contacts/by_id/5',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });

  req = api.getById(5, 1);
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/contacts/by_id/5',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });
});

test('ContactsApi.getByEmail()', () => {
  let req = api.getByEmail('jonathon@compwright.com');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/contacts/by_email/jonathon%40compwright.com',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });

  req = api.getByEmail('jonathon@compwright.com', '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/contacts/by_email/jonathon%40compwright.com',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });
});

test('ContactsApi.getListsByEmail()', () => {
  const req = api.getListsByEmail('jonathon@compwright.com');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/contacts/cross_account?email=jonathon%40compwright.com',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });
});

test('ContactsApi.create()', () => {
  let req = api.create({ email: 'jonathon@compwright.com' });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/contacts',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });

  req = api.create({ email: 'jonathon@compwright.com' }, '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/contacts',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });
});

test('ContactsApi.update()', () => {
  let req = api.update({ email: 'jonathon@compwright.com' });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/contacts',
    method: 'PUT',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });

  req = api.update({ email: 'jonathon@compwright.com' }, '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/contacts',
    method: 'PUT',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });
});

test('ContactsApi.changeStatus()', () => {
  let req = api.changeStatus({ email: 'jonathon@compwright.com' });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/v2/contacts/change_status',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });

  req = api.changeStatus({ email: 'jonathon@compwright.com' }, '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/v2/contacts/change_status',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });
});

test('ContactsApi.changeEmail()', () => {
  let req = api.changeEmail({ email: 'jonathon@compwright.com' });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/v2/contacts/change_email',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });

  req = api.changeEmail({ email: 'jonathon@compwright.com' }, '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/v2/contacts/change_email',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });
});

test('ContactsApi.delete()', () => {
  let req = api.delete({ email: 'jonathon@compwright.com' });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/v2/contacts/delete',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });

  req = api.delete({ email: 'jonathon@compwright.com' }, '1');
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/1/api/v2/contacts/delete',
    method: 'POST',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c',
      'Content-Type': 'application/json'
    },
    body: '{"email":"jonathon@compwright.com"}'
  });
});
