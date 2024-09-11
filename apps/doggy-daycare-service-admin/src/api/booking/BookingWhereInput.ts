import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  dropoffTime?: DateTimeNullableFilter;
  id?: StringFilter;
  pet?: PetWhereUniqueInput;
  pickupTime?: DateTimeNullableFilter;
  serviceType?: StringNullableFilter;
};
