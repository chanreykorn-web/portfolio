import { CircleFadingPlus, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f4a43] text-white relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 relative z-10">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 border-2 border-yellow-500 flex items-center justify-center rotate-45">
              <div className="w-3 h-3 border-t-2 border-l-2 border-yellow-500 rotate-[-45deg]" />
            </div>
            <h2 className="text-xl font-semibold tracking-widest">CHANREY</h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            Empowering physicians with advanced multi-modal tools to improve
            treatment selection and patient outcomes.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <CircleFadingPlus className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <CircleFadingPlus className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <CircleFadingPlus className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
            <CircleFadingPlus className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 flex items-center gap-2 border border-gray-400 px-4 py-2 text-xs tracking-wide hover:bg-white hover:text-black transition"
          >
            <ArrowUp className="w-4 h-4" />
            BACK TO TOP
          </button>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="font-semibold mb-4">Site Map</h3>
          <ul className="space-y-2 uppercase text-sm text-gray-300">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Aboute Us</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 uppercase text-sm text-gray-300">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Services</li>
            <li className="cursor-pointer">Lawyer’s Corners</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
