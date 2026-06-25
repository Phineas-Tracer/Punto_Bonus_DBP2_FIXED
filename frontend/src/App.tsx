import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SearchFlights from "./pages/SearchFlights";
import BookFlight from "./pages/BookingDetails";
import MyBooking from "./pages/MyBookings";
import { useAuth } from "./context/authContext";

function App() {
    const { isAuthenticated } = useAuth();
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </div>
    );
}

export default App;