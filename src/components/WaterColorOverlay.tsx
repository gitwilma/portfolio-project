import { useEffect, useRef, useState } from "react";

interface WatercolorOverlayProps {
  imageSrc: string;
}

const WatercolorOverlay: React.FC<WatercolorOverlayProps> = ({ imageSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 200; // Anpassa efter bildens storlek
    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cirkel
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();

    const colors = [
      "rgba(255, 223, 100, 0.8)", // Gul
      "rgba(255, 122, 242, 0.6)", // Rosa
      "rgba(136, 157, 98, 0.5)", // Grön
    ];

    // Ritar flera akvarellfläckar INOM cirkeln
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 50 + 30;
      const color = colors[Math.floor(Math.random() * colors.length)];

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.filter = "blur(15px)"; // Suddar ut för akvarell-effekt
      ctx.fill();
    }
  }, []);

  return (
    <div
      className="relative w-[200px] h-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={imageSrc}
        alt="CV Image"
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default WatercolorOverlay;
