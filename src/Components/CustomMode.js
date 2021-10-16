import React from 'react'

export default function CustomMode(props) {
    return (
  
      props.mode==="dark" &&
          <div className="customMode">
            <div className="heading">
            <h3>Custom Dark Mode</h3>
            </div>
            <div className="customColors">
            <svg width="100" height="100">
              <a href="">
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="black"
                strokeWidth="2"
                fill="#1a4331"
              />
              </a>
            </svg>
            <svg width="100" height="100">
              <a href="">
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="black"
                strokeWidth="2"
                fill="#022765"
              />
              </a>
            </svg>
            <svg width="100" height="100">
              <a href="">
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="black"
                strokeWidth="2"
                fill="#230d36"
              />
              </a>
            </svg>
            <svg width="100" height="100">
              <a href="">
              <circle
                cx="50"
                cy="50"
                r="10"
                stroke="black"
                strokeWidth="2"
                fill="#000000"
              />
              </a>
            </svg>
            </div>   
          </div>
    );
}
