import React, { useEffect, useRef } from 'react';

const ExpandingCircleAnimation = ({ bgColor, showCircle, newbgColor, animate, onAnimationEnd }) => {
  // Ref for the circle element
  const circleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    // Handler for the animationend event
    const handleAnimationEnd = () => {
      if (onAnimationEnd) onAnimationEnd();
    };

    // Add event listener
    circle.addEventListener('animationend', handleAnimationEnd);

    // Cleanup
    return () => circle.removeEventListener('animationend', handleAnimationEnd);
  }, [onAnimationEnd]);

  
  // update bg color
  useEffect(() => {
    if (bgRef.current) { // Check if the ref is attached to an element
        bgRef.current.style.backgroundColor = bgColor;
        console.log(bgColor)
    }
  }, [bgColor])


  // Inline styles for the circle and container
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: bgColor, // Use the bgColor prop for background color
      zIndex: -1, // Stay behind other content
    },
    circle: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: newbgColor, // Use the bgColor prop for background color
      transform: 'scale(0)',
      animation: animate ? 'expand 2s forwards' : 'none',
    }
  };

  return (
    <div style={styles.container} ref={bgRef}>
      {showCircle && <div style={styles.circle} ref={circleRef}></div>}
    </div>
  );
};

export default ExpandingCircleAnimation;
