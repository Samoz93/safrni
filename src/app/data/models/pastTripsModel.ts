export class TripsLine {
  constructor(public year: number, public trips: PastTrip) {}
}
export class PastTrip {
  constructor(
    public id: string,
    public name: string,
    public fromDate: Date,
    public toDate: Date
  ) {}
}
