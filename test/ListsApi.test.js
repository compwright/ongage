import { ListsApi } from '../src';

const api = new ListsApi('a', 'b', 'c');

describe('ListsApi', () => {
  test('get()', () => {
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

  test('getAll()', () => {
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

  test('createExport()', () => {
    let req = api.createExport({
      name: 'My Export',
      date_format: 'mm/dd/yyyy',
      file_format: 'csv',
      segment_id: [77197, 77198],
      status: [
        'active',
        'inactive'
      ]
    });
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/export',
      method: 'POST',
      headers: {
        X_USERNAME: 'a',
        X_PASSWORD: 'b',
        X_ACCOUNT_CODE: 'c',
        'Content-Type': 'application/json'
      },
      body: "{\"name\":\"My Export\",\"date_format\":\"mm/dd/yyyy\",\"file_format\":\"csv\",\"segment_id\":[77197,77198],\"status\":[\"active\",\"inactive\"]}"
    });
  });

  test('retrieveExport()', () => {
    const req = api.retrieveExport(5);
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api/export/5/retrieve',
      method: 'GET',
      headers: {
        X_USERNAME: 'a',
        X_PASSWORD: 'b',
        X_ACCOUNT_CODE: 'c'
      }
    });
  });
});
