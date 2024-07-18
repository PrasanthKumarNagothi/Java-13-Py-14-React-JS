import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/counter'>Counter</Link> <br />
      <Link to='https://www.google.com/'>Google</Link> <br />
    </div>
  )
}

export default Home