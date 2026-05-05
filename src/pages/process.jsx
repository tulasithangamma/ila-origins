import processImg from "../assets/process.jpeg";

export default function Process() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* 🔥 HERO BANNER */}
      <section className="relative h-[70vh] overflow-hidden">

        <img
          src={processImg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">

          <p className="text-xs tracking-[4px] uppercase text-gray-400 mb-4">
            OUR PROCESS
          </p>

          <h1 className="text-5xl font-serif leading-tight">
            Handled with <span className="text-[#b7c58b] italic">Care.</span><br />
            From Cherry to Cup.
          </h1>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Thoughtful processes that honour the bean,
            preserve its character and bring out the best in every harvest.
          </p>

        </div>
      </section>

      {/* 🔥 PROCESS DETAILS */}
      <section className="bg-[#ede7dc] text-black px-6 md:px-20 py-20">

        <div className="max-w-6xl mx-auto space-y-16">

          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-4">01. Cultivation</h3>
              <p className="text-gray-700 leading-relaxed">
                Coffee begins in rich, living soil. Our farms use shade-grown methods,
                preserving biodiversity while allowing beans to mature slowly,
                developing complex flavour profiles.
              </p>
            </div>

            <div className="h-64 bg-black/10 rounded-lg"></div>
          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="h-64 bg-black/10 rounded-lg order-2 md:order-1"></div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-serif mb-4">02. Processing</h3>
              <p className="text-gray-700 leading-relaxed">
                Cherries are carefully handpicked and processed using natural,
                washed or honey methods. Each technique enhances specific
                characteristics like sweetness, acidity and body.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-4">03. Roasting</h3>
              <p className="text-gray-700 leading-relaxed">
                Precision roasting unlocks the essence of each origin.
                We balance heat and timing to highlight unique flavour notes,
                ensuring consistency and depth in every batch.
              </p>
            </div>

            <div className="h-64 bg-black/10 rounded-lg"></div>
          </div>

        </div>
      </section>

    </div>
  );
}