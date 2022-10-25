const twoexp = require ('./twoexp');

// TODO: add BDD-style tests
describe('twoexp()', () => {
    it('should calc 2^1 as 2', () => {
        expect(twoexp(1)).toBe(2);
    });
    it('should calc 2^2 as 4', () => {
        expect(twoexp(2)).toBe(4);
    });
    it('should calc 2^-1 as 0.5', () => {
        expect(twoexp(-1)).toBe(0.5);
    });
});
