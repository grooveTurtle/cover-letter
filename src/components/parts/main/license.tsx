import license from "@/mocks/license.json";

export default function License() {
  const licensesData = license;
  return (
    <div id="main-license" className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        License
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {licensesData.map((license, idx) => (
          <div
            key={license.title}
            className="flex p-4 gap-3 border border-gray-200 rounded-lg dark:border-neutral-700 items-center"
          >
            <div>
              <img
                src={`/cover-letter/${license.src}`}
                alt={license.alt}
                width={52}
                height={52}
                className=""
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <h3
                className={`mb-1 text-xs text-gray-600 dark:text-neutral-400${
                  idx === 1 ? " mt-1" : ""
                }`}
              >
                {license.date}
              </h3>
              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                {license.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
