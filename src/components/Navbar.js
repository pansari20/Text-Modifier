import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#" style={{fontSize: '1.5rem'}}>{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item mx-2"> */}
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        {/* </li> */}
                        <li className="nav-item mx-2">
                            {/* <Link className="nav-link" to="/About">{props.aboutText}</Link> */}
                            <a className="nav-link mx-5" style={{fontSize: '1.2rem'}} href="#">{props.aboutText}</a>
                        </li>
                    </ul>
                <div className="form-check form-switch mx-3">
                    <label className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Dark Mode</label>
                    <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}