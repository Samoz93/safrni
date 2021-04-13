export class TripOptions {
  constructor(
    public hasCar: boolean,
    public hasAirport: boolean,
    public hasBreakfast: boolean,
    public hasHotel: boolean = true
  ) {}
}

export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
