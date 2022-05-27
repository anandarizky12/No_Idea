export {};
const makeClassCode = require('./GenerateClassCode');


test('return classcode with defined length 6', () => {
    const code = makeClassCode(6)
    expect(code).toHaveLength(6)
  });

  test('return classcode with defined length 1', () => {
    const code = makeClassCode(1)
    expect(code).toHaveLength(1)
  });


  test('return classcode with defined length 10', () => {
    const code = makeClassCode(10)
    expect(code).toHaveLength(10)
  });

  test('return classcode with defined length 0', () => {
    const code = makeClassCode(0)
    expect(code).toHaveLength(0)
  });

