import { Navigate } from "react-router-dom"


export const PrivateRouters = ({children}) => {
    const token = localStorage.getItem("token")

    return token !== null ? children : <Navigate to="/login" />
}