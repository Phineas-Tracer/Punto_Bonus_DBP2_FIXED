import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooking } from "../services/bookingService";

export default function BookingDetails() {

    const { id } = useParams();

    const [booking, setBooking] =
        useState<any>(null);

    useEffect(() => {

        loadBooking();

    }, []);

    const loadBooking = async () => {

        const response =
            await getBooking(
                Number(id)
            );

        setBooking(response.data);
    };

    if (!booking) {

        return (
            <div>
                Cargando...
            </div>
        );
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold">
                Reserva #{booking.id}
            </h1>

            <div className="mt-6 space-y-2">

                <p>
                    Vuelo:
                    {booking.flightNumber}
                </p>

                <p>
                    Aerolínea:
                    {booking.airline}
                </p>

                <p>
                    Fecha:
                    {booking.departureDate}
                </p>

                <p>
                    Precio:
                    ${booking.total}
                </p>

            </div>

        </div>
    );
}