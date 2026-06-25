import { useState } from "react";
import FlightCard from "../components/FlightCard";
import FlightDetailModal from "../components/FlightDetailModal";
import { searchFlights } from "../services/flightService";

export default function SearchFlights() {

    const [flightNumber, setFlightNumber] = useState("");

    const [airline, setAirline] = useState("");

    const [flights, setFlights] = useState([]);

    const [selectedFlight, setSelectedFlight] =
        useState<any>(null);

    const handleSearch = async () => {

        const response =
            await searchFlights(
                flightNumber,
                airline
            );

        setFlights(response.data);
    };

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Search Flights
            </h1>

            <div className="flex gap-3 mb-4">

                <input
                    placeholder="Flight Number"
                    className="border p-2"
                    value={flightNumber}
                    onChange={(e) =>
                        setFlightNumber(e.target.value)
                    }
                />

                <input
                    placeholder="Airline"
                    className="border p-2"
                    value={airline}
                    onChange={(e) =>
                        setAirline(e.target.value)
                    }
                />

                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4"
                >
                    Search
                </button>

            </div>

            <div className="grid grid-cols-3 gap-4">

                {flights.map((flight: any) => (

                    <FlightCard
                        key={flight.id}
                        flight={flight}
                        onViewDetails={setSelectedFlight}
                    />

                ))}

            </div>

            <FlightDetailModal
                flight={selectedFlight}
                onClose={() =>
                    setSelectedFlight(null)
                }
            />

        </div>
    );
}