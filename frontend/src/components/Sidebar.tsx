import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!isOpen) return null;

    return(
        <div className="w-64 bg-gray-100 h-full p-4 shadow-lg">
            <nav className="flex flex-col gap-4">
                <Link to="/search-flights"> Search Flights </Link> 
                <Link to="/my-bookings"> My Booked Flights </Link>

                <button 
                    onClick={handleLogout}
                    className="text-red-600 text-left"
                >
                    Logout
                </button>
            </nav>
        </div>
    )
}


