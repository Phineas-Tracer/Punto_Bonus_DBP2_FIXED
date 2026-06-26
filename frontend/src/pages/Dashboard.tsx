import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar
                onMenuClick={() => setMenuOpen(!menuOpen)}
            />
            <div className="flex">
                <Sidebar isOpen={menuOpen} />
                <div className="p-6 flex-1">
                    <h1 className="text-3xl font-bold">FlyAway Dashboard</h1>
                    <p className="mt-4">Bienvenido a FlyAway</p>
                </div>
            </div>
        </div>
    );
}