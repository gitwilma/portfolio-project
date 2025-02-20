import WatercolorOverlay from "../components/WaterColorOverlay";

export default function Home() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio</h1>
      <p className="text-lg">text text text text text.</p>
      <div className="mt-40 ml-180">
        <WatercolorOverlay imageSrc="/assets/cv-image.png" />
      </div>
    </div>
  );
}
