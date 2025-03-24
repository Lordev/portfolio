export default function Nav() {
  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
    <div className="flex gap-3 py-32 px-[var(--p-fluid-md)] justify-between items-center">
        <span className="uppercase font-semibold">
          I design stuff
        </span>
        <div className="flex gap-32">
          <a href="#" className="text-gray-300 hover:text-primary transition-colors text-label-md font-medium uppercase ">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-primary transition-colors text-label-md font-medium uppercase ">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-primary transition-colors text-label-md font-medium uppercase ">
            Projects
          </a>
          <a href="#" className="text-gray-300 hover:text-primary transition-colors text-label-md font-medium uppercase ">
            Contact
          </a>
        </div>
        {/* <svg
          className="h-32 w-32 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
        >
          <path d="M1 8h15v2H1z" fill="currentColor"></path>
          <line
            x1="1"
            y1="15"
            x2="25"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          ></line>
          <path d="M1 20h24v2H1z" fill="currentColor"></path>
        </svg> */}
      </div>
    </nav>
  );
}
