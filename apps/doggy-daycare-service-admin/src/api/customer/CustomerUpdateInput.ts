import { BookingUpdateManyWithoutCustomersInput } from "./BookingUpdateManyWithoutCustomersInput";
import { PetUpdateManyWithoutCustomersInput } from "./PetUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  bookings?: BookingUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  pets?: PetUpdateManyWithoutCustomersInput;
};
