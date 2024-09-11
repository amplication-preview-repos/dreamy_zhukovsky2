import { Booking } from "../booking/Booking";
import { Customer } from "../customer/Customer";

export type Pet = {
  age: number | null;
  bookings?: Array<Booking>;
  breed: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
