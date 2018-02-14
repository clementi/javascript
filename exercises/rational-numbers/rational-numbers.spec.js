const rational = require('./rational-numbers');

describe('Exercise - Rational Numbers', () => {
  describe('Arithmetic', () => {
    it('Add two positive rational numbers', () => {
      const expected = { num: 7, den: 6 };
      const r1 = rational.from(1, 2);
      const r2 = rational.from(2, 3);

      expect(rational.add(r1, r2)).toEqual(expected);
    });
    it('Add a positive rational number and a negative rational number', () => {
      const expected = { num: -1, den: 6 };
      const r1 = rational.from(1, 2);
      const r2 = rational.from(-2, 3);

      expect(rational.add(r1, r2)).toEqual(expected);
    });
    it('Add two negative rational numbers', () => {
      const expected = { num: -7, den: 6 };
      const r1 = rational.from(-1, 2);
      const r2 = rational.from(-2, 3);

      expect(rational.add(r1, r2)).toEqual(expected);
    });
    it('Add a rational number to its additive inverse', () => {
      const expected = { num: 0, den: 1 };
      const r1 = rational.from(1, 2);
      const r2 = rational.from(-1, 2);

      expect(rational.add(r1, r2)).toEqual(expected);
    });
  });
});
