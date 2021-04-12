export class TripOptions {
  constructor(
    public hasCar: boolean,
    public hasAirport: boolean,
    public hasBreakfast: boolean,
    public hasHotel: boolean = true
  ) {}
}
