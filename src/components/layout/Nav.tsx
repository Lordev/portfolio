export default function Nav() {
  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="flex gap-3 py-20 px-[var(--p-fluid-md)] justify-between items-center">
        <span className="uppercase text-fluid-body-sm leading-20 text-neutral-200">
          Design stuff that
          <br />
          interest the mind8
        </span>
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
        <div className="">
          <p className="text-label-sm font-mono uppercase text-neutral-300">status</p>
          <div className="flex gap-16 items-center">
            <span className="text-fluid-body">Open for work</span>
            <span className="h-8 w-8 bg-green-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
