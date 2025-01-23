import Image from "next/image";

export default function History() {
  return (
    <div id="main-history" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        History
      </h2>

      <div>
        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <Image
                className="shrink-0 size-8 rounded-full"
                src="/inven2.png"
                width="32"
                height="32"
                alt="Inven Logo"
              />
            </div>
          </div>

          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2018.04 - 2025.01
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              풀스택 웹 개발 (선임 개발자)
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              인벤 KR의 각종 신규 프로젝트를 진행 및 시스템 유지보수를
              진행하였습니다.
            </p>

            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Designed template UIs and design systems in Figma.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Converted UIs into responsive HTML and CSS with a mobile-first
                approach.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Created custom illustrations and item description banners.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Provided detailed documentation and customer support on GitHub.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Engaged with users to address setup inquiries, bug issues, and
                feedback.
              </li>
            </ul>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-8 flex justify-center items-center">
              <Image
                className="shrink-0 size-8 rounded-full"
                src="/suwon2.png"
                width="32"
                height="32"
                alt="수원대학교 로고"
              />
            </div>
          </div>

          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2009 - 2016
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              수원대학교 학사 졸업
            </p>

            <div className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              <p>전공: 정보보호학과</p>
              <p>학점: 3.91/4.5</p>
            </div>

            <div className="mt-3">
              <a
                className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700"
                href="#"
              >
                <div className="relative flex items-center overflow-hidden">
                  <img
                    className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                    src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Blog Image"
                  />

                  <div className="grow p-4 ms-32 sm:ms-48">
                    <div className="min-h-24 flex flex-col justify-center">
                      <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                        Studio by Mailchimp
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Produce professional, reliable streams easily leveraging
                        Mailchimp's innovative broadcast studio.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-10 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-8 flex justify-center items-center">
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
            </div>
          </div>

          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2006 - 2009
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              광영남자고등학교 이공계열 졸업
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
