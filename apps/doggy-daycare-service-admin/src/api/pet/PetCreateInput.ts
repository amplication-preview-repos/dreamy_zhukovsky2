import { BookingCreateNestedManyWithoutPetsInput } from "./BookingCreateNestedManyWithoutPetsInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PetCreateInput = {
  age?: number | null;
  bookings?: BookingCreateNestedManyWithoutPetsInput;
  breed?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
