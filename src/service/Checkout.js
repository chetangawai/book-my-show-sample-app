import SeatType from "./../model/SeatType";
import SeatPrice from "./../model/SeatPrice";
import TaxCalculation from "./TaxCalculation";

export default class Checkout {
  getInvoice(bookedSeats) {
    const ticketPrice = bookedSeats.reduce((sum, currentValue) => {
      return sum + this.getTicketPrice(currentValue);
    }, 0);
    const taxCalculation = new TaxCalculation();
    return taxCalculation.calculateTotal(ticketPrice);
  }

  getTicketPrice(seatNumber) {
    const firstCharacter = seatNumber.charAt(0);
    const seatType = SeatType[firstCharacter];
    return SeatPrice[seatType];
  }
}
