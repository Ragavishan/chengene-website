"use client";

import { useEffect, useState } from "react";

const equipment = [
  {
    name: "Biosafety Cabinet – B2 Class",
    image: "/equipment/biosafety-cabinet-b2-class2.jpg",
  },
  {
    name: "Cell Counter",
    image: "/equipment/cell-counter.jpg",
  },
  {
    name: "Centrifuge",
    image: "/equipment/centrifuge.jpg",
  },
  {
    name: "CO₂ Incubator",
    image: "/equipment/co2-incubator.jpg",
  },
  {
    name: "Electroporator",
    image: "/equipment/electroporator.jpg",
  },
  {
    name: "ELISA Reader",
    image: "/equipment/elisa-reader.jpg",
  },
  {
    name: "Eppendorf CO₂ Incubator",
    image: "/equipment/eppendorf-co2-incubator.png",
  },
  {
    name: "FPLC",
    image: "/equipment/fplc.jpg",
  },
  {
    name: "HPLC",
    image: "/equipment/hplc.jpg",
  },
  {
    name: "Inverted Microscope",
    image: "/equipment/inverted-microscope.jpg",
  },
  {
    name: "Laminar Air Flow",
    image: "/equipment/laminar-air-flow.jpg",
  },
  {
    name: "NanoDrop",
    image: "/equipment/nanodrop.jpg",
  },
  {
    name: "PCR",
    image: "/equipment/pcr.jpg",
  },
  {
    name: "Stackable CO₂ Incubator",
    image: "/equipment/stackable-co2-incubator.jpg",
  },
];

export default function EquipmentShowcase() {
  const [selectedEquipment, setSelectedEquipment] = useState<
    (typeof equipment)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedEquipment) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedEquipment(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedEquipment]);

  return (
    <>
      <section
        id="equipment"
        className="relative overflow-hidden bg-white py-14 md:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative">
          {/* Heading */}
          <div className="mx-auto max-w-7xl px-5 text-center md:px-16">
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4">
              <span className="h-[2px] w-7 bg-purple-400 sm:w-10" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-purple-600 sm:text-xs sm:tracking-[0.3em]">
                Our Equipment
              </span>

              <span className="h-[2px] w-7 bg-purple-400 sm:w-10" />
            </div>

            <h2 className="text-[1.8rem] font-semibold leading-[1.12] tracking-tight text-[#291844] sm:text-4xl md:text-5xl">
              Advanced Equipment.
              <span className="block text-purple-600">
                Built for Scientific Excellence.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-[#6F6282] sm:mt-5 sm:text-base sm:leading-7">
              Our research and laboratory infrastructure is supported by
              specialized equipment designed for reliable scientific,
              analytical, and biopharmaceutical workflows.
            </p>
          </div>

          {/* Marquee */}
          <div className="relative mt-9 overflow-hidden sm:mt-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-28" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-28" />

            <div
              className={`equipment-marquee flex w-max gap-3 px-2 sm:gap-5 sm:px-3 ${
                selectedEquipment ? "animation-paused" : ""
              }`}
            >
              {/* First set */}
              {equipment.map((item) => (
                <button
                  key={`first-${item.name}`}
                  type="button"
                  onClick={() => setSelectedEquipment(item)}
                  className="group w-[210px] shrink-0 overflow-hidden rounded-xl border border-purple-100 bg-[#FAF8FF] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/[0.08] focus:outline-none focus:ring-2 focus:ring-purple-400 sm:w-[280px] sm:rounded-2xl"
                >
                  <div className="relative h-[165px] overflow-hidden bg-white sm:h-[210px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#291844]/0 transition duration-300 group-hover:bg-[#291844]/25">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-purple-800 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100 sm:px-4 sm:py-2 sm:text-xs">
                        View Full Image
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 py-3 sm:px-5 sm:py-4">
                    <p className="text-[12px] font-semibold leading-5 text-[#38205F] sm:text-sm">
                      {item.name}
                    </p>

                    <div className="mt-1.5 h-[2px] w-7 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-12 sm:mt-2 sm:w-8" />
                  </div>
                </button>
              ))}

              {/* Duplicate set */}
              {equipment.map((item) => (
                <button
                  key={`second-${item.name}`}
                  type="button"
                  onClick={() => setSelectedEquipment(item)}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="group w-[210px] shrink-0 overflow-hidden rounded-xl border border-purple-100 bg-[#FAF8FF] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/[0.08] sm:w-[280px] sm:rounded-2xl"
                >
                  <div className="relative h-[165px] overflow-hidden bg-white sm:h-[210px]">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#291844]/0 transition duration-300 group-hover:bg-[#291844]/25">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-purple-800 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100 sm:px-4 sm:py-2 sm:text-xs">
                        View Full Image
                      </span>
                    </div>
                  </div>

                  <div className="px-3.5 py-3 sm:px-5 sm:py-4">
                    <p className="text-[12px] font-semibold leading-5 text-[#38205F] sm:text-sm">
                      {item.name}
                    </p>

                    <div className="mt-1.5 h-[2px] w-7 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-12 sm:mt-2 sm:w-8" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom label */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2 px-5 sm:mt-10 sm:gap-3 sm:px-6">
            <span className="h-px w-7 bg-purple-200 sm:w-10" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-700 sm:text-[16px] sm:tracking-[0.25em]">
              Research · Innovation · Precision
            </span>

            <span className="h-px w-7 bg-purple-200 sm:w-10" />
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedEquipment && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#160D2B]/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setSelectedEquipment(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedEquipment(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-[#291844] shadow-md transition hover:bg-purple-100"
            >
              ×
            </button>

            {/* Full Image */}
            <div className="flex min-h-[50vh] items-center justify-center bg-[#F7F4FF] p-4 sm:min-h-[65vh] sm:p-8">
              <img
                src={selectedEquipment.image}
                alt={selectedEquipment.name}
                className="max-h-[65vh] max-w-full object-contain"
              />
            </div>

            {/* Image Name */}
            <div className="border-t border-purple-100 bg-white px-6 py-5 text-center">
              <p className="text-lg font-semibold text-[#291844]">
                {selectedEquipment.name}
              </p>

              <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-purple-700">
                CHENGENE · Laboratory Equipment
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}