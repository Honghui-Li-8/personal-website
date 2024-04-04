import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ExpandingCircleAnimation from './components/ExpandingCircleAnimation'; // Adjust the path as necessary


function App() {
  const [activeTab, setActiveTab] = useState('AboutMe');
  const [bgColor, setBgColor] = React.useState("#add8e6");
  const [newbgColor, setNewBgColor] = React.useState("#add8e6");
  // const [showContent, setShowContent] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const pageTransitions = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  const triggerAnimation = () => {
    // Increment the key to force re-render and thus restart the animation
    setAnimationKey(prevKey => prevKey + 1);
    console.log('Animation Triger!');
  };

  const onBGTransationEnd = () => {
    console.log('Animation completed!');
    setBgColor(getNewColor());
    console.log('new bg');
    console.log(bgColor);
  };

  const getNewColor = () => {
    const c1 = "#add8e6";
    const c2 = "#ad08e6";
    if (bgColor === c1) {
      console.log('c2');
      return c2;
    }
    else {
      console.log('c1');
      return c1;
    }
  
    // return newbgColor;
  }

  return (
    <div className="App">
      <NavBar setActiveTab={setActiveTab} />
      
      <ExpandingCircleAnimation key={animationKey} bgColor={bgColor} newbgColor={getNewColor()} animate={true} onAnimationEnd={onBGTransationEnd}/>
      <button onClick={triggerAnimation} style={{ position: 'fixed', zIndex: 10, top: '20px', left: '20px' }}>
        Trigger Animation
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={pageTransitions}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
