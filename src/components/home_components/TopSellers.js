import React from 'react';

let style1={
    'fontWeight': 300,
    'lineHeight': 1,
    'letterSpacing': '-.05rem 0',
    'margin': '60px'

}

export function TopSellers(){
    return(
        
        <div className="row featurette" style={style1}>
            <div className="col-md-7">
                <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

            </div>
        </div>
        
    )
}

