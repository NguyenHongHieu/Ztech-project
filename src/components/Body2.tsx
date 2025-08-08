import Image from "next/image";

const footerData = [
  {
    title: "ABOUT US",
    items: ["Careers", "Company Details", "Terms & Conditions", "Help center", "Privacy Policy", "Affiliate"],
  },
  {
    title: "PRODUCTS",
    items: ["NFT Marketplace", "Slingshot", "Swaps", "NFT Launchpad", "Runes Platform", "Creator Dashboard"],
  },
  {
    title: "RESOURCES",
    items: ["Support", "API", "Feature Requests", "Trust & Safety", "Sitemap"],
  },
  {
    title: "CONTACT US",
    items: ["support@tech.email", "affiliate@tech.com"],
    isContact: true,
  },
];

function SectionColumn({ title, items, isContact }: { title: string; items: string[]; isContact?: boolean }) {
  return (
    <div>
      <h3 className="text-white font-bold text-base mb-3 italic">{title}</h3>
      <ul className={`space-y-1 text-[#D8D8D8] text-sm ${isContact ? "mb-4" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {isContact && (
        <button className="rounded-lg shadow hover:bg-[#333]">
          <Image src="/installapp.png" alt="Install App" width={152} height={44} className="block" />
        </button>
      )}
    </div>
  );
}

export default function Body2() {
  return (
    <section className="w-full py-6 px-2 sm:px-8 rounded-lg mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {footerData.map((col, index) => (
          <SectionColumn key={index} title={col.title} items={col.items} isContact={col.isContact} />
        ))}
      </div>
    </section>
  );
}
