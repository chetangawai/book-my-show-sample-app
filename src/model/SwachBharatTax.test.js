import SwachBharatTax from './SwachBharatTax';

describe('SwachBharatTax Model', function() {
  describe('Should return krishi kalyan tax rate', () => {
    it('Should return 0.005 as rate', function() {
      const swachBharatTaxObj = new SwachBharatTax();  
      expect(swachBharatTaxObj.getRate()).toEqual(0.005);
    });
  });
});