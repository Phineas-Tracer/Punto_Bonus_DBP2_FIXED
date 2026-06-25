import { Link } from "react-router-dom";

interface Props {
    flight: any;
    onClose: () => void;
}

export default function FlightDetailModal({flight, onClose}: Props) {
    if (!flight) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">
                    {flight.flightNumber}
                </h2>
                
                <p>Aerolinea: {flight.airline}</p>
                <p>Origen: {flight.origin}</p>
                <p>Destino: {flight.destination}</p>
                <p>Salida: {flight.departureTime}</p>
                <p>Llegada: {flight.arrivalTime}</p>
                
                <div className="flex justify-between mt-4">

                <button
                onClick={onClose}
                className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                    Cerrar
                </button>

                <Link
                to={"/book/${flight.id}"}
                className="big-green-600 text-white px-4 py-2 rounded"
                >
                    Reservar
                </Link>
                </div>
            </div>
        </div>
    );
}