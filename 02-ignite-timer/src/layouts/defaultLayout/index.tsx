import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";


export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet /> 
            {/* O Outlet renderiza o elemento filho da rota , se houver. */}
        </LayoutContainer>
    )
}