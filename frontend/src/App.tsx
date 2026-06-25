import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SearchFlights from "../pages/SeacrhFlights";
import BookFlight from "../pages/BookDetails";
import MyBooking from "../pages/MyBookings";
import { useAuth } from "../context/authContext";

function App() {
    const isAuthenticated = useAuth();
    
    return (
        <div>
            <a href="/" element={<Login/>} />
            <a href="/dashboard" element={isAuthenticated ? <SearchFlights/> : <Navigate to="/" />} />
            <a href="/search-flights" element={isAuthenticated ? <SearchFlights/> : <Navigate to="/" />} />






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