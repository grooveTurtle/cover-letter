import Image from "next/image";
import history from "@/mocks/history.json";

export default function History() {
  const historyData = history;
  return (
    <div id="main-history" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        History
      </h2>
      <div>
        {historyData.map((item, idx) => (
          <div key={idx} className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-8 flex justify-center items-center">
                {item.logo.svg ? (
                  <svg
                    className="shrink-0 size-8 text-gray-800 dark:text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                ) : (
                  <Image
                    className="shrink-0 size-8 rounded-full"
                    src={
                      `${item.logo.src}` ? `/cover-letter/${item.logo.src}` : ""
                    }
                    width={item.logo.width}
                    height={item.logo.height}
                    alt={item.logo.alt ?? ""}
                  />
                )}
              </div>
            </div>
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                {item.period}
              </h3>
              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                {item.title}
              </p>
              {item.description && (
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {item.description}
                </p>
              )}
              {item.details && (
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {item.details.map((detail, i) => (
                    <li
                      key={i}
                      className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              {item.info && (
                <div className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  <p>{item.info.content1}</p>
                  <p>{item.info.content2}</p>
                </div>
              )}
              {item.link && (
                <div className="mt-3">
                  <a
                    className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                    href={item.link.href}
                  >
                    <div className="relative flex items-center overflow-hidden">
                      <img
                        className="w-32 sm:w-48 h-auto object-contain rounded-s-lg absolute left-0 top-1/2 -translate-y-1/2"
                        src={`/cover-letter/${item.link.img.src}`}
                        alt={item.link.img.alt}
                      />
                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                            {item.link.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                            {item.link.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
