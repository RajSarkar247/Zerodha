import React from 'react';
function NotFound() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <div className="col-lg">
                    <h2 className="mt-5 mb-4 fs-4 text-muted">404 Not Found</h2>
                    <p className="text-muted mb-4 fs-6">Sorry this page does not exists.</p>
                </div>
            </div>
        </div>
     );
}

export default NotFound;