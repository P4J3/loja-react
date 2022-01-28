import React from 'react'; 
import produtos from '../../data/data_products'

function ProductCard(props){
    return(
        <div className="col" style={{"textAlign":"center"}}> 
            <div className="card" >           
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6 className="card-title">{props.preco}</h6>
                    <p className="card-text">{props.descricao<30?props.descricao:props.descricao.slice(0,30)}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    )
}


export function ProductCards(){

    /** 
    for (var i in produtos){
        objects.push(<ProductCard name={produtos[i].name} descricao={produtos[i].descricao} preco={produtos[i].preco}/>)
    }
    */
    let objects = produtos.map((produto)=>{
        return <ProductCard name={produto.name} descricao={produto.descricao} preco={produto.preco}/>
    })
    
    return(
        <div className="container" style={{"marginTop": "40px"}}>
            <div className="row">
                {objects}
            </div>
        </div>
    )
}

