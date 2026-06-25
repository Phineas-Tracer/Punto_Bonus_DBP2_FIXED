import { useState } from "react";
import { useParams } from "react-router-dom";
import SeatSelector from "../components/SeatSelector";
import { bookFlight } from "../services/bookingService";

export default function BookFlight() {

    const { id } = useParams();

    const [selectedSeats, setSelectedSeats] =
        useState<string[]>([]);

    const seatPrice = 200;

    const total =
        selectedSeats.length * seatPrice;

    const handleBook = async () => {

        try {

            const response =
                await bookFlight(
                    Number(id)
                );

            alert(
                `Reserva creada: ${response.data.id}`
            );

        } catch {

            alert("Error reservando");
        }
    };

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold">
                Reservar Vuelo
            </h1>

            <div className="mt-6">

                <SeatSelector
                    selectedSeats={selectedSeats}
                    setSelectedSeats={setSelectedSeats}
                />

            </div>

            <h2 className="text-xl mt-6">
                Total: ${total}
            </h2>

            <button
                onClick={handleBook}
                className="bg-green-600 text-white px-6 py-2 mt-4"
            >
                Confirmar Reserva
            </button>

        </div>
    );
}