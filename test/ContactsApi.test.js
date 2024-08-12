import { ContactsApi } from '../src';

const api = new ContactsApi('a', 'b', 'c');

describe('ContactsApi', () => {
  test('getById()', () => {
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

  test('getByEmail()', () => {
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

  test('getListsByEmail()', () => {
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

  test('create()', () => {
    let req = api.create({ email: 'jonathon@compwright.com' });
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/v2/contacts',
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
      url: 'https://api.ongage.net/1/api/v2/contacts',
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

  test('update()', () => {
    let req = api.update({ email: 'jonathon@compwright.com' });
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/v2/contacts',
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
      url: 'https://api.ongage.net/1/api/v2/contacts',
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

  test('changeStatus()', () => {
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

  test('changeEmail()', () => {
    let req = api.changeEmail({ email: 'jonathon@compwright.com' });
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/contacts/change_email',
      method: 'PUT',
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
      url: 'https://api.ongage.net/1/api/contacts/change_email',
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

  test('delete()', () => {
    let req = api.delete({ email: 'jonathon@compwright.com' });
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/contacts/delete',
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
      url: 'https://api.ongage.net/1/api/contacts/delete',
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
});
