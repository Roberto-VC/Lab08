import React, { useState, useEffect } from "react";
require(`/src/Assets/Behind.jpg`);
import './card.css';

export default function Carta({card, seleccion, frente, unactive}) {

    const seleccionar = () =>{
        if (!unactive){
            seleccion(card)
        }
    }

    return(
        <>
        <div className= "card">
            <div className = {frente ? "girada" : ""}>
                <div>
                    <img className = "front" src ={card.image} alt="Behind" id={card.type}></img>
                    <img className = "back" src ="./Assets/Behind.jpg" alt="Behind" onClick={seleccionar}></img>
                </div>
            </div>
        </div>
        </>
    )    
}
