export class LocationModel {
  constructor(
    public id: string,
    public image: string,
    public name: string,
    public desc: string,
    public geo: Coordinates
  ) {}
}
export type Coordinates = { latitude: number; longitude: number };
