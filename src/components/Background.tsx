import Image from "next/image";

export default function Background() {
  const items = [
    { title: "FREE TO EARN", img: "/freetoearn.png" },
    { title: "RANKING", img: "/ranking.png" },
    { title: "VIDEO-NFT", img: "/videonft.png" },
    { title: "HOW TO BUY", img: "/howtobuy.png" },
    { title: "NEW NEFTS", img: "/newnfts.png" },
    { title: "ROADMAPS", img: "/roadmaps.png" },
  ];

  return (
    <div className="w-full bg-[#222] rounded-lg flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-3 py-4 px-2 sm:px-8 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
      {items.map(({ title, img }, idx) => (
        <a key={idx} href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
          <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
            <Image src={img} alt={title} width={60} height={60} />
          </span>
          <span className="text-xs sm:text-sm text-white">{title}</span>
        </a>
      ))}
    </div>
  );
}
