import React, { useState } from "react";

// const PolygonSection = ({ points, color, polygonName, onClick }) => {
//   const [hovered, setHovered] = useState(false);

//   // Handle hover state for the entire SVG (polygon + text)
//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = () => setHovered(false);

//   // Scaling the text on hover
//   const textScale = hovered ? 1 : 0.8; // Expand the text by 30% on hover

//   return (
//     <svg
//       width="200"
//       height="200"
//       style={{ pointerEvents: "none" }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* The polygon shape */}
//       <polygon
//         points={points}
//         fill={color}
//         stroke="black"
//         strokeWidth="2"
//         style={{
//           pointerEvents: "all", // Ensure only the polygon handles pointer events
//         }}
//         onClick={onClick}
//       />

//       {/* The polygon name text */}
//       <text
//         x="50%"
//         y="50%"
//         dominantBaseline="middle"
//         textAnchor="middle"
//         fill="black"
//         fontSize="20"
//         fontWeight="bold"
//         transform={`scale(${textScale})`}
//         style={{
//           pointerEvents: "none", // Make sure the text doesn't interfere with polygon events
//           transition: "transform 0.2s ease", // Smooth scaling for text
//         }}
//       >
//         {polygonName}
//       </text>
//     </svg>
//   );
// };



// export default PolygonSection;