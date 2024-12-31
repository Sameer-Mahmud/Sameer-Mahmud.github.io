import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { ArrowDownIcon, GithubIcon, LinkedInLogo} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import ProjectsPage from "./projects";
import ProjectCard from "@/components/projectcard";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "violet" })}>Hello&nbsp;</span>
          <br />
          <span className={title()}>
            My Name is Sameer Mahmud
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            A Full Stack Developer, Devops Engineer, Web3 Builder
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.linkedin}
          >
            <LinkedInLogo size={20} />
            LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            Github
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Button 
        disableRipple
        disableAnimation
            variant="light"
            className= "flex flex-col h-16"
            onClick={() => {
              const section = document.getElementById("projects-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Check my Projects Below
            <ArrowDownIcon width={""} />
          </Button>
        </div>
      </section>
      <section id="projects-section">
              <div className="grid gap-4 md:py-1 sm:grid-cols-1 md:grid-cols-2">
                {
                  siteConfig.projectsItems.map(item => (
                    <ProjectCard key={item.name} url = {item.href} imageUrl={item.imageUrl} name= {item.name} desc = {item.desc} />
                  ))
      
                }
              </div>
            </section>
    </DefaultLayout>
  );
}
