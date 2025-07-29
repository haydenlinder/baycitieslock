export default function BayCitiesLogo({
  width = 300,
  height = 400,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Keyhole shape */}
      <g fill="none" stroke="#FFD700" strokeWidth="12" strokeLinecap="round">
        {/* 80% circle - starts from left side, goes up and around to right side */}
        <path
          d="M 115 140 
                 A 40 40 0 1 1 145 140"
          fill="none"
        />

        {/* Left line extending down at 100 degrees from left end of circle */}
        <path
          d="M 115 140 
                 L 90 230"
          fill="none"
        />

        {/* Right line extending down at 100 degrees from right end of circle */}
        <path
          d="M 145 140 
                 L 170 230"
          fill="none"
        />

        {/* Bottom connecting line */}
        <path
          d="M 90 230 
                 L 170 230"
          fill="none"
        />
      </g>

      {/* LOCK & SAFE text at bottom */}
      <defs>
        <path
          id="criclePath"
          d="M 80 110 
                 A 50.5 50.5 0 1 1 180 110"
          fill="none"
        />
      </defs>

      <g>
        <use xlinkHref="#criclePath" fill="none" />
        <text
          fill="#FFD700"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          letterSpacing="4px"
        >
          <textPath fontSize={25} strokeLinecap="round" xlinkHref="#criclePath">
            BAY CITIES
          </textPath>
        </text>
      </g>
      <text
        x="131"
        y="260"
        textAnchor="middle"
        fill="#FFD700"
        fontFamily="Arial, sans-serif"
        fontSize="25"
        fontWeight="bold"
        letterSpacing="4px"
      >
        LOCK &amp; SAFE
      </text>
    </svg>
  );
}
