import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";

export type BookingUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  dropoffTime?: Date | null;
  pet?: PetWhereUniqueInput | null;
  pickupTime?: Date | null;
  serviceType?: string | null;
};