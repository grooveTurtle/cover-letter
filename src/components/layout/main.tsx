import Profile from "@/components/parts/main/profile";
import About from "@/components/parts/main/about";
import History from "@/components/parts/main/history";
import Skill from "@/components/parts/main/skill";
import Project from "@/components/parts/main/project";
import Education from "@/components/parts/main/license";
import SideProject from "@/components/parts/main/side-project";

export default function Main() {
  return (
    <main id="content">
      <div className="w-full max-w-4xl mx-auto pt-6 px-4 sm:px-6 lg:px-8 print:pt-0 print:px-0 print:max-w-none">
        <Profile />

        <About />

        <History />

        <Education />

        <Skill />

        <Project />

        {/* <SideProject /> */}
      </div>
    </main>
  );
}
