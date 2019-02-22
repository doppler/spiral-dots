import React, { useState, useEffect } from "react";
import "./App.css";

const PHI = (1 + Math.sqrt(5)) / 2;

const App = () => {
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const [circleDivisions, setCircleDivisions] = useState(2);

  useEffect(() => {
    if (circleDivisions < 55) {
      requestAnimationFrame(() => setCircleDivisions(circleDivisions + 1));
    }
  }, [circleDivisions]);

  return (
    <div id="App">
      <svg width="100%" height="100%">
        <g id="sunflower">
          {Array.from({ length: circleDivisions }).map((_, o) => {
            let angle = (360 / circleDivisions) * o + 1;
            let radian = (angle * Math.PI) / 180;
            const radials = 21;
            return (
              <g key={o}>
                {Array.from({ length: radials }).map((_, i) => {
                  return (
                    <circle
                      key={i}
                      cx={
                        center.x +
                        angle *
                          PHI *
                          Math.cos(radian + ((Math.PI * 2) / radials) * i)
                      }
                      cy={
                        center.y +
                        angle *
                          PHI *
                          Math.sin(radian + ((Math.PI * 2) / radials) * i)
                      }
                      r={o / Math.PI}
                      style={{
                        stroke: `hsl(${60 - (30 / radials) * o}, 100%, 99%)`,
                        fill: `hsla(${60 -
                          (30 / radials) * o}, 100%, 50%, 0.75)`
                      }}
                    />
                  );
                })}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default App;
