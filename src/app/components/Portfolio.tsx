import { curricula } from "@/data/curricula";

// light-theme tag palettes
const programTagClasses = [
  "bg-indigo-50 text-indigo-700 ring-indigo-100",
  "bg-emerald-50 text-emerald-700 ring-emerald-100",
  "bg-amber-50 text-amber-700 ring-amber-100",
  "bg-sky-50 text-sky-700 ring-sky-100",
  "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
];

const pill =
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset";
const smallMuted = "text-sm text-gray-500";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 bg-gray-50"
      aria-labelledby="curricula-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="curricula-heading"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Curricula at a Glance
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {curricula.map((c) => (
            <article
              key={c.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              aria-labelledby={`${c.id}-title`}
            >
              {/* Flag + Title */}
              <div className="flex items-start gap-3">
                <span
                  className="text-2xl leading-none select-none"
                  aria-hidden="true"
                >
                  {c.flag}
                </span>
                <div>
                  <h3
                    id={`${c.id}-title`}
                    className="text-lg font-semibold text-gray-900"
                  >
                    {c.title}
                  </h3>
                  <p className={smallMuted}>{c.sub}</p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-gray-200 my-4" />

              {/* Tags: age + programs */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className={`${pill} ${programTagClasses[4]}`}>
                  <span className="sr-only">Ages:</span> Ages {c.ages}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {c.programs.map((p, i) => (
                  <span
                    key={p}
                    className={`${pill} ${programTagClasses[0]}`}
                    title="Program"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Philosophy */}
              <div className="mb-3">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Philosophy
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.philosophy.map((ph) => (
                    <span
                      key={ph}
                      className={`${pill} ${programTagClasses[1]}`}
                    >
                      {ph}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assessment */}
              <div className="mb-3">
                <p className="text-xs uppercase tracking-wide text-gray-700 mb-1">
                  Assessment
                </p>
                <p className={smallMuted}>{c.assessment}</p>
              </div>

              {/* Strength */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-700 mb-1">
                  Strength
                </p>
                <p className={smallMuted}>{c.strength}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
