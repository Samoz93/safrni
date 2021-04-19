export class LocationModel {
  constructor(
    public id: string,
    public imageSlide: string[],
    public name: String,
    public desc: string,
    public geo: string
  ) {}
}
