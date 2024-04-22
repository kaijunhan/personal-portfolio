import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PortfolioItem = ({ title, imgUrl, stack, link, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const imageObtained = new URL(imgUrl, import.meta.url).href

  const PortfolioItemContent = (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary rounded-[20px] p-4 min-h-[280px] flex flex-col justify-evenly items-center'
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className='w-full h-full flex flex-col justify-evenly items-center border-2 border-stone-900 dark:border-white rounded-[20px] overflow-hidden'
        >
          <img
            src={imageObtained}
            alt='web-development'
            className="w-full h-36 md:h-48 object-cover cursor-pointer rounded-[20px]"
          />
          <div className="w-full p-4 flex flex-col justify-center items-center">
            <h2 className='text-stone-900 dark:text-white text-[20px] font-bold text-center mb-2'>
              {title}
            </h2>
            <p className="flex flex-wrap gap-2 justify-center items-center text-xs md:text-sm text-stone-900 dark:text-white">
              {stack.map((item, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );

  return shouldReduceMotion ? (
    PortfolioItemContent
  ) : (
    <Tilt className='xs:w-[250px] w-full'>
      {PortfolioItemContent}
    </Tilt>
  );
};

export default PortfolioItem;