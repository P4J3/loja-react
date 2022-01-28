import React from 'react';



export function Produto(props){
    return(
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Preço: {props.preco}</h3>
            <h3>Estoque: {props.estoque}</h3>
            <h3>Descrição: {props.descricao}</h3>
        </div>
    )
}