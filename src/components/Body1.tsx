"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// ===== Carousel Component =====
function NFTCarousel({ images }: { images: string[] }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const getVisibleCount = () => (window.innerWidth < 640 ? 3 : 6);

  useEffect(() => {
    setVisibleCount(getVisibleCount());
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#FFC700] italic">NEW NFT COLLECTIONS</h2>
        <div className="flex gap-2 ml-2">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="bg-[#383A42] text-[#FFFFFF99] rounded-md w-8 h-8 flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= images.length - visibleCount}
            className="bg-[#383A42] text-[#FFFFFF99] rounded-md w-8 h-8 flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="overflow-hidden max-w-full">
        <div className="flex gap-4 pb-2">
          {images.slice(startIndex, startIndex + visibleCount).map((src, index) => (
            <div
              key={index}
              className="min-w-[120px] h-[160px] rounded-lg bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center overflow-hidden"
            >
              <Image src={src} alt={`NFT ${index}`} width={160} height={160} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ===== Main Body1 =====
export default function Body1() {
  const nftImages = ["/rectangle1.svg", "/rectangle2.svg", "/rectangle3.svg", "/rectangle4.svg", "/rectangle5.svg", "/rectangle6.svg"];

  const sideBlocks = [
    {
      title: "NFT DROPS CALENDAR",
      image: "/image0.svg",
    },
    {
      title: "TRENDING",
      image: "/image1.svg",
    },
    {
      title: "TOP COLLECTION",
      image: "/image2.svg",
    },
  ];

  return (
    <section className="w-full py-8 px-2 sm:px-8 rounded-lg">
      {/* Carousel */}
      <NFTCarousel images={nftImages} />

      {/* Side blocks */}
      <div className="flex flex-col md:flex-row gap-4 mt-12">
        {/* Block 1 */}
        <div className="flex flex-col w-full md:basis-[45%]">
          <BlockWithNav {...sideBlocks[0]} />
        </div>

        {/* Block 2 + 3 */}
        <div className="flex w-full md:basis-[55%] gap-4">
          {sideBlocks.slice(1).map((block, i) => (
            <div key={i} className="flex flex-col w-1/2">
              <BlockSimple {...block} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Helper Components =====
function BlockWithNav({ title, image }: { title: string; image: string }) {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[#FFC700] font-bold text-base italic">{title}</h3>
        <div className="flex gap-2">
          <button className="bg-[#383A42] text-[#FFFFFF99] rounded-md w-7 h-7 flex items-center justify-center text-xs">&lt;</button>
          <button className="bg-[#383A42] text-[#FFFFFF99] rounded-md w-7 h-7 flex items-center justify-center text-xs">&gt;</button>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image src={image} alt={title} width={300} height={150} className="w-full h-auto md:h-[150px] object-cover" />
      </div>
    </>
  );
}

function BlockSimple({ title, image }: { title: string; image: string }) {
  return (
    <>
      <h3 className="text-[#FFC700] font-bold text-base mb-4 italic">{title}</h3>
      <div className="overflow-hidden rounded-lg">
        <Image src={image} alt={title} width={300} height={150} className="w-full h-auto md:h-[150px] object-cover" />
      </div>
    </>
  );
}
