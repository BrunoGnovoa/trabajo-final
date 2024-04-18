import { useContext, useEffect, useState } from "react";
import { GetAllCharacters } from "../../actions/characters.api";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { NavbarContext } from "../../context/AppContext";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");
    const [collection, setCollection] = useState([]); // Estado para almacenar la colección de personajes

    const handleSearch = () => {
        GetAllCharacters(search).then((res) => {
            console.log("Resultados de búsqueda:", res); // Agregar console.log para depurar
            if (res.results) {
                setCharacters(res.results);
            }
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch(); // Llamar a la función de búsqueda después de un retraso
        }, 500);

        return () => clearTimeout(timer); // Limpiar el temporizador en cada renderización
    }, [search]);
    console.log("Personajes:", characters); // Agregar console.log para depurar

    const { showNavBar } = useContext(NavbarContext);
    const { showFooter } = useContext(NavbarContext);

    // Función para agregar un personaje a la colección
    const addToCollection = (character) => {
        setCollection((prevCollection) => [...prevCollection, character]);
    };

    return (
        <div>
            <Navbar /> {showNavBar}

            <div className="min-h-screen bg-gray-900 text-white font-sans">
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-bold mb-8">PERSONAJES RICK AND MORTY</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {characters.map((personaje) => (
                            <div key={personaje.id} className="rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-xl transition duration-300">
                                <Link to={`/character/${personaje.id}`}>
                                    <img src={personaje.image} alt={personaje.name} className="w-full h-64 object-cover" />
                                </Link>
                                <div className="p-4">
                                    <p className="text-xl font-semibold text-white mb-4">{personaje.name}</p>
                                    <p className="text-lg text-gray-300 mb-2">Status: {personaje.status}</p>
                                    <p className="text-lg text-gray-300 mb-2">Species: {personaje.species}</p>
                                    {personaje.type && <p className="text-lg text-gray-300 mb-2">Type: {personaje.type}</p>}
                                    <p className="text-lg text-gray-300 mb-2">Gender: {personaje.gender}</p>
                                    <button onClick={() => addToCollection(personaje)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Agregar a colección</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};