import React from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from '../image/logo.png';
import { IoMdCart } from "react-icons/io";

const Header = () => {
    return (
        <>

            <div className='header'>
                <Container className='hea d-flex'>
                    <div className='logo'>
                        <img src={i1} />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <input type="button" value='search' className='pad'/>
                        <span><IoMdCart />Cart</span>
                    </div>
                   
                </Container>
            </div>

        </>
    )
}

export default Header
