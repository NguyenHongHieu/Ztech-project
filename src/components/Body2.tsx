import Image from "next/image";

export default function Body2() {
  return (
    <section className="w-full py-6 px-2 sm:px-8 rounded-lg mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-white font-bold text-base mb-3 italic">ABOUT US</h3>
          <ul className="space-y-1 text-[#D2D2D2] text-sm">
            <li>Careers</li>
            <li>Company Details</li>
            <li>Terms & Conditions</li>
            <li>Help center</li>
            <li>Privacy Policy</li>
            <li>Affiliate</li>
          </ul>
        </div>
        {/* Products */}
        <div>
          <h3 className="text-white font-bold text-base mb-3 italic">PRODUCTS</h3>
          <ul className="space-y-1 text-[#D2D2D2] text-sm">
            <li>NFT Marketplace</li>
            <li>Slingshot</li>
            <li>Swaps</li>
            <li>NFT Launchpad</li>
            <li>Runes Platform</li>
            <li>Creator Dashboard</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="text-white font-bold text-base mb-3 italic">RESOURCES</h3>
          <ul className="space-y-1 text-[#D2D2D2] text-sm">
            <li>Support</li>
            <li>API</li>
            <li>Feature Requests</li>
            <li>Trust & Safety</li>
            <li>Sitemap</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-white font-bold text-base mb-3 italic">CONTACT US</h3>
          <ul className="space-y-1 text-[#D2D2D2] text-sm mb-4">
            <li>support@tech.email</li>
            <li>affiliate@tech.com</li>
          </ul>
          <button className="flex items-center gap-2 bg-[#383A42] text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-[#333]">
            {/* <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="#2DD4BF" />
              <rect x="8" y="10" width="8" height="4" rx="1" fill="#fff" />
            </svg> */}
            <Image src="/phone.png" alt="" width={60} height={60} />
            Install App
          </button>
        </div>
      </div>
    </section>
  );
}
