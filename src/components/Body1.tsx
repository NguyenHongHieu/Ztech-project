"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Body1() {
  const [startIndex, setStartIndex] = useState(0);
  const images = [1, 2, 3, 4, 5, 6];

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 3; // mobile
      return 6; // desktop
    }
    return 6;
  };

  const [visibleCount, setVisibleCount] = useState(6);
  React.useEffect(() => {
    setVisibleCount(getVisibleCount());
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  };

  return (
    <section className="w-full py-8 px-2 sm:px-8 rounded-lg">
      {/* New NFT Collections */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-yellow-400 italic">NEW NFT COLLECTIONS</h2>
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
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        {/* Block 1: NFT Drops Calendar */}
        <div className="flex flex-col w-full md:basis-[45%]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-yellow-400 font-bold text-base italic">NFT DROPS CALENDAR</h3>
            <div className="flex gap-2">
              <button className="bg-[#444] text-white rounded-md w-7 h-7 flex items-center justify-center text-xs">&lt;</button>
              <button className="bg-[#444] text-white rounded-md w-7 h-7 flex items-center justify-center text-xs">&gt;</button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src="/image0.svg" alt="NFT Drops Calendar" width={300} height={150} className="w-full h-auto md:h-[150px] object-cover" />
          </div>
        </div>
        <div className="flex w-full md:basis-[55%] gap-4">
          {/* Block 2: Trending */}
          <div className="flex flex-col w-1/2">
            <h3 className="text-yellow-400 font-bold text-base mb-4 italic">TRENDING</h3>
            <div className="overflow-hidden rounded-lg">
              <Image src="/image1.svg" alt="Trending" width={300} height={150} className="w-full h-auto md:h-[150px] object-cover" />
            </div>
          </div>
          {/* Block 3: Top Collection */}
          <div className="flex flex-col w-1/2">
            <h3 className="text-yellow-400 font-bold text-base mb-4 italic">TOP COLLECTION</h3>
            <div className="overflow-hidden rounded-lg">
              <Image src="/image2.svg" alt="Top Collection" width={300} height={150} className="w-full h-auto md:h-[150px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
