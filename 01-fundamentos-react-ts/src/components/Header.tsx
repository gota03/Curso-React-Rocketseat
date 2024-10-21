import style from './Header.module.css'
import logoReact from '../assets/react.svg'

export function Header() {
    return (
        <header className={style.header}>
            <img src={logoReact} alt="Logotipo do ignite" />
        </header>
    )
}