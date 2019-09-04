import Sales from "./Sales";
import RevenueInvoice from './../model/RevenueInvoice';

describe("Sales Service", () => {
  const salesObj = new Sales();

  describe("Test calculateRevenue", () => {
    it("Should return sales generated", () => {
       expect(salesObj.calculateRevenue({subTotal: 100.48, serviceTax: 2.6 ,swachBharatTax: 1.6,krishiKalyanTax: 1.6}))
       .toEqual(new RevenueInvoice (100.48,2.6,1.6,1.6 ));
    });
  });
});
