function HeroContent() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-6 relative">
      <div
        className="absolute top-1/5 left-2/12 -translate-x-1/3 -translate-y-1/3 w-55 h-55 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(0, 213, 190, 0.4)' }}
      />
      <div
        className="absolute top-[10%] left-[60%] -translate-x-1/2 translate-y-2/5 w-45 h-45 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(97, 95, 255, 0.4)' }}
      />
      <div className="w-full max-w-md">
        <p className="text-[18px] mb-1">Hi all. I am</p>
        <h1 className="text-[48px] lg:text-[60px] text-heading-foreground">
          Denys Mahei
        </h1>
        <p className="text-[20px] text-indigo-500 lg:text-[30px]">
          <span>&gt;</span> Junior Fullstack Developer
        </p>
        <div className="mt-24" />

        <div className="space-y-1 text-sm">
          <p className="hidden text-foreground lg:block">
            // welcome to my portfolio
          </p>
          <p className="text-foreground">
            // find my profile on Github:
          </p>
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
              "https://github.com/denis-mahei"
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
