import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import AccessibilityMotion from './components/AccessibilityMotion';
import TransitionEffect from './components/TransitionEffect';
import { useReducedMotion } from 'framer-motion';

function App() {
	const shouldReduceMotion = useReducedMotion();


  return (
	<main>
		<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
			
			<AccessibilityMotion/>
			{shouldReduceMotion ? null : <TransitionEffect/>}
			<Navbar />
				<Intro />
				<Portfolio />
				<Timeline />
				<Contact />
				<Footer />
			</div>
		</div>
	</main>
     
  );
}

export default App;