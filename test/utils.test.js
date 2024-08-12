import { list, get, post, put } from '../src/utils';

const testFn = fn => {
  expect(typeof fn).toBe('function');
  expect(fn.length).toBe(1);
};

test('list()', () => {
  const fn = list('foo bar');
  testFn(fn);
  expect(fn({})).toStrictEqual({
    url: 'https://api.ongage.net/foo%20bar/api'
  });
});

test('get()', () => {
  const fn = get('/path', { foo: 'foo bar', baz: 'a' });
  testFn(fn);
  expect(fn({})).toStrictEqual({
    method: 'GET',
    url: '/path?foo=foo+bar&baz=a'
  });
  expect(get('/path')({})).toStrictEqual({
    method: 'GET',
    url: '/path'
  });
});

test('post()', () => {
  const fn = post('/path', { foo: 'foo bar', baz: 'a' });
  testFn(fn);
  expect(fn({})).toStrictEqual({
    method: 'POST',
    url: '/path',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{"foo":"foo bar","baz":"a"}'
  });
});

test('put()', () => {
  const fn = put('/path', { foo: 'foo bar', baz: 'a' });
  testFn(fn);
  expect(fn({})).toStrictEqual({
    method: 'PUT',
    url: '/path',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{"foo":"foo bar","baz":"a"}'
  });
});
