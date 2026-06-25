import { Link } from "react-router-dom";

interface BookingCardProps {
  booking: any;
}

export default function BookingCard({
  booking,
}: BookingCardProps) {

  return (
    <div className="border rounded-lg p-4 shadow">

      <h3 className="font-bold">
        {booking.flightNumber}
      </h3>

      <p>
        {booking.airline}
      </p>

      <p>
        {booking.departureDate}
      </p>

      <Link
        to={`/booking/${booking.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
      >
        See Info
      </Link>

    </div>
  );
}