import * as React from 'react';

function HeroContent() {
  return (
    <div className="flex flex-col justify-center lg:pl-50 py-8 h-full">
      <p className="text-[18px] mb-1">Hi all. I am</p>
      <h1 className="text-[60px] text-heading-foreground">
        Denys Mahei
      </h1>
      <p className="text-indigo-500 text-xl">
        <span>&gt;</span> Junior Fullstack Developer
      </p>
      <div className="mt-24" />

      <div className="space-y-1 text-sm">
        <p className="text-foreground">// welcome to my portfolio</p>
        <p className="text-foreground">
          // find my profile on Github:
        </p>
        <p>
          <span className="text-purple-400">const </span>
          <span className="text-heading-foreground">githubLink</span>
          <span className="text-foreground">=</span>
          <a
            href="https://github.com/denis-mahei"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-foreground hover:text-link-hover transition-colors underline"
          >
            "https://github.com/denis-mahei"
          </a>
        </p>
      </div>
    </div>
  );
}
export default HeroContent;
