const ConnectingLines = () => {
  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block"
      width="1000"
      height="2000"
      viewBox="0 0 1000 2000"
    >
      {/* CV-bild → About (orörd) */}
      <path
        d="M 300,500 C 500,800 700,700 860,800"
        stroke="gray"
        strokeWidth="0.8"
        fill="transparent"
      />

      {/* About → Projects */}
      <path
        d="M 860,600 C 800,1200 100,1100 180,1300"
        stroke="gray"
        strokeWidth="0.8"
        fill="transparent"
      />

      {/* Projects → Contact */}
      <path
        d="M 280,1300 C 600,1400 700,1600 880,1700"
        stroke="gray"
        strokeWidth="0.8"
        fill="transparent"
      />
    </svg>
  );
};

export default ConnectingLines;
