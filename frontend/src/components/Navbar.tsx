import {Menu} from "lucide-react";

interface NavbarProps {
    onMenuClick: () => void;
}

export default function Navbar({onMenuClick}: NavbarProps) {
    return (
        <header className="big-blue-900 text-white p-4 flex justify-between items-center">
            <h1 className="text-x1 font-bold">
                FlyAway
            </h1>

            <button onClick={onMenuClick}>
                <Menu size={28}/>
            </button>
        </header>
    );
}