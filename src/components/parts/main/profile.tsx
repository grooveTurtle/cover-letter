import getGravatarUrl from "@/utils/getGravatarImage";
import info from "@/mocks/info.json";

export default function Profile() {
  const gravatarUrl = getGravatarUrl("grooveturtle29@gmail.com", 80);
  const myInfo: typeof info = info;

  return (
    <div className="flex items-center gap-x-3">
      <div className="shrink-0">
        <img
          className="shrink-0 size-16 rounded-full"
          src={gravatarUrl}
          alt="Avatar"
        />
      </div>

      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
          {myInfo.name}
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          {myInfo.job}
        </p>
      </div>
    </div>
  );
}
