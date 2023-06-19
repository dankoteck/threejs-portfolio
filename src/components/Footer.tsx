import { navLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="relative z-0 p-16 mx-auto mt-16 space-y-8 border-t max-w-7xl border-t-slate-200 ">
      <div className="flex items-center justify-center gap-16">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block py-2 pl-3 pr-4 text-white rounded cursor-pointer md:bg-transparent md:p-0"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8">
        {/* Facebook */}
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100054322902326"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Github */}
        <a target="_blank" href="https://github.com/lekhoa011159CloneShowcase">
          <svg
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Linkedin */}
        <a target="_blank" href="https://www.linkedin.com/in/lekhoa011159/">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
      </div>

      <div className="text-base text-center text-white">
        © 2023 Dang Khoa, Inc. All rights reserved.
      </div>
    </footer>
  );
}
