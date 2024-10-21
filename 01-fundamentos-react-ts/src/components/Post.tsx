import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface Author{
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType;
}

export function Post({post}: PostProps) {

    const publishedAtFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([''])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete: string){
        const commentsListDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsListDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>

            <header>

                <div className={styles.author}>

                    <Avatar
                        hasBorder
                        src={post.author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>

                </div>

                <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
            <div className={styles.content}>
                {post.content.map(element => {
                    if (element.type === 'paragraph'){
                        return <p key={element.content}>{element.content}</p>
                    }else if (element.type === 'link') {
                        return <p key={element.content}><a href="#">{element.content}</a></p>
                    }
                })}

            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(elements => {
                    return (
                        <Comment 
                            key={elements} 
                            content={elements}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}