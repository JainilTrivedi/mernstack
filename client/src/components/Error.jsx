import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
        <div className="notfound"><p > Page Not found </p></div>
        <p className='center'><Link to="/">Return Home</Link> </p>
        
    </>
  )
}

export default Error
