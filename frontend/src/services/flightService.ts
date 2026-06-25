import api from "./api";

export const searchFlights = (
    flightNumber?: string,
    airline?: string
) => {
    return api.get("/flights/search", 
        {
            params: { flightNumber, airline },
        }
    );
};