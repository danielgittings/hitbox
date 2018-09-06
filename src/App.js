import React, { Component } from 'react';
import Title from './states/title/Title';
import Summary from './states/summary/Summary';
import Playing from './states/playing/Playing';

class App extends Component {
  state = {
    grid: [
      { id: 1, on: true },
      { id: 2, on: false },
      { id: 3, on: false },
      { id: 4, on: false },
      { id: 5, on: false },
      { id: 6, on: false },
      { id: 7, on: false },
      { id: 8, on: false },
      { id: 9, on: false },
      { id: 10, on: false },
      { id: 11, on: false },
      { id: 12, on: false },
      { id: 13, on: false },
      { id: 14, on: false },
      { id: 15, on: false },
      { id: 16, on: false },
      { id: 17, on: false },
      { id: 18, on: false },
      { id: 19, on: false },
      { id: 20, on: false },
      { id: 21, on: false },
      { id: 22, on: false },
      { id: 23, on: false },
      { id: 24, on: false },
      { id: 25, on: false },
      { id: 26, on: false },
      { id: 27, on: false },
      { id: 28, on: false },
      { id: 29, on: false },
      { id: 30, on: false },
      { id: 31, on: false },
      { id: 32, on: false },
      { id: 33, on: false },
      { id: 34, on: false },
      { id: 35, on: false },
      { id: 36, on: false },
      { id: 37, on: false },
      { id: 38, on: false },
      { id: 39, on: false },
      { id: 40, on: false },
      { id: 41, on: false },
      { id: 42, on: false },
      { id: 43, on: false },
      { id: 44, on: false },
      { id: 45, on: false },
      { id: 46, on: false },
      { id: 47, on: false },
      { id: 48, on: false },
      { id: 49, on: false },
      { id: 50, on: false },
      { id: 51, on: false },
      { id: 52, on: false },
      { id: 53, on: false },
      { id: 54, on: false },
      { id: 55, on: false },
      { id: 56, on: false },
      { id: 57, on: false },
      { id: 58, on: false },
      { id: 59, on: false },
      { id: 60, on: false },
      { id: 61, on: false },
      { id: 62, on: false },
      { id: 63, on: false },
      { id: 64, on: false },
      { id: 65, on: false },
      { id: 66, on: false },
      { id: 67, on: false },
      { id: 68, on: false },
      { id: 69, on: false },
      { id: 70, on: false },
      { id: 71, on: false },
      { id: 72, on: false },
      { id: 73, on: false },
      { id: 74, on: false },
      { id: 75, on: false },
      { id: 76, on: false },
      { id: 77, on: false },
      { id: 78, on: false },
      { id: 79, on: false },
      { id: 80, on: false },
      { id: 81, on: false },
      { id: 82, on: false },
      { id: 83, on: false },
      { id: 84, on: false },
      { id: 85, on: false },
      { id: 86, on: false },
      { id: 87, on: false },
      { id: 88, on: false },
      { id: 89, on: false },
      { id: 90, on: false },
      { id: 91, on: false },
      { id: 92, on: false },
      { id: 93, on: false },
      { id: 94, on: false },
      { id: 95, on: false },
      { id: 96, on: false },
      { id: 97, on: false },
      { id: 98, on: false },
      { id: 99, on: false },
      { id: 100, on: false },
      { id: 101, on: false },
      { id: 102, on: false },
      { id: 103, on: false },
      { id: 104, on: false },
      { id: 105, on: false },
      { id: 106, on: false },
      { id: 107, on: false },
      { id: 108, on: false },
      { id: 109, on: false },
      { id: 110, on: false },
      { id: 111, on: false },
      { id: 112, on: false },
      { id: 113, on: false },
      { id: 114, on: false },
      { id: 115, on: false },
      { id: 116, on: false },
      { id: 117, on: false },
      { id: 118, on: false },
      { id: 119, on: false },
      { id: 120, on: false },
      { id: 121, on: false },
      { id: 122, on: false },
      { id: 123, on: false },
      { id: 124, on: false },
      { id: 125, on: false },
      { id: 126, on: false },
      { id: 127, on: false },
      { id: 128, on: false },
      { id: 129, on: false },
      { id: 130, on: false },
      { id: 131, on: false },
      { id: 132, on: false },
      { id: 133, on: false },
      { id: 134, on: false },
      { id: 135, on: false },
      { id: 136, on: false },
      { id: 137, on: false },
      { id: 138, on: false },
      { id: 139, on: false },
      { id: 140, on: false },
      { id: 141, on: false },
      { id: 142, on: false },
      { id: 143, on: false },
      { id: 144, on: false },
      { id: 145, on: false },
      { id: 146, on: false },
      { id: 147, on: false },
      { id: 148, on: false },
      { id: 149, on: false },
      { id: 150, on: false },
      { id: 151, on: false },
      { id: 152, on: false },
      { id: 153, on: false },
      { id: 154, on: false },
      { id: 155, on: false },
      { id: 156, on: false },
      { id: 157, on: false },
      { id: 158, on: false },
      { id: 159, on: false },
      { id: 160, on: false },
      { id: 161, on: false },
      { id: 162, on: false },
      { id: 163, on: false },
      { id: 164, on: false },
      { id: 165, on: false },
      { id: 166, on: false },
      { id: 167, on: false },
      { id: 168, on: false },
      { id: 169, on: false },
      { id: 170, on: false },
      { id: 171, on: false },
      { id: 172, on: false },
      { id: 173, on: false },
      { id: 174, on: false },
      { id: 175, on: false },
      { id: 176, on: false },
      { id: 177, on: false },
      { id: 178, on: false },
      { id: 179, on: false },
      { id: 180, on: false },
      { id: 181, on: false },
      { id: 182, on: false },
      { id: 183, on: false },
      { id: 184, on: false },
      { id: 185, on: false },
      { id: 186, on: false },
      { id: 187, on: false },
      { id: 188, on: false },
      { id: 189, on: false },
      { id: 190, on: false },
      { id: 191, on: false },
      { id: 192, on: false },
      { id: 193, on: false },
      { id: 194, on: false },
      { id: 195, on: false },
      { id: 196, on: false },
      { id: 197, on: false },
      { id: 198, on: false },
      { id: 199, on: false },
      { id: 200, on: false },
    ],
    points: 0,
    secondsLeft: 3,
    playing: false,
    unplayed: true,
    gameComplete: false,
    scoreVisible: true,
    interval: null,
    previousScores: []
  }

