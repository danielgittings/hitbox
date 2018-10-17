import React, { Component } from 'react';
import styled from 'styled-components';
import tone from '../audio/tone.mp3';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: auto;
  grid-template-rows: auto;
  height: calc(100vh - 160px);
  max-height: 100vh;
  max-width: 1000px;
  background-color: #ffffff;
  grid-gap: 10px;
  margin: 0 auto;
  padding: 0 30px 30px;

  > div {
    background-color: #eeeeee;
    height: 100%;
    width: 100%;
    border-radius: 5px;

    &.on {
      background-color: #91baf9;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        background-color: #5f9efe;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

class GameGrid extends Component {
  state = {
    grid: [
      { id: 1, on: false },
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
      // { id: 101, on: false },
      // { id: 102, on: false },
      // { id: 103, on: false },
      // { id: 104, on: false },
      // { id: 105, on: false },
      // { id: 106, on: false },
      // { id: 107, on: false },
      // { id: 108, on: false },
      // { id: 109, on: false },
      // { id: 110, on: false },
      // { id: 111, on: false },
      // { id: 112, on: false },
      // { id: 113, on: false },
      // { id: 114, on: false },
      // { id: 115, on: false },
      // { id: 116, on: false },
      // { id: 117, on: false },
      // { id: 118, on: false },
      // { id: 119, on: false },
      // { id: 120, on: false },
      // { id: 121, on: false },
      // { id: 122, on: false },
      // { id: 123, on: false },
      // { id: 124, on: false },
      // { id: 125, on: false },
      // { id: 126, on: false },
      // { id: 127, on: false },
      // { id: 128, on: false },
      // { id: 129, on: false },
      // { id: 130, on: false },
      // { id: 131, on: false },
      // { id: 132, on: false },
      // { id: 133, on: false },
      // { id: 134, on: false },
      // { id: 135, on: false },
      // { id: 136, on: false },
      // { id: 137, on: false },
      // { id: 138, on: false },
      // { id: 139, on: false },
      // { id: 140, on: false },
      // { id: 141, on: false },
      // { id: 142, on: false },
      // { id: 143, on: false },
      // { id: 144, on: false },
      // { id: 145, on: false },
      // { id: 146, on: false },
      // { id: 147, on: false },
      // { id: 148, on: false },
      // { id: 149, on: false },
      // { id: 150, on: false },
    ],
    audio: new Audio(tone),
  };

  clicked = cell => {
    const { audio } = this.state;

    if (cell.on) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      this.props.addPoint();
      this.newCell();
    }
  };

  newCell = () => {
    this.setState(
      prevState => ({
        ...prevState,
        grid: prevState.grid.map(
          cell => (cell.on ? { ...cell, on: false } : cell),
        ),
      }),
      this.setNextCell,
    );
  };

  setNextCell = () => {
    const random = this.randomNumber();
    const newGrid = this.state.grid;
    newGrid[random] = { ...newGrid[random], on: true };

    this.setState({
      grid: newGrid,
    });
  };

  randomNumber = () => {
    return Math.floor(Math.random() * (this.state.grid.length - 1)) + 0;
  };

  componentDidMount() {
    this.setNextCell();
  }

  render() {
    return (
      <Grid>
        {this.state.grid.map(cell => (
          <div
            key={`GameGrid-cell-${cell.id}`}
            onClick={() => this.clicked(cell)}
            className={cell.on ? 'on' : null}
          />
        ))}
      </Grid>
    );
  }
}

export default GameGrid;
