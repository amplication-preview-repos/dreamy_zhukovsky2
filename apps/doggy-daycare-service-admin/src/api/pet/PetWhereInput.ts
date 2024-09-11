import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PetWhereInput = {
  age?: IntNullableFilter;
  bookings?: BookingListRelationFilter;
  breed?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
