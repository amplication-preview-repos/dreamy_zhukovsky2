import { Booking } from "../booking/Booking";
import { Pet } from "../pet/Pet";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pets?: Array<Pet>;
  updatedAt: Date;
};
