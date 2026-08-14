import * as React from "react";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";

const socials = [
  {
    href: "https://x.com/denismaheidev",
    label: "X",
    icon: RiTwitterXFill,
  },
  {
    href: "https://www.linkedin.com/in/denys-mahei-dev/",
    label: "LinkedIn",
    icon: RiLinkedinFill,
  },
];

function Footer() {
  return (
    <footer className="border-t border-t-stroke flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="lg:px-6 lg:py-4 border-r border-r-stroke">find me in:</p>
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="border-r border-stroke px-6 py-4 flex items-center hover:text-heading-foreground transition-colors"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
      <a
        href="https://github.com/denis-mahei"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        className="border-l border-stroke px-6 py-4 flex items-center hover:text-heading-foreground transition-colors"
      >
        <span className="mr-2">@denismahei</span>
        <RiGithubFill size={20} />
      </a>
    </footer>
  );
}
export default Footer;
