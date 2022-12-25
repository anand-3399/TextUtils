import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/TextUtils">{props.title}</Link >
                {/* <a  className="navbar-brand" href="#">{props.title}</a > */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link  className="nav-link " aria-current="page" to="/TextUtils">Home</Link>
                            {/* <a  className="nav-link " aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <Link  className="nav-link" to="/TextUtils/about">{props.aboutText}</Link >
                        </li>

                    </ul>
                    
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //Here isRequired is used when we have to send the prop *
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: 'Title Here',
//     aboutText: 'About Here'
// };