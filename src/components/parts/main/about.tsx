import info from "@/mocks/info.json";

export default function About() {
  const myInfo: typeof info = info;

  return (
    <div id="main-about" className="mt-8">
      <p className="whitespace-pre-line text-sm text-gray-600 dark:text-neutral-400">
        {myInfo.detail}
      </p>
    </div>
  );
}
