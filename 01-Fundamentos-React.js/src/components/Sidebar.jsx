import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEDBxBHiJMZpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718923504911?e=1732752000&v=beta&t=Yk9CP9fCKl3-6FUOtjwQjRvZrGC9LF76OOvMRrc90vw"
                    className={styles.avatar}
                />
                <strong>Mateus Matos</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}