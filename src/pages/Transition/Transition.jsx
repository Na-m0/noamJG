import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transition.css';

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [showTransition, setShowTransition] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [handState, setHandState] = useState('open');
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayClass, setOverlayClass] = useState('');
  
  const startTransition = (to) => {
    setShowTransition(true);
    setAnimationClass('animate-handDown');
    setHandState('open');
  
    setTimeout(() => {
      setTimeout(() => {
        setHandState('closed');
  
        // Affiche le fond pendant la main qui remonte
        setOverlayClass('fade-in');
        setShowOverlay(true);
  
        setTimeout(() => {
          setAnimationClass('animate-handUp');
  
          setTimeout(() => {
            navigate(to);
            setOverlayClass('fade-out');
  
            // Cache tout
            setTimeout(() => {
              setShowOverlay(false);
              setShowTransition(false);
            }, 800);
          }, 1500);
  
        }, 500);
  
      }, 200);
    }, 1500);
  };
  
  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      {showTransition && (
        <div className={`hand-transition ${animationClass} ${handState}`} />
      )}
      {showOverlay && (
        <div className={`page-fade ${overlayClass}`} />
      )}
    </TransitionContext.Provider>
  );
};
