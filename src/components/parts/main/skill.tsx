import { DiRedis } from "react-icons/di";
import {
  FaAws,
  FaBookOpen,
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaNodeJs,
  FaReact,
  FaRegLightbulb,
  FaSlack,
  FaSmile,
  FaTools,
  FaUserCheck,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { LiaDocker } from "react-icons/lia";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiPhp,
  SiNestjs,
  SiMysql,
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiNotion,
} from "react-icons/si";

const skillData = {
  backend: [
    { icon: <SiPhp size={20} />, label: "PHP" },
    { icon: <FaNodeJs size={18} />, label: "Node.js" },
    { icon: <SiNestjs size={18} />, label: "NestJs" },
    { icon: <SiMysql size={18} />, label: "MySQL" },
    { icon: <DiRedis size={22} />, label: "Redis" },
  ],
  frontend: [
    { icon: <SiJavascript size={18} />, label: "JavaScript" },
    { icon: <SiJquery size={18} />, label: "jQuery" },
    { icon: <SiTypescript size={18} />, label: "TypeScript" },
    { icon: <FaReact size={18} />, label: "React" },
    { icon: <RiSvelteFill size={18} />, label: "Svelte" },
    { icon: <RiNextjsFill size={18} />, label: "Next.js" },
    { icon: <FaCss3Alt size={18} />, label: "CSS" },
    { icon: <RiTailwindCssFill size={18} />, label: "Tailwind CSS" },
  ],
  collaboration: [
    { icon: <SiNotion size={18} />, label: "Notion" },
    { icon: <FaSlack size={18} />, label: "Slack" },
    { icon: <IoLogoFigma size={18} />, label: "Figma" },
    { icon: <FaGitlab size={18} />, label: "GitLab" },
    { icon: <FaGithub size={18} />, label: "GitHub Organization" },
  ],
  devops: [
    { icon: <FaDocker size={18} />, label: "Docker" },
    { icon: <LiaDocker size={18} />, label: "Docker-Compose" },
    { icon: <FaAws size={18} />, label: "AWS(EC2, S3, RDS)" },
    { icon: <FaGitlab size={18} />, label: "GitLab CI/CD" },
  ],
  mindset: [
    { icon: <FaRegLightbulb size={18} />, label: "적응력" },
    { icon: <FaUserCheck size={18} />, label: "책임감" },
    { icon: <FaUserFriends size={18} />, label: "유저 중심 사고" },
    { icon: <FaSmile size={18} />, label: "긍정적인 태도" },
    { icon: <FaUsers size={18} />, label: "사교성" },
    { icon: <FaBookOpen size={18} />, label: "자기개발" },
    { icon: <FaTools size={18} />, label: "리팩토링" },
  ],
};

export default function Skill() {
  return (
    <div id="main-skill" className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Skills
      </h2>

      <div className="space-y-3">
        {Object.entries(skillData).map(([category, items]) => (
          <dl key={category} className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                {(() => {
                  switch (category) {
                    case "backend":
                      return "Backend";
                    case "frontend":
                      return "Frontend";
                    case "collaboration":
                      return "Collaboration";
                    case "devops":
                      return "Infra / DevOps";
                    case "mindset":
                      return "Mindset";
                    default:
                      return category;
                  }
                })()}
              </span>
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-1">
                {items.map((data, idx) => (
                  <li
                    key={idx}
                    className={`me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 ${
                      idx < items.length - 1 ? "after:content-[',']" : ""
                    }`}
                    style={{ gap: "0.2rem" }}
                  >
                    {"icon" in data && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        {data.icon}
                      </span>
                    )}
                    <span
                      style={{
                        lineHeight: 1,
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      {data.label}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
