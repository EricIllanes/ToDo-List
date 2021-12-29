import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
import { connect } from "react-redux";

export default function NavBar() {
    return (
        <header className="navbar">
            <div>

                <Link to="/" className="botonnavbar"><button>Home</button></Link>
                <Link to="completetask" className="botonnavbar"><button>Tareas Completadas</button></Link>
                <Link to="deletetask" className="botonnavbar"><button>Tareas Eliminadas</button></Link>

                <div>
                    <h1> TuDu Lizz Taylor</h1>
                </div>
            </div>
        </header>


    )
}