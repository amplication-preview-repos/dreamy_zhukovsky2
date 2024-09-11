import { Customer } from "../customer/Customer";
import { Pet } from "../pet/Pet";

export type Booking = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  dropoffTime: Date | null;
  id: string;
  pet?: Pet | null;
  pickupTime: Date | null;
  serviceType: string | null;
  updatedAt: Date;
};
