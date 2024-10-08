import { Api } from '../src/Api';

describe('Api', () => {
  test('constructor()', () => {
    const api = new Api('a', 'b', 'c');
    expect(api).toHaveProperty('defaultRequest', {
      url: 'https://api.ongage.net/api',
      method: 'GET',
      headers: {
        X_USERNAME: 'a',
        X_PASSWORD: 'b',
        X_ACCOUNT_CODE: 'c'
      }
    });
  });
  
  test('compile()', () => {
    const api = new Api('a', 'b', 'c');
    const req = api.compile();
    expect(req).toStrictEqual({
      url: 'https://api.ongage.net/api',
      method: 'GET',
      headers: {
        X_USERNAME: 'a',
        X_PASSWORD: 'b',
        X_ACCOUNT_CODE: 'c'
      }
    });
  });
})
