import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

            <header>

                <div className={styles.author}>

                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQEDBxBHiJMZpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718923504911?e=1732752000&v=beta&t=Yk9CP9fCKl3-6FUOtjwQjRvZrGC9LF76OOvMRrc90vw" />

                    <div className={styles.authorInfo}>
                        <strong>Mateus Matos</strong>
                        <span>Developer</span>
                    </div>

                </div>

                <time title='25 de Setembro às 22:09h' dateTime="2024-09-25 22:09:35">Publicado há 1h</time>
            </header>
            
            <div className={styles.content}>
                <p>Ola pessoal</p>
                <p>Estou aprendendo react</p>
                <p><a href="">www.google.com</a></p>
                <p><a href="">#reactélegal</a></p>

            </div>
            
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}