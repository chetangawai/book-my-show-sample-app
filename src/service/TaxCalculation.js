import ServiceTax from "./../model/ServiceTax";
import SwachBharatTax from "./../model/SwachBharatTax";
import KrishiKalyanTax from "./../model/KrishiKalyanTax";
import Utils from "./../utils";
import Booking from "./../model/Booking";

export default class TaxCalculation {
  calculateTotal(subTotal) {
    const serviceTaxObj = new ServiceTax();
    const swachBharatTaxObj = new SwachBharatTax();
    const krishiKalyanTaxObj = new KrishiKalyanTax();
    const utilsObj = new Utils();
    const serviceTax = utilsObj.roundOffToTwoDecimals(
      subTotal * serviceTaxObj.getRate()
    );
    const swachBharatTax = utilsObj.roundOffToTwoDecimals(
      subTotal * swachBharatTaxObj.getRate()
    );
    const krishiKalyanTax = utilsObj.roundOffToTwoDecimals(
      subTotal * krishiKalyanTaxObj.getRate()
    );
    const totalAmount = utilsObj.roundOffToTwoDecimals(
      subTotal + serviceTax + swachBharatTax + krishiKalyanTax
    );

    return new Booking(
      subTotal,
      serviceTax,
      swachBharatTax,
      krishiKalyanTax,
      totalAmount
    );
  }
}
