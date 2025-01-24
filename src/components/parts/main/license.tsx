import Image from "next/image";

export default function License() {
  return (
    <div id="main-license" className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        License
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex p-4 gap-3 border border-gray-200 rounded-lg dark:border-neutral-700">
          <div>
            <Image
              src="/qnet.png"
              alt="정보처리기사"
              width={52}
              height={52}
              className=""
            />
          </div>
          <div>
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2015.10
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              정보처리기사
            </p>
          </div>

          {/* <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Harvard University
          </p> */}
        </div>

        <div className="flex gap-3 p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <div>
            <Image
              src="/mos.png"
              alt="MOS Master 아이콘"
              width={52}
              height={52}
              className=""
            />
          </div>

          <div>
            <h3 className="mt-1 mb-1 text-xs text-gray-600 dark:text-neutral-400">
              2011.03
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              Mos Master 2007
            </p>
          </div>

          {/* <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            The University of Manchester
          </p> */}
        </div>
      </div>
    </div>
  );
}
