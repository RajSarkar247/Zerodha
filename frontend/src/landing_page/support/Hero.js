import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
      <div className="p-2" id="supportwrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-2 m-5">
        <div className='col-lg-6 p-2'>
            <h1 className="fs-3 mb-4">Search for an answer or browse help topics to create an ticket</h1>
            <input placeholder="Eg:How do i activate F&O,why is my older getting rejected.."/><br/>
            <div className="mt-3">
            <a href="">Track account opening</a><br/>
            <a href="">Track segment activation</a><br/>
            <a href="">Intraday margins</a><br/>
            <a href="">Kite user manual</a><br/>
            <a href="">Learn how to create a ticket</a>
            </div>
        </div>
        <div className='col-lg-6 p-2'>
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href="">Current Takeovers and Delisitng-January2024</a><br/></li>
                <li className="mt-3"><a href="">Latest Intraday Leverages - MIS & Co</a></li>
            </ol>
        </div>
      </div>
    </section>
     );
}

export default Hero;