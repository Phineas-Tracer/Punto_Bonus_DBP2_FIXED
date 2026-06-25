import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            await register(form);

            alert("Usuario registrado");

            navigate("/");

        } catch {
            alert("Error al registrar");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow w-96"
            >

                <h2 className="text-2xl mb-4">
                    Registro
                </h2>

                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Nombre"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            firstName: e.target.value,
                        })
                    }
                />

                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Apellido"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            lastName: e.target.value,
                        })
                    }
                />

                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    className="border p-2 w-full mb-3"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }
                />

                <button
                    className="bg-green-600 text-white w-full p-2"
                >
                    Registrarse
                </button>

            </form>

        </div>
    );
}