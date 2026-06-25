interface FlightCardProps {
    flight: any;
    onViewDetails: (flight : any) => void;
}

export default function FlightCard({flight, onViewDetails}: FlightCardProps) {
    return (
        <div className="border rounded-lg p-4 shadow">
            <h3 className="front-bold">
                {flight.flightNumber}
            </h3>
            <p>
                {flight.airline}
            </p>
            <p>
                {flight.origin} : {flight.destination}
            </p>

            <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => onViewDetails(flight)}
            >
                Ver Detalles
            </button>
        </div>
    );
}
