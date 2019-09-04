export default class RevenueInvoice {
  revenue: Number;
  serviceTax: Number;
  swachBharatTax: Number;
  krishiKalyanTax: Number;

  constructor(revenue, serviceTax, swachBharatTax, krishiKalyanTax) {
    this.revenue = revenue;
    this.serviceTax = serviceTax;
    this.swachBharatTax = swachBharatTax;
    this.krishiKalyanTax = krishiKalyanTax;
  }
}
