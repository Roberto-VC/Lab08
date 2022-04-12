import React, { useState, useEffect } from "react";
import Carta from "./carta";
import './shuffle.css';
require(`/src/Assets/Logo.png`)

let images = [
    {
      type: "Usagi1",
      load: require(`/src/Assets/Usagi1.jpg`),
      image: `./Assets/Usagi1.jpg`,
      pareja: false
    },
    {
      type: "Ami1",
      load: require(`/src/Assets/Ami1.jpg`),
      image: `./Assets/Ami1.jpg`,
      pareja: false
    },
    {
      type: "Rei1",
      load: require(`/src/Assets/Rei1.jpg`),
      image: `./Assets/Rei1.jpg`,
      pareja: false
    },
    {
      type: "Makoto1",
      load: require(`/src/Assets/Makoto1.jpg`),
      image: `./Assets/Makoto1.jpg`,
      pareja: false
    },
    {
      type: "Minako1",
      load: require(`/src/Assets/Minako1.jpg`),
      image: `./Assets/Minako1.jpg`,
      pareja: false
    },
    {
      type: "Usagi2",
      load: require(`/src/Assets/Usagi2.jpg`),
      image: `./Assets/Usagi2.jpg`,
      pareja: false
    },
    {
      type: "Ami2",
      load: require(`/src/Assets/Ami2.jpg`),
      image: `./Assets/Ami2.jpg`,
      pareja: false
    },
    {
      type: "Rei2",
      load: require(`/src/Assets/Rei2.jpg`),
      image: `./Assets/Rei2.jpg`,
      pareja: false
    },
    {
      type: "Makoto2",
      load: require(`/src/Assets/Makoto2.jpg`),
      image: `./Assets/Makoto2.jpg`,
      pareja: false
    },
    {
      type: "Minako2",
      load: require(`/src/Assets/Minako2.jpg`),
      image: `./Assets/Minako2.jpg`,
      pareja: false
    },
    {
      type: "Usagi3",
      load: require(`/src/Assets/Usagi3.jpg`),
      image: `./Assets/Usagi3.jpg`,
      pareja: false
    },
    {
      type: "Ami3",
      load: require(`/src/Assets/Ami3.jpg`),
      image: `./Assets/Ami3.jpg`,
      pareja: false
    },
    {
      type: "Rei3",
      load: require(`/src/Assets/Rei3.jpg`),
      image: `./Assets/Rei3.jpg`,
      pareja: false
    },
    {
      type: "Makoto3",
      load: require(`/src/Assets/Makoto3.jpg`),
      image: `./Assets/Makoto3.jpg`,
      pareja: false
    },
    {
      type: "Minako3",
      load: require(`/src/Assets/Minako3.jpg`),
      image: `./Assets/Minako3.jpg`,
      pareja: false
    }
    
  ];

