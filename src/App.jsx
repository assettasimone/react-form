import { useState } from 'react'


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
          <button>Invia</button>
        </form>
        <p >{name}</p>
      </div>
    </>
  )
}

export default App
