import { BookingUpdateManyWithoutPetsInput } from "./BookingUpdateManyWithoutPetsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PetUpdateInput = {
  age?: number | null;
  bookings?: BookingUpdateManyWithoutPetsInput;
  breed?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
