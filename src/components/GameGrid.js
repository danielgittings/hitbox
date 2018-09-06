import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: auto;
  grid-template-rows: auto;
  width: 100vw;
  height: calc(100vh - 100px);
  max-height: 100vh;
  max-width: 100%;
  margin: auto;
  background-color: #ffffff;
  grid-gap: 1px;

  > div {
    background-color: #eeeeee;
    height: 100%;
    width: 100%;

    &.on {
      background-color: red;
      cursor: pointer;

      &:hover {
        background-color: darkred;
      }
    }
  }
`;

const GameGrid = ({ cells, clicked }) => (
  <Grid>
    {cells.map(cell =>
      <div
        key={`GameGrid-cell-${cell.id}`}
        onClick={() => clicked(cell)}
        className={cell.on ? 'on' : null} />)}
  </Grid>
);

export default GameGrid;
