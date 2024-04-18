import { useNavigate } from "react-router-dom"
import { HomePage } from "../home/HomePage"

export const PageDashboard = () => {
    const navigation = useNavigate()
    const handleCerrarSesion = () => {
        localStorage.removeItem("token")
        navigation("/login", { replace: true })
    }

    return (
        <div>
           <HomePage/>


            <button onClick={handleCerrarSesion}>Cerrar Sesion</button>
        </div>
    )
}