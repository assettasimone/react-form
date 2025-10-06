import { useState } from 'react'
import blogPost from './data/blogPost'


function App() {
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert('form submitted ' + name)
  }


  return (
    <>
      <div className='container mt-4'>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={e => { setName(e.target.value) }} />
          </div>
          <button className='btn btn-primary'>Invia</button>
        </form>
      </div>
      <div className="container">
        <h2 className='my-4'>Lista Articoli</h2>
        <ul className="list-group">
          {blogPost.map(post => (
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
