import React from "react";

class Board extends React.Component{
    createSquare(){
        return <Square/>
    }

    render(){
        const turn = "Next_Player:"

        return <>
        <div className = "turn">{turn}</div>

        <div className = "row">
            {this.createSquare()}
            {this.createSquare()}
            {this.createSquare()}
        </div>

        <div className = "row">
            {this.createSquare()}
            {this.createSquare()}
            {this.createSquare()}
        </div>

        <div className = "row">
            {this.createSquare()}
            {this.createSquare()}
            {this.createSquare()}
        </div>

        </>
    }
}

class Square extends React.Component{
    render(){
        return <button className ="squareBtn"></button>
    }
}

export default Board;