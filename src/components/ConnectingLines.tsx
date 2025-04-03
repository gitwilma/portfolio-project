const ConnectingLines = () => {
  return (
    <>
      {/* Connecting line: CV-bild → About (oförändrad) */}
      <svg className="absolute w-full h-full top-0 left-0">
        <path
          d="M 400,500 C 500,800 700,700 860,800"
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting line: About → Projects */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d="M 920,950 C 700,1100 200,1150 480,1300"
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      {/* Connecting line: Projects → Contact */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <path
          d="M 480,1300 C 700,1350 650,1650 900,1650"
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>
    </>
  );
};

export default ConnectingLines;
