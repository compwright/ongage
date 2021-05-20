import { ListsApi } from '../src';

const api = new ListsApi('a', 'b', 'c');

test('ListsApi.get()', () => {
  const req = api.get(5);
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/lists/5',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });
});

test('ListsApi.getAll()', () => {
  let req = api.getAll();
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/lists?',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });

  req = api.getAll({ type: 'sending', limit: 5 });
  expect(req).toStrictEqual({
    url: 'https://api.ongage.net/api/lists?type=sending&limit=5',
    method: 'GET',
    headers: {
      X_USERNAME: 'a',
      X_PASSWORD: 'b',
      X_ACCOUNT_CODE: 'c'
    }
  });
});
