import coorg from "../assets/coorg.jpg";
import { useNavigate } from "react-router-dom";

export default function Coorg() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f1ea] min-h-screen text-black px-6 md:px-20 py-16 font-serif">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm underline hover:text-gray-600"
      >
        ← Back
      </button>

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-5xl tracking-wide">COORG (KODAGU)</h1>
        <p className="text-sm tracking-widest mt-2">KARNATAKA, INDIA</p>
      </div>

      {/* HERO IMAGE */}
      <img
        src={coorg}
        className="w-full h-[420px] object-cover rounded-lg mb-14"
      />

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-16 border-t pt-10">

        {/* LEFT */}
        <div>
          <h3 className="text-sm tracking-widest mb-4 border-b pb-2">TERROIR</h3>
          <p className="mb-6 text-sm">Elevation: 800–1,200 MASL</p>

          <img
            src={coorg}
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          <h3 className="text-sm tracking-widest border-b pb-2 mb-2">
            BIODIVERSITY
          </h3>
          <p className="text-sm leading-6">
            Lateritic clay<br />
            High moisture retention
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-sm tracking-widest border-b pb-2 mb-6">
            CUP PROFILE
          </h3>

          {/* ARABICA */}
          <div className="mb-10">
            <h4 className="font-semibold mb-4">ARABICA</h4>

            {/* RADAR GRAPH */}
            <svg viewBox="0 0 200 200" className="w-40 mb-4">
              <polygon
                points="100,20 160,60 140,140 60,140 40,60"
                fill="#c69c6d"
                opacity="0.6"
              />
              <circle cx="100" cy="100" r="80" fill="none" stroke="#aaa" />
            </svg>

            <p className="text-sm leading-6">
              Mild Acidity<br />
              Chocolate<br />
              Hazelnut<br />
              Balanced Body
            </p>
          </div>

          {/* ROBUSTA */}
          <div className="mb-10">
            <h4 className="font-semibold mb-4">ROBUSTA CHERRY</h4>

            <svg viewBox="0 0 200 200" className="w-40 mb-4">
              <polygon
                points="100,30 170,70 150,150 50,150 30,70"
                fill="#8b5e3c"
                opacity="0.6"
              />
              <circle cx="100" cy="100" r="80" fill="none" stroke="#aaa" />
            </svg>

            <p className="text-sm leading-6">
              Strong crema<br />
              Dark cocoa<br />
              Bitterness<br />
              High body
            </p>
          </div>

          {/* BUYER */}
          <h3 className="text-sm tracking-widest border-b pb-2 mb-3">
            BUYER RELEVANCE
          </h3>

          <p className="text-sm leading-6">
            Espresso blends<br />
            Cost-stable Robusta for crema<br />
            Consistent bulk availability
          </p>
        </div>

      </div>
    </div>
  );
}