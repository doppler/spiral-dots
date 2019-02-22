import React from "react";
import "./App.css";

const PHI = (1 + Math.sqrt(5)) / 2;

const App = () => {
  const div = 55;
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  return (
    <div id="App">
      <h1>Spiral Dots</h1>
      <svg width="100%" height="100%">
        <g>
          {Array.from({ length: div }).map((_, o) => {
            let angle = (360 / div) * o + 1;
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
                        stroke: `hsl(${60 - angle / 6}, 100%, 50%)`,
                        fill: `hsl(${60 - angle / 6}, 100%, 25%)`
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
