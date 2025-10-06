import { useState } from 'react'
import blogPost from './data/blogPost'


function App() {
  const [newPostTitle, setNewPostTitle] = useState('')
  const [posts, setPosts] = useState(blogPost)



  const handleSubmit = e => {
    e.preventDefault()

    const newPost = {
      id: 1,
      title: newPostTitle,
      metaDescription: '',
      author: '',
      Tag: []
    }

    if (newPostTitle.length >= 5) {


      setPosts([...posts, newPost])
      setNewPostTitle('')
    }
    else {
      alert('Il titolo deve essere almeno 5 caratteri')
    }

  }


  return (
    <>
      <div className='container mt-4'>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">New Post Title</span>
            <input type="text" className="form-control" placeholder="Insert a new post title here" aria-label="Username" aria-describedby="basic-addon1" value={newPostTitle} onChange={e => { setNewPostTitle(e.target.value) }} />
          </div>
          <button className='btn btn-primary'>Invia</button>
        </form>
      </div>
      <div className="container">
        <h2 className='my-4'>Lista Articoli</h2>
        <ul className="list-group">
          {posts.map(post => (
            <li className="list-group-item">
              {post.title}
            </li>
          ))}


        </ul>
      </div>
    </>
  )
}

export default App
