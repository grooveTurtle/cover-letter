import Image from "next/image";

export default function History() {
  return (
    <div id="main-history" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        History
      </h2>

      <div>
        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                className="shrink-0 size-6 rounded-full"
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
              Web Designer &amp; Web Developer
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              The company has high expectations and using OKRs there is a mutual
              understanding of expectations and performance.
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
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <Image
                className="shrink-0 size-6 rounded-full"
                src="/suwon.jpg"
                width="32"
                height="32"
                alt="Inven Logo"
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

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              정보보호학과 전공
            </p>

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
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <svg
                className="shrink-0 size-6 text-gray-600 dark:text-neutral-400"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z"
                  fill="#36C5F0"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z"
                  fill="#2EB67D"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z"
                  fill="#ECB22E"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z"
                  fill="#E01E5A"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2011 - 2021
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Junior Software Engineer at Slack
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Work in Slack is one of the beautiful experience I can do in my
              entire life. There are a lot of interesting thing to learn and
              manager respect your time and your personality.
            </p>
          </div>
        </div>

        <div className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <svg
                className="shrink-0 size-6 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              2010 - 2011
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Freelance Graphic Designer
            </p>

            <ul className="list-disc ms-6 mt-3 space-y-1.5">
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Worked with a diverse range of clients, delivering tailored
                design solutions.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Developed and maintained strong client relationships through
                effective communication and project management.
              </li>
              <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                Utilized tools such as Notion for project tracking, Mailchimp
                for email marketing designs, Slack for team collaboration, and
                GitHub for version control and project sharing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
