import React from 'react';

import './MonthGrid.css';

const MonthGrid = ({ monthName }) => {
  return (
    <div className='mg_outer'>

  
    <div className="month-grid">
      <h3>{monthName}</h3>
      <div className="month-row">
        <div className="month-cell" id='jan'>January</div>
        <div className="month-cell" id='feb'>Febuary</div>
        <div className="month-cell" id='mar'>March</div>
        <div className="month-cell" id='apr'>April</div>
      </div>
      <div className="month-row">
        <div className="month-cell" id='may'>May</div>
        <div className="month-cell" id='jun'>June</div>
        <div className="month-cell" id='jul'>July</div>
        <div className="month-cell" id='aug'>August</div>
      </div>
      <div className="month-row">
        <div className="month-cell" id='sep'>September</div>
        <div className="month-cell" id='oct'>October</div>
        <div className="month-cell" id='nov'>November</div>
        <div className="month-cell" id='dec'>Decemeber</div>
      </div>
    </div>

    

    </div>
  );
};

export default MonthGrid;
