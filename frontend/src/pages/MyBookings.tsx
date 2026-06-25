import { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import { getBooking } from "../services/bookingService";

export default function MyBookings() {

    const [bookings, setBookings] =
        useState<any[]>([]);

    useEffect(() => {

        const ids =
            JSON.parse(
                localStorage.getItem("bookings")
                || "[]"
            );

        loadBookings(ids);

    }, []);

    const loadBookings = async (
        ids: number[]
    ) => {

        const results = [];

        for (const id of ids) {

            const response =
                await getBooking(id);

            results.push(response.data);
        }

        setBookings(results);
    };

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Mis Reservas
            </h1>

            <div className="grid grid-cols-3 gap-4">

                {bookings.map((booking) => (

                    <BookingCard
                        key={booking.id}
                        booking={booking}
                    />

                ))}

            </div>

        </div>
    );
}