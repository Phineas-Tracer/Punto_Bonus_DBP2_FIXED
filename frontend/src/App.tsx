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
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <Navigate to="/" />} />
                <Route path="/search-flights" element={isAuthenticated ? <SearchFlights/> : <Navigate to="/" />} />
                <Route path="/book-flight" element={isAuthenticated ? <BookFlight/> : <Navigate to="/" />} />
                <Route path="/my-bookings" element={isAuthenticated ? <MyBooking/> : <Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;