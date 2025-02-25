const ConnectingLines = () => {
  return (
    <>
      {/* Connecting lines Bild-About */}
      <svg className="absolute w-full h-full top-0 left-0">
        <path
          d={`
              M 400,500 
              C 500,800 700,700 860,800
            `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting lines About-Projects */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d={`
              M 860,1100
              C 800,1400 250,1450 490,1600
            `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting lines Projects-Contact */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d={`
              M 490,1600
              C 700,1650 650,1950 900,2100
            `}
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>
    </>
  );
};

export default ConnectingLines;
