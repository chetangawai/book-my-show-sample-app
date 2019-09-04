export default class ServiceTax {
  rate: Number;

  constructor() {
    this.rate = 0.14;
  }

  getRate() {
    return this.rate;
  }
}
