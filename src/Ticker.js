import React from 'react';
import {TransitionMotion, spring} from 'react-motion';

// Adapted from https://github.com/carlosrocha/react-ticker

export default function Ticker({text}) {
  return (
    <TransitionMotion
      willEnter={() => ({
        opacity: 0,
        y: 15,
      })}
      willLeave={() => ({
        opacity: spring(0),
        y: spring(-15),
      })}
      styles={[{
        key: text,
        data: text,
        style: {
          opacity: spring(1),
          y: spring(0),
        },
      }]}>
      {(configs) =>
        <div className="container">
          {configs.map((config) =>
            <div className="item"
              key={config.key}
              style={{
                opacity: config.style.opacity,
                transform: `translateY(${config.style.y}px)`,
              }}>
              {config.data}
            </div>
          )}
        </div>
      }
    </TransitionMotion>
  );

}
