import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/Tabs/AboutMe';
import Contact from './components/Tabs/Contact';
import Projects from './components/Tabs/Projects';
import BackGround from './components/BackGround/BackGround'; // Adjust the path as necessary

const blue = '#add8e6';
const green = '#ccff99';
const orange = '#ffcc99';
const pageTransitions = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { duration: 1 } }
};

function App() {
  const [activeTab, setActiveTab] = useState('Initial');
  const [bgColor, setBgColor] = React.useState("#ffffff");
  const [newbgColor, setNewbgColor] = React.useState("#add8e6");
  const [showTransation, setShowTransation] = React.useState(false);

  // fist page after page load
  useEffect(() => {
    setActiveTab('AboutMe');
  }, [])

  useEffect(()=> {
    switch (activeTab) {
      case 'AboutMe':
        setNewbgColor(blue);
        break;
      case 'Contact':
        setNewbgColor(green);
        break;
      case 'Projects':
        setNewbgColor(orange);
        break;
      default:
        setNewbgColor('#ffffff');
    }

    triggerAnimation();
  }, [activeTab])

  const updateActiveTab = (tab_name) => {
    if (bgColor === newbgColor) {
      setActiveTab(tab_name);
    }
  }

  const renderComponent = () => {
    switch (activeTab) {
      case 'Initial':
        return <div/>
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
    setShowTransation(true);
  };

  const onBGTransationEnd = () => {
    console.log('Animation completed!');
    setBgColor(newbgColor);
    setShowTransation(false);
    console.log('new bg');
    console.log(bgColor);
  };

  return (
    <div className="App">
      <NavBar setActiveTab={updateActiveTab} />
      
      <BackGround showTransation={showTransation} bgColor={bgColor} newbgColor={newbgColor} onAnimationEnd={onBGTransationEnd}/>

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
