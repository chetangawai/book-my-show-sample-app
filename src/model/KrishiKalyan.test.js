import KrishiKalyan from './KrishiKalyanTax';

describe('KrishiKalyan Model', function() {
  describe('Should return krishi kalyan tax rate', () => {
    it('Should return 0.005 as rate', function() {
      const krishiKalyanObj = new KrishiKalyan();  
      expect(krishiKalyanObj.getRate()).toEqual(0.005);
    });
  });
});