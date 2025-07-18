import { FaGithub, FaLink } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const sideProjects = [
  {
    title: "게임코어 게임 포털 웹사이트 개발 (https://gamecore.co.kr)",
    period: "2025.06 ~ (진행 중)",
    description: [
      "메인 페이지와 각 게임별 서브 도메인으로 구성된 게임 포털 웹사이트 개발 개인 프로젝트",
      "메인 페이지에는 각종 게임에 대한 뉴스들과 정보들을 제공하며, 각 서브도메인의 게임 사이트에는 게임에 대한 상세 정보와 커뮤니티 기능을 지향하는 방향으로 개발 진행중",
      "비회원/회원 모두 글작성과 댓글, 좋아요/싫어요 활동이 가능한 오픈형 게시판 시스템 구현",
      "기술 스택: NestJs(^11), NextJs(^15), TailwindCSS(^3), MySQL, Docker Compose, Github Actions(CI/CD), AWS(EC2, S3, RDS)",
      "* 자세한 프로젝트 설명 및 구조에 대해서는 아래 github README.md 또는 Notion 공개 문서 링크 참고 부탁드립니다.",
    ],
    link: [
      {
        type: "link",
        title: "게임코어 게임 포털 메인 사이트",
        url: "https://gamecore.co.kr/",
      },
      {
        type: "github",
        title: "GitHub 프로젝트 소개 ReadMe",
        url: "https://github.com/gamecorelabs/gamecore-monorepo",
      },
      {
        type: "notion",
        title: "Notion 문서",
        url: "#",
      },
    ],
  },
];

export default function SideProject() {
  return (
    <div id="main-side-project" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Side Projects
      </h2>
      <div className="space-y-5">
        {sideProjects.map((project, idx) => (
          <div
            key={project.title}
            className="border border-gray-200 rounded-lg dark:border-neutral-700 p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
              <div className="grow">
                <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  {project.title}
                </h3>
                <div className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  {project.period}
                </div>
                <ul className="list-disc ms-4 mt-1 space-y-1">
                  {project.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 dark:text-neutral-400"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                {project.link && project.link.length > 0 && (
                  <div className="mt-2">
                    {project.link.map((link, i) => (
                      <a
                        key={i}
                        className="inline-block text-xs text-gray-800 hover:text-blue-800 dark:text-neutral-200 dark:hover:text-blue-200 mr-2"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.title}
                      >
                        {link.type === "github" ? (
                          <FaGithub size={24} />
                        ) : link.type === "notion" ? (
                          <SiNotion size={24} />
                        ) : link.type === "link" ? (
                          <FaLink size={24} />
                        ) : (
                          link.title
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
