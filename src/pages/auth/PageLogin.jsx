import { useState } from "react";
import { authUser } from "../../actions/auth.api";
import { useNavigate } from "react-router-dom";

export const PageLogin = () => {
    const navigation = useNavigate();
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const handleChangeInputs = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault(); 
        authUser({ username: inputForm.email, password: inputForm.password }).then((res) => {
            if (res.statusCode === 401) {
                alert("Datos incorrectos");
            } else {
                localStorage.setItem("token", res.access_token);
                navigation("/dashboard", { state: { logged: true }, replace: true });
            }
        });
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-200">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleChangeInputs} 
                            value={inputForm.email} 
                            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleChangeInputs} 
                            value={inputForm.password} 
                            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Ingresar</button>
                </form>
            </div>
        </div>
    );
};