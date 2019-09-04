export default class Booking {
  subTotal: Number;
  serviceTax: Number;
  swachBharatTax: Number;
  krishiKalyanTax: Number;
  totalAmount: Number;

  constructor(
    subTotal,
    serviceTax,
    swachBharatTax,
    krishiKalyanTax,
    totalAmount
  ) {
    this.subTotal = subTotal;
    this.serviceTax = serviceTax;
    this.swachBharatTax = swachBharatTax;
    this.krishiKalyanTax = krishiKalyanTax;
    this.totalAmount = totalAmount;
  }
}
