import { Link } from "react-router-dom";
import { NavbarContext } from "../context/AppContext";
import { useContext } from "react";

export const Navbar = () => {
    

    const { showNavbar } = useContext(NavbarContext);
    

    return (
        <div className={showNavbar ? 'navbar-visible' : 'navbar-hidden'}>
            <nav className="bg-gray-900 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <Link to="/" className="text-white text-2xl font-bold">Rick and Morty</Link>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-4">
                                <li><Link to="/login" className="text-gray-300 hover:text-white">Inicio</Link></li>
                                <li><Link to="/CollectionPage" className="text-gray-300 hover:text-white">Mi Colección</Link></li>
                            
                                <li> <Link to="/login" className="text-red-500 hover:text-white" >Cerrar sesion</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};



     