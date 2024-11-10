import { IoRocketOutline } from "react-icons/io5";
import { HeaderContainer } from "./styles";
import { MdOutlineTimer } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>

            <IoRocketOutline size={26} />
            
            <nav>

                <NavLink to="" title="Timer">

                    <MdOutlineTimer size={24} />

                </NavLink>

                <NavLink to="/history" title="Histórico">
                    
                    <LuClipboardList size={24} />
                    
                </NavLink>

            </nav>

        </HeaderContainer>
    )
}