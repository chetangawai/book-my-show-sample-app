import Checkout from "./Checkout";
import sinon from "sinon";
import TaxCalculation from "./TaxCalculation";

describe("Checkout Service", () => {
  const checkoutObj = new Checkout();
  describe("Test getInvoice", () => {
    it("Should return invoice of booking made", () => {
      const taxCalculation = new TaxCalculation();
      sinon.stub(checkoutObj, "getTicketPrice").returns(320);
      const invoiceObj = {
        krishiKalyanTax: 1.6,
        serviceTax: 44.8,
        subTotal: 320,
        swachBharatTax: 1.6,
        totalAmount: 368
      };

      sinon.stub(taxCalculation, "calculateTotal").returns(invoiceObj);
      expect(checkoutObj.getInvoice(["A1"])).toEqual(invoiceObj);
      checkoutObj.getTicketPrice.restore();
      taxCalculation.calculateTotal.restore();
    });
  });

  describe("Test getTicketPrice", () => {
    it("Should return price of Platinum seat ", () => {
      expect(checkoutObj.getTicketPrice("A1")).toEqual(320);
    });
    it("Should return price of Gold seat ", () => {
      expect(checkoutObj.getTicketPrice("B1")).toEqual(280);
    });
    it("Should return price of Silver seat ", () => {
      expect(checkoutObj.getTicketPrice("C1")).toEqual(240);
    });
  });
});
