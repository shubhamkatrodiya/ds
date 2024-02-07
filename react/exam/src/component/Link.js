import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Home from './Home';
// import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <div>
            <Home />

            <OwlCarousel className='owl-theme' loop margin={10} nav>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
                <div class='item'>
                    <h4>7</h4>
                </div>
                <div class='item'>
                    <h4>8</h4>
                </div>
                <div class='item'>
                    <h4>9</h4>
                </div>
                <div class='item'>
                    <h4>10</h4>
                </div>
                <div class='item'>
                    <h4>11</h4>
                </div>
                <div class='item'>
                    <h4>12</h4>
                </div>
            </OwlCarousel>;


            {/* <Link to="/8">home</Link> */}
        </div>
    )
}

export default Slider
