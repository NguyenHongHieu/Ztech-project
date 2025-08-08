import Image from "next/image";
export default function Background() {
  return (
    <div className="w-full bg-[#222] rounded-lg flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-3 py-4 px-2 sm:px-8 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
      {/* Free to Earn */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* SVG icon placeholder */}
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#FFD600" strokeWidth="2" />
            <text x="20" y="25" textAnchor="middle" fontSize="10" fill="#FFD600">
              💰
            </text>
          </svg> */}
          <Image src="/freetoearn.png" alt="Free to Earn" width={60} height={60} />
        </span>
        <span className="text-xs sm:text-sm text-white">FREE TO EARN</span>
      </a>
      {/* Ranking */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="10" y="20" width="20" height="10" fill="#FFD600" />
            <circle cx="30" cy="15" r="5" fill="#FFD600" />
            <circle cx="20" cy="10" r="5" fill="#FFD600" />
            <circle cx="10" cy="15" r="5" fill="#FFD600" />
          </svg> */}
          <Image src="/ranking.png" alt="Ranking" width={60} height={60} />
        </span>
        <span className="text-xs sm:text-sm text-white">RANKING</span>
      </a>
      {/* Video-NFT */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#FFD600" strokeWidth="2" />
            <polygon points="16,14 28,20 16,26" fill="#FFD600" />
          </svg> */}
          <Image src="/videonft.png" alt="Video NFT" width={60} height={60} />
        </span>
        <span className="text-xs sm:text-sm text-white">VIDEO-NFT</span>
      </a>
      {/* How to Buy */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 30 L30 10" stroke="#FFD600" strokeWidth="2" />
            <path d="M20 10 L30 20" stroke="#FFD600" strokeWidth="2" />
          </svg> */}
          <Image src="/howtobuy.png" alt="How to Buy" width={60} height={60} />
        </span>
        <span className="text-xs sm:text-sm text-white">HOW TO BUY</span>
      </a>
      {/* New NEFTS */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#FFD600" strokeWidth="2" />
            <text x="20" y="25" textAnchor="middle" fontSize="10" fill="#FFD600">
              🌐
            </text>
          </svg> */}
          <Image src="/newnfts.png" alt="New NEFTS" width={60} height={60} />
          {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span> */}
        </span>
        <span className="text-xs sm:text-sm text-white">NEW NEFTS</span>
      </a>
      {/* Roadmap */}
      <a href="#" className="flex flex-col items-center gap-2 w-28 sm:w-32 relative group transition">
        <span className="block rounded-lg border-4 border-transparent transition group-hover:border-yellow-400">
          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 20 Q20 10 30 20 Q20 30 10 20" stroke="#FFD600" strokeWidth="2" fill="none" />
          </svg> */}
          <Image src="/roadmaps.png" alt="Roadmaps" width={60} height={60} />
        </span>
        <span className="text-xs sm:text-sm text-white">ROADMAPS</span>
      </a>
    </div>
  );
}
