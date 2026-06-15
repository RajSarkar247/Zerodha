import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className="row p-5 text-center border-bottom ">
                <h1 className="fs-3 mt-5">Zerodha Products</h1>
                <p className="mt-2 fs-5 text-muted">Sleek, modern, and intuitive trading platforms</p>
                <p className="mt-2 mb-5 text-muted">Check out our <a href="" style={{textDecoration:"none",textColor:"blue"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;