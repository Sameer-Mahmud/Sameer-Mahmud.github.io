import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/projectcard";
import { siteConfig } from "@/config/site";
export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects</h1>
        </div>
      </section>
      <section className="">
        <div className="grid gap-4 py-8 md:py-10 sm:grid-cols-1 md:grid-cols-2">
          {
            siteConfig.projectsItems.map(item => (
              <ProjectCard url = {item.href} imageUrl={item.imageUrl} name= {item.name} desc = {item.desc} />
            ))

          }
        </div>
      </section>
    </DefaultLayout>
  );
}
