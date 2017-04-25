import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let winLine = []
// individual cell render with click
const GameCell = (props) =>

    <button
    className="gameCell"
    onClick={() => props.onClick()}
    >
      {props.value}
  </button>
  

// for coloring winnig line


// all game grid + logic
class Grid extends React.Component {
constructor() {
  super()
    this.state = {
      allCells: Array().fill(null),
      nextPlayerState: true,
    }
  }
  
  handleClick(i) {
    const allCells = this.state.allCells.slice()
    
    if (calculateWinner(allCells) || allCells[i])
       return
    
    allCells[i] = this.state.nextPlayerState ? 'X' : 'O'
    this.setState({
      allCells: allCells,
      nextPlayerState: !this.state.nextPlayerState,    
    })
  } 
 
   drawCell(i) {
    return <GameCell
             value={this.state.allCells[i]} 
             onClick={() => this.handleClick(i)}
             />
  }
  
render() {
  return (
    <div>
      <div className="board-row">
          {this.drawCell(0)}
          {this.drawCell(1)}
          {this.drawCell(2)}
        </div>
        <div className="board-row">
          {this.drawCell(3)}
          {this.drawCell(4)}
          {this.drawCell(5)}
        </div>
        <div className="board-row">
          {this.drawCell(6)}
          {this.drawCell(7)}
          {this.drawCell(8)}
        </div>
    </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="main-grid">
        <Grid />
      </div>
    )
  }
}

function calculateWinner(allCells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (allCells[a]&&allCells[a] === allCells[b]&&allCells[a] === allCells[c]) {
      winLine = lines[i];
      console.log(winLine.length)
      return allCells[a]
    }
  }
  return null;
}

export default App;
