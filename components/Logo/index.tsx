export interface LogoProps {
  width?: number | string;
  height?: number | string;
}

const Logo = ({ width = '100%', height = '32px' }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1797.12 419.47"
      width={width}
      height={height}
    >
      <defs>
        <linearGradient
          id="a"
          x1="183.49"
          y1="352.92"
          x2="68.11"
          y2="153.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ed1e79" />
          <stop offset="1" stopColor="#662d91" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="348.61"
          y1="346.24"
          x2="184.04"
          y2="61.2"
          xlinkHref="#a"
        />
        <linearGradient
          id="c"
          x1="464.62"
          y1="305.82"
          x2="349.24"
          y2="105.98"
          xlinkHref="#a"
        />
      </defs>
      <path
        d="M83.29,312.59Q41.8,287.69,0,262.51V196.39q41.81-25.17,83.29-50.09t83.29-50.08v79.94q-22.53,14.31-44.74,27.38T77.09,230.93q22.53,12.84,44.75,25.41t44.74,25.41v80.93Q124.78,337.51,83.29,312.59Z"
        fill="url(#a)"
      />
      <path
        d="M191.08,383.9,290.05,0l51.61,23.69-99.3,383.89Z"
        fill="url(#b)"
      />
      <path
        d="M449.44,146.3q41.47,24.93,83.29,50.09v66.12q-41.81,25.17-83.29,50.08t-83.29,50.09V281.75q22.53-12.83,44.75-25.41t44.75-25.41q-22.54-14.31-44.75-27.39t-44.75-27.38V96.22Q408,121.39,449.44,146.3Z"
        fill="url(#c)"
      />
      <text
        transform="translate(772.94 191.59)"
        fontSize="180"
        fill="#1a1a1a"
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        TI
        <tspan x="170.28" y="0" letterSpacing="-0.01em">
          A
        </tspan>
        <tspan x="306.36" y="0">
          GO
        </tspan>
        <tspan x="0" y="180">
          G
        </tspan>
        <tspan x="138.78" y="180" letterSpacing="-0.02em">
          U
        </tspan>
        <tspan x="277.92" y="180" letterSpacing="-0.03em">
          A
        </tspan>
        <tspan x="409.5" y="180">
          TIERRI
        </tspan>
      </text>
      <rect x="662.73" y="53.79" width="10" height="320" fill="#1a1a1a" />
    </svg>
  );
};

export default Logo;
