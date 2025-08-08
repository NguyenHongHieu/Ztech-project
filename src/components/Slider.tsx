import Image from "next/image";

export default function Slider() {
  return (
    <section className="slider-container">
      <div className="relative w-full h-full">
        <Image src="/slider.svg" alt="Slider" fill className="object-cover" sizes="100vw" />
      </div>
    </section>
  );
}
