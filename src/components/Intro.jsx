import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Kai Jun</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a third-year Computer Science Student at the University of Michigan with a concentration in the Systems track specifically in Scalable Systems.
            <br />
            Check out my {' '}
            <a
               href="/portfolio/blog"
               target="_blank"
               className="dark:text-cyan-500 underline underline-offset-2 decoration-2 decoration-cyan-600 hover:decoration-red-600 text-black"
               rel="noreferrer noopener"
            >
               blog
            </a>{' '}
            where I post all my daily musings.
         </p>
      </div>
   )
}

export default Intro;