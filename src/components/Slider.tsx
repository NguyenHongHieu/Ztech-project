import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full h-[130px] sm:h-[415px] bg-gray-200 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <Image src="/slider.svg" alt="Slider" fill className="object-cover" sizes="(max-width: 640px) 100vw, 100vw" />
      </div>
    </div>
  );
}
