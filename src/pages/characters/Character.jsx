import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterId } from "../../actions/characters.api";

export const Character = () => {
    const [character, setCharacter] = useState({});
    const navigation = useNavigate();
    const params = useParams();

    useEffect(() => {
        getCharacterId(params.id).then((res) => setCharacter(res));
    }, [params.id]);

    const handleAtras = () => {
        navigation(-1, { replace: true });
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-md text-center">
                <div>#{params.id}</div>
                <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
                <img src={character.image} alt={character.name} className="mx-auto mb-4 rounded-lg" />
                <button onClick={handleAtras} className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700">Atras</button>
            </div>
        </div>
    );
};