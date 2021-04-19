import { add, format, isAfter, sub, toDate } from 'date-fns';

export class UserTripsModel {
  constructor(
    public id: string,
    public tripId: string,
    public image: string,
    public duration: number,
    public city: string,
    public price: number,
    public currency: string,
    public discount: number = 0,
    public startDate: number = sub(new Date(), { days: 5 }).getTime()
  ) {}

  get totalPrice() {
    const discountAmount = this.price * this.discount;
    return this.price - discountAmount;
  }

  get year(): number {
    return new Date(this.startDate).getFullYear();
  }
  get fromdateTodateString(): String {
    const stDate = format(toDate(this.startDate), 'dd MMMM');
    const endD = format(this.endDate, 'dd MMMM');

    return `from ${stDate} - ${endD}`;
  }

  get endDate(): Date {
    return add(this.startDate, {
      days: this.duration,
    });
  }

  get isPastTrip() {
    return isAfter(new Date(), this.endDate);
  }
}
