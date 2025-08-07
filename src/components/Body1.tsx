"use client";
import { useState } from "react";
import Image from "next/image";

export default function Body1() {
  // Slider logic
  const [startIndex, setStartIndex] = useState(0);
  const images = [1, 2, 3, 4, 5, 6];
  const visibleCount = 6;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  };

  return (
    <section className="w-full py-8 px-2 sm:px-8 rounded-lg mb-6">
      {/* New NFT Collections */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-yellow-400">NEW NFT COLLECTIONS</h2>
        <div className="flex gap-2 ml-2">
          <button className="bg-[#444] text-white rounded-md w-8 h-8 flex items-center justify-center" onClick={handlePrev} disabled={startIndex === 0}>
            &lt;
          </button>
          <button
            className="bg-[#444] text-white rounded-md w-8 h-8 flex items-center justify-center"
            onClick={handleNext}
            disabled={startIndex >= images.length - visibleCount}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="overflow-hidden max-w-full">
        <div className="flex gap-4 pb-2">
          {images.slice(startIndex, startIndex + visibleCount).map((i) => (
            <div
              key={i}
              className="min-w-[120px] sm:min-w-[120px] h-[160px] sm:h-[160px] rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center"
            >
              <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={`/rectangle${i}.svg`} alt={`NFT ${i}`} width={160} height={160} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* NFT Drops Calendar, Hot NFT, Promotion */}
      <div className="flex gap-4 mt-12">
        {/* Block 1: NFT Drops Calendar */}
        <div className="flex flex-col h-full basis-[45%]">
          {/* Tiêu đề + nút */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-yellow-400 font-bold text-base">NFT DROPS CALENDAR</h3>
            <div className="flex gap-2">
              <button className="bg-[#444] text-white rounded-md w-7 h-7 flex items-center justify-center text-xs">&lt;</button>
              <button className="bg-[#444] text-white rounded-md w-7 h-7 flex items-center justify-center text-xs">&gt;</button>
            </div>
          </div>
          {/* Ảnh */}
          <div className="overflow-hidden rounded-lg">
            <Image src="/image0.svg" alt="NFT Drops Calendar" width={300} height={150} className="w-full h-[150px] object-cover" />
          </div>
        </div>

        {/* Block 2: Trending */}
        <div className="flex flex-col h-full basis-[27.5%]">
          <h3 className="text-yellow-400 font-bold text-base mb-4">TRENDING</h3>
          <div className="overflow-hidden rounded-lg">
            <Image src="/image1.svg" alt="Trending" width={300} height={150} className="w-full h-[150px] object-cover" />
          </div>
        </div>

        {/* Block 3: Top Collection */}
        <div className="flex flex-col h-full basis-[27.5%]">
          <h3 className="text-yellow-400 font-bold text-base mb-4">TOP COLLECTION</h3>
          <div className="overflow-hidden rounded-lg">
            <Image src="/image2.svg" alt="Top Collection" width={300} height={150} className="w-full h-[150px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
