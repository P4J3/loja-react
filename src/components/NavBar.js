import React from "react";
import '../static/css/components.css'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {LoginContext} from '../App.js'

let login_style = {
    'textDecoration': 'none',
    'color': '#ffffff',
}
export function NavBar(props){

    function logar(){
        
        if(props.authenticated === true){
            window.alert('Conectando')
            props.setAuthenticated(false)
        }else{
            window.alert('Desconectando')
            props.setAuthenticated(true)
        }
        
        
    }

    const value = React.useContext(LoginContext)
    console.log(value)
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" >Link</a>
                    </li>
                </ul>

                    <span className="badge bg-secondary" style={{"margin":"10px"}}>
                        <a type="button" bstyle={login_style} onClick={logar}>{props.authenticated?'Conectado':'Desconectado'}</a>
                    </span>
                    
                
                
                <form className="d-flex" onSubmit={logar}>
                    <input className="form-control me-2" type="text" placeholder="Search"/>
                    <button className={props.authenticated?"btn btn-danger":"btn btn-primary"} type="Login" id="login">Search</button>
                </form>

                </div>
            </div>
        </nav>
    )
}