import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEDBxBHiJMZpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718923504911?e=1732752000&v=beta&t=Yk9CP9fCKl3-6FUOtjwQjRvZrGC9LF76OOvMRrc90vw",
      name: "Mateus Matos",
      role: "Estudante"
    },
    content: [
      {type: "paragraph", content: "Opa"},
      {type: "paragraph", content: "Estudando react"},
      {type: "link", content: "google.com"}
    ],
    publishedAt: new Date("2024-10-21 09:41")
  }
];

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
        <main>
        </main>
      </div>
    </div>
  )
}

export default App
