import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEDBxBHiJMZpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718923504911?e=1732752000&v=beta&t=Yk9CP9fCKl3-6FUOtjwQjRvZrGC9LF76OOvMRrc90vw" />
            
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Mateus Matos</strong>
                            <time title='25 de Setembro às 22:09h' dateTime="2024-09-25 22:09:35">Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>    
                        </button>

                    </header>

                    <p>Muito bom Mateus, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}