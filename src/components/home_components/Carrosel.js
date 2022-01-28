import React from 'react';
import image1 from '../../static/imgs/pexels-thiago-calamita-6398821.jpg';
import image2 from '../../static/imgs/pexels-thiago-calamita-7422083.jpg';
import image3 from  '../../static/imgs/pexels-унайзат-юшаева-10051509.jpg';

export function Carrosel(){
    return(
        //Carrousel
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            {/** Indicators/dots  */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            {/** The slideshow/carousel */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption" style={{'marginBottom':'200px'}}>
                        <h1>Olá</h1>
                        <p>Seja bem-vindo ao meu site</p>
                    </div>
                    <img src={image1} alt="Los Angeles" className="d-block w-100"  height="550"/>
                </div>
                <div className="carousel-item">
                    <img src={image2} alt="Chicago" className="d-block w-100"  height="550"/>
                </div>
                <div className="carousel-item">
                    <img src={image3} alt="New York" className="d-block w-100"  height="550"/>
                </div>
            </div>

            {/**Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>        

            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}
