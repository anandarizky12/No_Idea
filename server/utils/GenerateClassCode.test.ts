export {};
const makeClassCode = require('./GenerateClassCode');


test('return classcode with defined length 6', () => {
    const code = makeClassCode(6)
    expect(code).toHaveLength(6)
  });

