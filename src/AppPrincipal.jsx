
import { AppRouter } from "./routers/AppRouter"
import { NavbarProvider } from "./context/AppContext"


export const AppPrincipal = () => {
    return (
        <div>
           <NavbarProvider>
        <AppRouter/> 
            </NavbarProvider> 

        </div>
    )
}