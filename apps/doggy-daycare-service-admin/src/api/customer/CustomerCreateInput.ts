import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";
import { PetCreateNestedManyWithoutCustomersInput } from "./PetCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  pets?: PetCreateNestedManyWithoutCustomersInput;
};
