import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    
    <div id="Carousel2" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
    <div className="carousel-inner rounded">
        <div className="carousel-item active">
            <img className="d-block w-100 resize" src="https://5.imimg.com/data5/FX/NR/BJ/SELLER-95206069/aeps-software-500x500.png" alt="First slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://5.imimg.com/data5/RX/ZM/IQ/SELLER-104260804/aeps-csp-500x500.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://www.litepe.in/img/intro-img.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://dmifinance.in/images/blogs/blog-img-20210505.jpg" alt="Third slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://www.pinelabs.com/img/blog/upi-banner.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://www.pinelabs.com/img/plutus-smart/plutussmart-banner.png" alt="Third slide"/>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100 resize" src="https://assets.mspimages.in/wp-content/uploads/2022/09/UPI-Lite-5.jpg" alt="Third slide"/>
        </div>
    </div>
    {/* <NavLink className="carousel-control-prev" href="#Carousel2" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </NavLink>
    <NavLink className="carousel-control-next" href="#Carousel2" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </NavLink> */}
</div>
 
  )
}

export default Home