  componentDidMount = () => {
    // Get scores from localstorage and set into previous
    const scores = JSON.parse(localStorage.getItem('previousScores'));

    if (scores) {
      this.setState({
        previousScores: [ ...scores ]
      });
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  }

  clicked = (cell) => {
    if (this.state.playing && cell.on) {
      this.addPoint();
    }
  }

  addPoint = () => {
    this.setState(prevState => ({
      points: prevState.points + 1
    }), this.newCell());
  }

  newCell = () => {
    this.setState(prevState => ({
      ...prevState,
      grid: prevState.grid.map(cell =>
        cell.on ? { ...cell, on: false }: cell
      )
    }), this.setNextCell);
  }

  setNextCell = () => {
    const random = this.randomNumber();
    const newGrid = this.state.grid;
    newGrid[random] = { ...newGrid[random], on: true };

    this.setState({
      grid: newGrid
    });
  }

  randomNumber = () => {
    return Math.floor(Math.random() * (this.state.grid.length - 1)) + 0;
  }

  startGame = () => {
    this.setState({
      playing: true,
      gameComplete: false,
      secondsLeft: 3,
      points: 0
    });
    this.startTimer();
  }

  startTimer = () => {
    const interval = setInterval(this.decrementSeconds, 1000);
    this.setState({
      interval
    });
  }

  decrementSeconds = () => {
    if (this.state.secondsLeft > 0) {
      this.setState(prevState => ({
        secondsLeft: prevState.secondsLeft - 1
      }));
    } else {
      clearInterval(this.state.interval);
      this.setState(prevState => ({
        playing: false,
        unplayed: false,
        gameComplete: true,
        previousScores: [ ...prevState.previousScores, { timestamp: Date.now(), score: this.state.points } ]
      }), this.saveScore);
    }
  }

  saveScore = () => {
    localStorage.setItem('previousScores', JSON.stringify(this.state.previousScores));
  }

  render() {
    return (
      <div className="App">
        { !this.state.playing && this.state.unplayed ?
          <React.Fragment>
            <Title startGame={this.startGame} />
          </React.Fragment> : ''
        }

        { !this.state.playing && !this.state.unplayed ?
          <React.Fragment>
            <Summary
              startGame={this.startGame}
              previousScores={this.state.previousScores}
              points={this.state.points} />
          </React.Fragment> : ''
        }

        { this.state.playing &&
          <React.Fragment>
            <Playing
              secondsLeft={this.state.secondsLeft}
              cells={this.state.grid}
              clicked={this.clicked} />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
