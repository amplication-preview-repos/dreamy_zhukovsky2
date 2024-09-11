import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PetTitle } from "../pet/PetTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="dropoffTime" source="dropoffTime" />
        <ReferenceInput source="pet.id" reference="Pet" label="Pet">
          <SelectInput optionText={PetTitle} />
        </ReferenceInput>
        <DateTimeInput label="pickupTime" source="pickupTime" />
        <TextInput label="serviceType" source="serviceType" />
      </SimpleForm>
    </Edit>
  );
};
