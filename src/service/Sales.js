import Utils from './../utils';
import RevenueInvoice from './../model/RevenueInvoice';

export default class Sales {
  
  totalSales = {
    revenue: 0,
    serviceTax: 0,
    swachBharatTax: 0,
    krishiKalyanTax: 0
   };

  calculateRevenue(bookingInvoice) {
    const sales = {...this.totalSales};
    const utilsObj = new Utils(); 
    
    sales.revenue = utilsObj.roundOffToTwoDecimals(sales.revenue + bookingInvoice.subTotal);
    sales.serviceTax = utilsObj.roundOffToTwoDecimals(sales.serviceTax + bookingInvoice.serviceTax);
    sales.swachBharatTax = utilsObj.roundOffToTwoDecimals(sales.swachBharatTax + bookingInvoice.swachBharatTax);
    sales.krishiKalyanTax = utilsObj.roundOffToTwoDecimals(sales.krishiKalyanTax + bookingInvoice.krishiKalyanTax);
    this.totalSales = sales;
    return new RevenueInvoice(sales.revenue, sales.serviceTax, sales.swachBharatTax, sales.krishiKalyanTax);
  }

}