export default function Shuffle(){

    const [cards, setCards] = useState([])
    const [Primero, setPrimero] = useState(null)
    const [Segundo, setSegundo] = useState(null)
    const [Desactivado, setDesactivado] = useState(false)
    const [Turnos, setTurnos] = useState(0)
    const [visible, setVisible] =useState('hidden')

    const seleccion = (carta) =>{
      if (Primero == null){
        setPrimero(carta)
      }else{
        setSegundo(carta)
      }
    }

    
    useEffect(() =>{
      if(Primero != null && Segundo != null){
        setDesactivado(true)
        if(Primero.type === Segundo.type){
          setCards(previas =>{
            return previas.map(card =>{
              if (card.type === Primero.type){
                return {...card, pareja: true}
              }else{
                return card
              }
            })
          }
          )
        }else{
          console.log(":(")
        }
        setTimeout(() => resetear(), 1250)
      }

    },[Primero, Segundo]) 
    const ShuffleCards = () => {
        const shuffled = [...images, ...images]
            .sort(() => Math.random()-.5)
            .map((card) => ({...card, id: Math.random()}))

        setCards(shuffled)
        setTurnos(0)
        setVisible('hidden')
        
    }

    const ShuffleCards1 = () => {
      images = [{
        type: "Usagi1",
        load: require(`/src/Assets/Usagi1.jpg`),
        image: `./Assets/Usagi1.jpg`,
        pareja: false
      },
      {
        type: "Ami1",
        load: require(`/src/Assets/Ami1.jpg`),
        image: `./Assets/Ami1.jpg`,
        pareja: false
      },
      {
        type: "Rei1",
        load: require(`/src/Assets/Rei1.jpg`),
        image: `./Assets/Rei1.jpg`,
        pareja: false
      },
      {
        type: "Makoto1",
        load: require(`/src/Assets/Makoto1.jpg`),
        image: `./Assets/Makoto1.jpg`,
        pareja: false
      },
      {
        type: "Minako1",
        load: require(`/src/Assets/Minako1.jpg`),
        image: `./Assets/Minako1.jpg`,
        pareja: false
      }]
      ShuffleCards()
    }

    const ShuffleCards2 = () => {
      images = [{
        type: "Usagi1",
        load: require(`/src/Assets/Usagi1.jpg`),
        image: `./Assets/Usagi1.jpg`,
        pareja: false
      },
      {
        type: "Ami1",
        load: require(`/src/Assets/Ami1.jpg`),
        image: `./Assets/Ami1.jpg`,
        pareja: false
      },
      {
        type: "Rei1",
        load: require(`/src/Assets/Rei1.jpg`),
        image: `./Assets/Rei1.jpg`,
        pareja: false
      },
      {
        type: "Makoto1",
        load: require(`/src/Assets/Makoto1.jpg`),
        image: `./Assets/Makoto1.jpg`,
        pareja: false
      },
      {
        type: "Minako1",
        load: require(`/src/Assets/Minako1.jpg`),
        image: `./Assets/Minako1.jpg`,
        pareja: false
      },
      {
        type: "Usagi2",
        load: require(`/src/Assets/Usagi2.jpg`),
        image: `./Assets/Usagi2.jpg`,
        pareja: false
      },
      {
        type: "Ami2",
        load: require(`/src/Assets/Ami2.jpg`),
        image: `./Assets/Ami2.jpg`,
        pareja: false
      },
      {
        type: "Rei2",
        load: require(`/src/Assets/Rei2.jpg`),
        image: `./Assets/Rei2.jpg`,
        pareja: false
      },
      {
        type: "Makoto2",
        load: require(`/src/Assets/Makoto2.jpg`),
        image: `./Assets/Makoto2.jpg`,
        pareja: false
      },
      {
        type: "Minako2",
        load: require(`/src/Assets/Minako2.jpg`),
        image: `./Assets/Minako2.jpg`,
        pareja: false
      }]
      ShuffleCards()
    }

    const ShuffleCards3 = () => {
      images = [{
        type: "Usagi1",
        load: require(`/src/Assets/Usagi1.jpg`),
        image: `./Assets/Usagi1.jpg`,
        pareja: false
      },
      {
        type: "Ami1",
        load: require(`/src/Assets/Ami1.jpg`),
        image: `./Assets/Ami1.jpg`,
        pareja: false
      },
      {
        type: "Rei1",
        load: require(`/src/Assets/Rei1.jpg`),
        image: `./Assets/Rei1.jpg`,
        pareja: false
      },
      {
        type: "Makoto1",
        load: require(`/src/Assets/Makoto1.jpg`),
        image: `./Assets/Makoto1.jpg`,
        pareja: false
      },
      {
        type: "Minako1",
        load: require(`/src/Assets/Minako1.jpg`),
        image: `./Assets/Minako1.jpg`,
        pareja: false
      },
      {
        type: "Usagi2",
        load: require(`/src/Assets/Usagi2.jpg`),
        image: `./Assets/Usagi2.jpg`,
        pareja: false
      },
      {
        type: "Ami2",
        load: require(`/src/Assets/Ami2.jpg`),
        image: `./Assets/Ami2.jpg`,
        pareja: false
      },
      {
        type: "Rei2",
        load: require(`/src/Assets/Rei2.jpg`),
        image: `./Assets/Rei2.jpg`,
        pareja: false
      },
      {
        type: "Makoto2",
        load: require(`/src/Assets/Makoto2.jpg`),
        image: `./Assets/Makoto2.jpg`,
        pareja: false
      },
      {
        type: "Minako2",
        load: require(`/src/Assets/Minako2.jpg`),
        image: `./Assets/Minako2.jpg`,
        pareja: false
      },
      {
        type: "Usagi3",
        load: require(`/src/Assets/Usagi3.jpg`),
        image: `./Assets/Usagi3.jpg`,
        pareja: false
      },
      {
        type: "Ami3",
        load: require(`/src/Assets/Ami3.jpg`),
        image: `./Assets/Ami3.jpg`,
        pareja: false
      },
      {
        type: "Rei3",
        load: require(`/src/Assets/Rei3.jpg`),
        image: `./Assets/Rei3.jpg`,
        pareja: false
      },
      {
        type: "Makoto3",
        load: require(`/src/Assets/Makoto3.jpg`),
        image: `./Assets/Makoto3.jpg`,
        pareja: false
      },
      {
        type: "Minako3",
        load: require(`/src/Assets/Minako3.jpg`),
        image: `./Assets/Minako3.jpg`,
        pareja: false
      }]
      ShuffleCards()
    }

    const resetear = () => {
      setPrimero(null)
      setSegundo(null)
      setDesactivado(false)
      setTurnos(Turnos+1) 
    }

    useEffect(() =>{
      setTimeout(() => {
        let result = cards.map(a => a.pareja);
      if (result.every(element => element === true) === true && result.length != 0){
        alert("¡¡¡Ganaste!!! Intenta de nuevo o otra dificultad, o intenta mejorar y record")
        setVisible('visible')
       
      }
      }, 1200);
      
    }, [cards])

    useEffect(() => {
      ShuffleCards2()
    }, [])
    
    return(
        <>
        <div className= "card">
            <img className = "behind" src ="./Assets/Logo.png" alt="Logo" height="100"></img>
            <div>
              <p>¡Juega esta juego de memoria y consigue las parejas en la menor cantidad de turns posibles!<br/>
              ¡Elije tu dificultad y empieza a jugar! Esta en normal por defecto</p>
                <button className = 'boton' onClick = {ShuffleCards1} id='Facil'>Facil</button>
                <button className = 'boton' onClick = {ShuffleCards2} id='Normal'>Normal</button>
                <button className = 'boton' onClick = {ShuffleCards3} id='Dificil'>Dificil</button>
                <h3 className = "Turnos">Turnos: {Turnos}</h3>
            </div>
            <div className = "card-grid">
                {cards.map(card => (
                    <Carta key={card.id} card ={card} seleccion ={seleccion} frente={card === Primero || card === Segundo || card.pareja} unactive={Desactivado}/>
                ))}
            </div>
            <div className = "Ganar" style={{visibility: visible}}>
              <p>¡¡¡Ganaste!!! Intenta de nuevo o otra dificultad, o intenta mejorar y record</p><br/>
            </div>
        </div>
        </>
    )    
}
    
