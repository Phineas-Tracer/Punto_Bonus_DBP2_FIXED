import api from "./api";

export const bookFlight = (flightId: number) => {
    return api.post("/flights/book",
        {flightId,}
    );
};

export const getBooking = (bookingId: number) => {
    return api.get("/flights/book/${bookingId}");
};