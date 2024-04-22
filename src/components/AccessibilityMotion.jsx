import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const AccessibilityMotion = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      // Disable all Framer Motion animations
      console.log('Reduced motion is enabled');
    //   window.Motion.AnimationFeatuAre.stop();
    } else {
      // Enable Framer Motion animations
      console.log('Reduced motion is disabled');
    //   window.Motion.AnimationFeature.start();
    }
  }, [shouldReduceMotion]);

  return null;
};

export default AccessibilityMotion;