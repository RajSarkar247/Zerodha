import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <div className="col-lg">
                    <img src='media/homeHero.png' alt="Hero Image" className="mb-5 img-fluid"/>
                    <h1 className="mt-5 mb-3 text-muted">Invest In Everything</h1>
                    <p className="mb-5 fs-4 text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="btn btn-primary px-4 py-2 mb-5" style={{minWidth:"200px", maxWidth: "250px"}}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;