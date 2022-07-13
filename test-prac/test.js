const capitalize = require('./functions/capitalize');

test('capitalizes S in superman', () => {
  expect(capitalize('superman')).toBe('Superman');
});