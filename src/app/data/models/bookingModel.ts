export class BookingModel {
  constructor(
    public id: string = '',
    public image: string = '',
    public duration: number = 0,
    public price: number = 0,
    public currency: string = '',
    public fullName: string = '',
    public email: string = '',
    public phoneNumber: string = '',
    public startDate: number = Date.now(),
    public ticketCount: number = 0,
    public message: string = '',
    public ticketImage: string = '',
    public isApproved: boolean = false
  ) {}
}
export interface BookingInterface {
  image: string;
  id: string;
  duration: number;
  price: number;
  currency: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  startDate: number;
  ticketCount: number;
  message: string;
  ticketImage: string;
  isApproved: boolean;
}
