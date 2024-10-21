import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={"https://media.licdn.com/dms/image/v2/D4D03AQEDBxBHiJMZpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718923504911?e=1732752000&v=beta&t=Yk9CP9fCKl3-6FUOtjwQjRvZrGC9LF76OOvMRrc90vw"}
            />
            
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Mateus Matos</strong>
                            <time title='25 de Setembro às 22:09h' dateTime="2024-09-25 22:09:35">Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/>    
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}