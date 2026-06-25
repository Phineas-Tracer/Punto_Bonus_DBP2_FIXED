import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const response = await login({
                email,
                password,
            });

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate("/dashboard");

        } catch {
            alert("Credenciales inválidas");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">

            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow w-96"
            >

                <h2 className="text-2xl font-bold mb-4">
                    Login
                </h2>

                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="border p-2 w-full mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-blue-600 text-white w-full p-2 rounded"
                >
                    Login
                </button>

                <Link
                    to="/register"
                    className="block mt-4 text-blue-600"
                >
                    Registrarse
                </Link>

            </form>

        </div>
    );
}