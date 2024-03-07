import React from "react"
import logo from "../assets/logo.jpeg"

import "bootstrap/dist/css/bootstrap.min.css"


const styles = {
    height: "80px",
    width: "120px"
}

export default function RootLayout() {
  return (
    <header className="container-fluid custom-background-color-antiquewhite">
        <nav className="navbar">
            <div className="logo d-flex flex-row ms-3">
                <h1 className="fs-1 custom-font-family-teko custom-color-darkpurple">Gym<img src={logo} alt="gym-bro-logo" style={styles} />Bro</h1>
            </div>
        </nav>
    </header>
  )
}
