import { SortOrder } from "../../util/SortOrder";

export type PetOrderByInput = {
  age?: SortOrder;
  breed?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
