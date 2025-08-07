import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-[400px] sm:h-[415px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
      <div className="relative w-full h-full">
        <Image src="/slider.svg" alt="Slider" fill className="object-cover" />
      </div>
    </div>
  );
}
