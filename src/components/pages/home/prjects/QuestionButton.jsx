import React from 'react';

const LShapePolygon = () => {
  return (
    <svg width="500" height="500">
      <path
        d="
          M 0,0
          L 0,400
          Q 0,450 50,450
          L 100,450
          L 100,500
          L 300,500
          Q 350,500 350,450
          L 350,200
          Q 350,150 300,150
          L 100,150
          Q 50,150 50,100
          L 50,0
          Z
        "
        fill="lightblue"
        stroke="blue"
        strokeWidth="2"
      />
    </svg>
  );
};

const QuestionButton = () => {
  return (
    <div>
      <h1>Полигон в форме буквы "L"</h1>
      <LShapePolygon />
    </div>
  );
};

export default QuestionButton;
