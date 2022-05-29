import Panvas from './Panvas.js';

describe('Panvas', () => {
  describe('coercePoint()', () => {
    const panvas = new Panvas();
    test('basic', () => {
      expect(panvas.coercePoint).toBeInstanceOf(Function);
    })
    describe('correctly returns an array of coordinates', () => {
      test('works correctly', () => {
        const aValues = [0, 1, 2.5, -17];
        const bValues = [0, 4, 7.3, -2.3];
        aValues.forEach(a => {
          bValues.forEach(b => {
            expect(panvas.coercePoint([a, b])).toEqual([a, b]);
          });
        });
      })
    })
  })
})