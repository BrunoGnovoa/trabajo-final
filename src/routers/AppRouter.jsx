import { Route, Routes } from "react-router-dom"
import { PageLogin } from "../pages/auth/PageLogin"
import { PageDashboard } from "../pages/dashboard/PageDashboard"
import { PrivateRouters } from "./PrivateRouters"
import { HomePage } from '../pages/home/HomePage'
import { Character } from "../pages/characters/Character"
import { HomeInicio } from "../pages/home/HomeInicio"
import { CollectionPage } from "../pages/colection/MiColeccionPage"

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomeInicio />} />
            <Route path="/HomePage" element={<HomePage />} />

            <Route path="/character/:id" element={<Character />} />

            <Route path="/login" element={<PageLogin />} />

            <Route path="/dashboard" element={
                <PrivateRouters>
                    <PageDashboard />
                </PrivateRouters>
            } />



            <Route path="/CollectionPage" element={<CollectionPage/>}/>
            <Route />
        </Routes>
    )
}