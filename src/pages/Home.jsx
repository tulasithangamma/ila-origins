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
    <div className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-30 flex justify-end px-6 md:px-20 py-4 md:py-6 bg-black/40 backdrop-blur-md">
        <nav className="flex gap-5 md:gap-10 text-[10px] md:text-sm uppercase tracking-[0.25em]">
          <a href="#origins" className="hover:text-[#b7c58b] transition">Origins</a>
          <a href="/brochure.pdf" target="_blank" rel="noreferrer" className="hover:text-[#b7c58b] transition">Brochure</a>
          <a href="#contact" className="hover:text-[#b7c58b] transition">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[72vh] md:min-h-screen">
        <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40"></div>

        <div className="relative z-20 min-h-[85vh] md:min-h-screen flex items-center px-12 md:px-24">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10 max-w-4xl">
            <img src={logo} alt="logo" className="w-28 mt-2 opacity-90" />

            <div>
              <h1 className="text-[34px] leading-[1] md:text-5xl lg:text-6xl font-serif md:leading-[1.1] text-center md:text-left">
                Crafted in <span className="text-[#b7c58b]">Soil.</span><br />
                Revealed in <span className="text-[#b7c58b]">Flavour.</span>
              </h1>

              <p className="text-gray-300 mt-5 italic text-sm md:text-base text-center md:text-left">
                From the misty hills of Coorg to Bababudangiri,
                every bean carries its origin.
              </p>
            <div className="flex justify-center md:justify-start"></div>
              <a
                href="#origins"
                className="inline-block mt-8 border px-7 py-3 md:px-8 md:py-4 uppercase hover:bg-white hover:text-black transition text-sm md:text-base"
              > 
                Explore Origins
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGINS */}
      <section id="origins" className="relative py-24 px-6 md:px-12">
        <img src={originBg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-sm tracking-[6px] text-[#d2c5b0] uppercase mb-3">
              OUR ORIGINS
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              Distinct Origins.
              <span className="text-[#b7c58b]"> Distinct Character.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-6">
            {[coorg, araku, bababudangiri, wayanad, laos].map((img, i) => {
              const titles = ["COORG", "ARAKU", "BABABUDANGIRI", "WAYANAD", "LAOS PDR"];
              const descs = [
                "Red soil. Misty hills.",
                "Tribal cultivation.",
                "Bold flavours.",
                "Pure & aromatic.",
                "Smooth sweetness."
              ];

              return (
                <div
                  key={i}
                  className="group relative h-72 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

                  <div className="absolute bottom-0 p-4 w-full bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white text-sm font-semibold">
                      {titles[i]}
                    </h3>
                    <p className="text-sm text-gray-300">{descs[i]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="grid md:grid-cols-3 grid-cols-1 min-h-[500px]">
        <div className="bg-[#ede7dc] text-black flex items-center justify-center px-10 md:px-16 py-12">
          <div className="max-w-md">
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Where Everything Begins With the <span className="italic">Earth.</span>
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed">
              We believe exceptional coffee is not made, it is grown.
              Rooted in living soil, nurtured by nature and shaped
              by the hands that cultivate with care.
            </p>
          </div>
        </div>

        <div className="h-[220px] md:h-auto">
          <img src={about} alt="about" className="w-full h-full object-cover" />
        </div>

        <div className="bg-[#ede7dc] text-black flex items-center justify-center px-6 md:px-16 py-10 md:py-12">
          <div className="space-y-8 max-w-sm">
            <div>
              <h3 className="text-sm uppercase mb-1">Soil-first</h3>
              <p className="text-gray-600 text-sm">
                Healthy soil is the foundation of exceptional coffee.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase mb-1">Regeneration</h3>
              <p className="text-gray-600 text-sm">
                We nurture ecosystems for generations to come.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase mb-1">Ethical sourcing</h3>
              <p className="text-gray-600 text-sm">
                Fair relationships. Respectful partnerships.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase mb-1">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                Pure origins. Honest flavours. No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative min-h-[90vh]">
        <img src={process} alt="process" className="absolute inset-0 w-full h-full object-cover object-[72%_center] md:object-center" />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col justify-center min-h-[90vh] px-10 md:px-20 max-w-2xl">
          <p className="text-sm tracking-[4px] uppercase text-gray-400 mb-4">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Handled with Care.<br />
            From Cherry to Cup.
          </h2>

          <p className="text-gray-300 mt-5">
            Thoughtful processes that honour the bean,
            preserve its character and bring out the best
            in every harvest.
          </p>

          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 w-fit border border-[#b7c58b] text-[#b7c58b] px-8 py-4 uppercase hover:bg-[#b7c58b] hover:text-black transition"
          >
            View Brochure →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#1a2b1a] text-[#e6b84f] px-10 md:px-20 py-16 text-center">
        <p className="uppercase text-sm tracking-widest">
          Marketed & Packed By
        </p>

        <h2 className="text-3xl font-serif mt-4">
          ILA ORIGINS PVT LTD
        </h2>

        <p className="mt-6">
          Bangalore – 560004<br />
          Tel: +91 8042103133<br />
          ilaorigins@gmail.com
        </p>
      </footer>

    </div>
  );
}