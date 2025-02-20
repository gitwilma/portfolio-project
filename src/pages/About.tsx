import WatercolorOverlay from "../components/WaterColorOverlay";

export default function About() {
  return (
    <div className="px-10 py-30 max-w-2xl">
      <h2 className="text-5xl py-5">About me</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
      </p>
      <div className="absolute top-[250px] left-[900px]">
        <WatercolorOverlay
          imageSrc="/assets/cv-image.png"
          className="rounded-full"
          size="400px"
        />
      </div>
    </div>
  );
}
