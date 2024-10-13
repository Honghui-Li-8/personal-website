import React, { useState } from "react";

// expand only on shape
// const PolygonComponent = ({ points, color, onClick }) => {
//   const [hovered, setHovered] = useState(false);

//   // Handle hover state
//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = () => setHovered(false);

//   // Scaling the polygon on hover
//   const scale = hovered ? 1.2 : 1; // Expand by 10% on hover

//   return (
//     <svg width="200" height="200" style={{ pointerEvents: 'none' }}>
//       <polygon
//         points={points}
//         fill={color}
//         stroke="black"
//         strokeWidth="2"
//         transform={`scale(${scale})`}
//         style={{
//           pointerEvents: 'all', // Ensure the polygon handles pointer events
//           transition: 'transform 0.2s ease', // Smooth scaling transition
//           transformOrigin: 'center',
//         }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={onClick}
//       />
//     </svg>
//   );
// };

const Home = () => {
  const handleClick = (polygonName) => {
    alert(`You clicked on ${polygonName}`);
  };

  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <PolygonComponent
          points="50,15 100,100 0,100"
          color="#FF6666"
          polygonName="Polygon 1"
          onClick={() => handleClick("Polygon 1")}
        />
        <PolygonComponent
          points="100,10 120,110 40,130 10,60"
          color="#66FF66"
          polygonName="Polygon 2"
          onClick={() => handleClick("Polygon 2")}
        />
        <PolygonComponent
          points="60,20 140,150 30,150"
          color="#6666FF"
          polygonName="Polygon 3"
          onClick={() => handleClick("Polygon 3")}
        />
        <PolygonComponent
          points="70,50 90,90 30,120"
          color="#FF9966"
          polygonName="Polygon 4"
          onClick={() => handleClick("Polygon 4")}
        />
        <PolygonComponent
          points="20,10 110,110 50,170"
          color="#66FFFF"
          polygonName="Polygon 5"
          onClick={() => handleClick("Polygon 5")}
        />
        <PolygonComponent
          points="30,30 130,140 20,130"
          color="#FFFF66"
          polygonName="Polygon 6"
          onClick={() => handleClick("Polygon 6")}
        />
        <PolygonComponent
          points="40,40 100,140 10,140"
          color="#9966FF"
          polygonName="Polygon 7"
          onClick={() => handleClick("Polygon 7")}
        />
      </div>
    </div>
  );
};

export default Home;

// text expand
const PolygonComponent = ({ points, color, polygonName, onClick }) => {
  const [hovered, setHovered] = useState(false);

  // Handle hover state for the entire SVG (polygon + text)
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  // Scaling the text on hover
  const textScale = hovered ? 1 : 0.8; // Expand the text by 30% on hover

  return (
    <svg
      width="200"
      height="200"
      style={{ pointerEvents: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* The polygon shape */}
      <polygon
        points={points}
        fill={color}
        stroke="black"
        strokeWidth="2"
        style={{
          pointerEvents: "all", // Ensure only the polygon handles pointer events
        }}
        onClick={onClick}
      />

      {/* The polygon name text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="black"
        fontSize="20"
        fontWeight="bold"
        transform={`scale(${textScale})`}
        style={{
          pointerEvents: "none", // Make sure the text doesn't interfere with polygon events
          transition: "transform 0.2s ease", // Smooth scaling for text
        }}
      >
        {polygonName}
      </text>
    </svg>
  );
};
