import ServiceTax from './ServiceTax';

describe('ServiceTax Model', function() {
  describe('Should return service tax rate', () => {
    it('Should return 0.14 as rate', function() {
      const serviceTaxObj = new ServiceTax();  
      expect(serviceTaxObj.getRate()).toEqual(0.14);
    });
  });
});