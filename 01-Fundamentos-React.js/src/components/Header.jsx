import logoIgnite from '../assets/react-logo.png'
import style from './Header.module.css'

export function Header() {
    return (
        <header className={style.header}>
            <img src={logoIgnite} alt="Logotipo do ignite" />
        </header>
    )
}