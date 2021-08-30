import React from 'react'
// import { Link } from 'react-router-dom'

export default function Notfound(props) {
    return (
        <div style={{border: '1px solid grey', padding: '3rem 2rem', borderRadius: '5px', width: '35rem', margin: '10rem auto', maxWidth: '80%'}} >
            <h1 style={{textAlign: 'center'}} className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}> Oops! This page not exist  </h1>
            {/* <Link to='/' style={{fontSize: '1.8rem', display: 'block', textAlign: 'center', marginTop: '1rem'}}>Let's go Home</Link> */}
        </div>
    )
}
