import React from 'react';
function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <div className='col-lg-8'>
                    <a href="" style={{textDecoration:"none",textColor:"blue"}}><h3 className='fs-5 text-center'>Brokerage calculator</h3></a>
                    <ul className="mt-3 text-muted fs-6" style={{lineHeight:"1.8rem",textAlign:"left"}}>
                        <li>Call & Trade and RMS auto-squareoff:Additional Charges of Rs.50+GST per order.</li>
                        <li>Digital contract notes will be sent via email</li>
                        <li>Physical copies of contract notes,if reequired,shall be charged Rs.20 per contract note.Courier charges apply</li>
                        <li>For NRI account(non PSI),0.5% or Rs.100 per executed order for equity(whichever is lower)</li>
                        <li>If any account is in debit balance,any order placed will be charged Rs.40 per executed order instead of Rs.20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <a href="" style={{textDecoration:"none",textColor:"blue"}}><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;