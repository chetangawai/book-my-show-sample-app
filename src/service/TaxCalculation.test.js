import TaxCalculation from "./TaxCalculation";

describe("TaxCalculation", () => {
  const taxCalculationObj = new TaxCalculation();

  describe("Test bookSeats", () => {
    it("Should return calculated tax and amount", () => {
        expect(taxCalculationObj.calculateTotal(320))
        .toEqual({"krishiKalyanTax": 1.6, "serviceTax": 44.8, 
        "subTotal": 320, "swachBharatTax": 1.6, "totalAmount": 368});
       
    });
  });
});
