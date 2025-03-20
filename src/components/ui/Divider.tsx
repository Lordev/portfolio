interface DividerProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function Divider({ 
  className = "", 
  color = "#3C3B3B", 
}: DividerProps) {
  return (
    <div className={`bg-gradient-to-t from-black from-50% to-50% to-transparent ${className}`}>
      <svg
        width="auto"
        viewBox="0 0 1920 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20.5C96.0338 20.5 96.0338 58.5 192.068 58.5C288.101 58.5 288.101 20.5 384.135 20.5C480.169 20.5 480.169 58.5 575.978 58.5C672.014 58.5 672.014 20.5 767.82 20.5C863.856 20.5 863.856 58.5 959.662 58.5C1055.7 58.5 1055.7 20.5 1151.73 20.5C1247.76 20.5 1247.76 58.5 1343.8 58.5C1439.83 58.5 1439.83 20.5 1535.86 20.5C1631.9 20.5 1631.9 58.5 1727.94 58.5C1823.96 58.5 1823.96 20.5 1920 20.5"
          stroke={color}
          strokeWidth={40}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}