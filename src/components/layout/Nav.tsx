export default function Nav() {
  return (
    <nav>
      <div className="flex gap-3 py-16 border-white border-b px-12 justify-between items-center">
        <span className="uppercase font-semibold">
          I design stuff
        </span>
        <svg
          className="h-32 w-32"
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
        </svg>
      </div>
    </nav>
  );
}
