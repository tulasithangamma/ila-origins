import hero from "../assets/hero.jpeg";
import logo from "../assets/logo.png";
import coorg from "../assets/coorg.jpg";
import araku from "../assets/araku.jpg";
import bababudangiri from "../assets/bababudangiri.jpg";
import wayanad from "../assets/wayanad.jpg";
import laos from "../assets/laos.jpg";
import originBg from "../assets/OriginBg.jpg";
import about from "../assets/about.jpeg";
import process from "../assets/process.jpeg";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-center md:justify-end px-6 md:px-20 py-4 md:py-6 bg-black/40 backdrop-blur-md">
        <nav className="flex gap-6 md:gap-10 text-xs md:text-sm uppercase tracking-widest">
          <a href="#origins" className="hover:text-[#b7c58b] transition">Origins</a>
          <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="hover:text-[#b7c58b] transition">Brochure</a>
          <a href="#contact" className="hover:text-[#b7c58b] transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen">
        <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40"></div>

        <div className="relative z-20 min-h-screen flex items-center px-6 md:px-24 pt-20 md:pt-0">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-4xl">

            <img src={logo} alt="logo" className="w-20 md:w-28 opacity-90" />

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif leading-tight">
                Crafted in <span className="text-[#b7c58b]">Soil.</span><br />
                Revealed in <span className="text-[#b7c58b]">Flavour.</span>
              </h1>

              <p className="text-sm md:text-base text-gray-300 mt-4 italic">
                From the misty hills of Coorg to Bababudangiri,
                every bean carries its origin.
              </p>

              <a
                href="#origins"
                className="inline-block mt-6 md:mt-8 border px-6 md:px-8 py-3 md:py-4 text-sm md:text-base uppercase hover:bg-white hover:text-black transition"
              >
                Explore Origins
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINS */}
      <section id="origins" className="relative py-20 px-6 md:px-12">
        <img src={originBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">
            Our <span className="text-[#b7c58b]">Origins</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[coorg, araku, bababudangiri, wayanad, laos].map((img, i) => {
              const titles = ["COORG", "ARAKU", "BABABUDANGIRI", "WAYANAD", "LAOS"];

              return (
                <div key={i} className="relative h-48 md:h-72 rounded-xl overflow-hidden">
                  <img src={img} alt="" className="w-full h-full object-cover" />

                  <div className="absolute bottom-0 w-full bg-black/70 text-white p-2 text-xs md:text-sm">
                    {titles[i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="grid md:grid-cols-3">
        <div className="bg-[#ede7dc] text-black p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-serif mb-4">
            Where Everything Begins With the Earth
          </h2>
          <p className="text-sm md:text-base">
            We believe exceptional coffee is grown with care and respect for nature.
          </p>
        </div>

        <img src={about} className="w-full h-64 md:h-auto object-cover" />

        <div className="bg-[#ede7dc] text-black p-6 md:p-10">
          <p className="text-sm md:text-base">
            Ethical sourcing, sustainable practices and authentic flavour define us.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative min-h-[70vh]">
        <img src={process} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 p-6 md:p-20">
          <h2 className="text-3xl md:text-5xl font-serif">
            From Cherry to Cup
          </h2>

          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block border px-6 py-3"
          >
            View Brochure
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#1a2b1a] text-center p-8 md:p-16">
        <h2 className="text-xl md:text-3xl font-serif">
          ILA ORIGINS PVT LTD
        </h2>

        <p className="mt-4 text-sm md:text-base">
          Bangalore – 560004<br />
          Tel: +91 8042103133<br />
          ilaorigins@gmail.com
        </p>
      </footer>

    </div>
  );
}