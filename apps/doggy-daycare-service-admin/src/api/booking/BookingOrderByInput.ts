import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  dropoffTime?: SortOrder;
  id?: SortOrder;
  petId?: SortOrder;
  pickupTime?: SortOrder;
  serviceType?: SortOrder;
  updatedAt?: SortOrder;
};
