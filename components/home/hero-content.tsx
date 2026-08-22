'use client';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';

function HeroContent() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 relative">
      <div
        className="lg:hidden absolute top-1/4 left-1/12 -translate-x-1/3 -translate-y-1/3 w-55 h-55 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 213, 190, 0.4)' }}
      />
      <div
        className="lg:hidden absolute top-[30%] left-[60%] -translate-x-1/2 translate-y-2/5 w-45 h-45 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(97, 95, 255, 0.4)' }}
      />
      <div className="w-full max-w-md">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-[18px] mb-1"
        >
          Hi all. I am
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-[48px] lg:text-[60px] text-heading-foreground"
        >
          Denys Mahei
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-[20px] text-indigo-500 lg:text-[30px]"
        >
          <span>&gt;</span> Junior Fullstack Developer
        </motion.p>
        <div className="mt-24" />

        <div className="space-y-1 text-sm">
          <TypeAnimation
            wrapper="p"
            className="text-foreground"
            sequence={['// welcome to my portfolio']}
            speed={50}
            cursor={false}
          />
          <TypeAnimation
            wrapper="p"
            className="text-foreground"
            sequence={[1400, '// find my profile on Github:']}
            speed={50}
            cursor
          />
          <p>
            <span className="text-purple-400">const </span>
            <span className="text-teal-400">githubLink</span>
            <span className="text-heading-foreground"> = </span>
            <a
              href="https://github.com/denis-mahei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-foreground hover:text-link-hover transition-colors underline"
            >
              &#34;https://github.com/denis-mahei&#34;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
