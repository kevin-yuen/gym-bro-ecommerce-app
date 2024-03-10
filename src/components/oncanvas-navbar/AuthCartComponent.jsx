import React from "react"
import { CartFill, BoxArrowInRight } from "react-bootstrap-icons"

export default function AuthCartComponent() {
    return (
        <div className="auth-cart me-5">
            <CartFill className="me-2" size={25} color="#3E0957"/>
            <BoxArrowInRight className="authcart-icon" size={25} color="#3E0957"/>
        </div>
    )
}