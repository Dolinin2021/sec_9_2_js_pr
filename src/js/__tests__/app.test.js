import { getBuffer, ArrayBufferConverter } from '../app';

test('correct work of load and toString methods', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  converter.load(buffer);
  const str = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(str).toEqual(expected);
});

test('wrong data', () => {
  const converter = new ArrayBufferConverter();
  converter.load('');
  const str = converter.toString();
  const expected = '';
  expect(str).toEqual(expected);
});
