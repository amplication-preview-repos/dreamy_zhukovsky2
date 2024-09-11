import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "serviceType";

export const BookingTitle = (record: TBooking): string => {
  return record.serviceType?.toString() || String(record.id);
};
